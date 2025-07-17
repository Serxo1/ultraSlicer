# Blueprint ⚡ Grid‑Slicer Visual (Power BI API 5.3)

## 0. Pré‑requisitos
| Item | Versão mínima | Obs. |
|------|---------------|------|
| Node.js | 18 LTS | Evite 20 – conflitos com pbiviz |
| `powerbi-visuals-tools` | 5.3.x | `npm i -g powerbi-visuals-tools@5.3` |
| `pbiviz new` template | v5 | Gera scaffold API 5.3 |

---

## 1. Bootstrapping 💻
```bash
pbiviz new GridSlicer --api-version 5.3.0
cd GridSlicer
code .
Limpe dependências extras; deixe apenas d3 se for usar.

2. capabilities.json
Funil de dados

jsonc
Copiar
Editar
"dataRoles":[{"name":"SlicerFields","kind":"Grouping","displayName":"Campos"}],
"dataViewMappings":[{ "categorical":{ "categories":{ "for":{"in":"SlicerFields"} } } }]
Painel de formatação

jsonc
Copiar
Editar
"objects":{
  "layout":{
    "displayName":"Layout",
    "properties":{
      "columns":{"type":{"numeric":true},"displayName":"Colunas"},
      "gutter" :{"type":{"numeric":true},"displayName":"Espaço"}
    }
  },
  "slicer":{
    "displayName":"Slicer",
    "properties":{
      "height"      :{"type":{"numeric":true}},
      "width"       :{"type":{"numeric":true}},
      "borderColor" :{"type":{"fill":{"solid":{"color":true}}}},
      "singleSelect":{"type":{"bool":true}}
    }
  }
}
3. Estrutura de código
cpp
Copiar
Editar
/src
 ├─ visual.ts          // IVisual lifecycle
 ├─ gridRenderer.ts    // constroi DOM + CSS Grid
 ├─ slicerManager.ts   // aplica filtros JSON
 └─ settings.ts        // gerado pelo tools (format pane)
4. Lifecycle essencial (visual.ts)
ts
Copiar
Editar
export class Visual implements IVisual {
  private host: IVisualHost;
  private selectionManager: ISelectionManager;
  private container: HTMLElement;
  private cache = new Map<string,string[]>();

  constructor(opts: VisualConstructorOptions) {
    this.host = opts.host;
    this.selectionManager = this.host.createSelectionManager();
    this.container = document.createElement('div');
    this.container.className = 'grid-root';
    opts.element.appendChild(this.container);
  }

  public update(opts: VisualUpdateOptions): void {
    const cat = opts.dataViews[0].categorical.categories;
    this.buildCache(cat);      // fetchMoreData se necessário
    this.renderGrid(cat);      // cria / atualiza selects
  }

  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return getFormattingCards();   // settings.ts helper
  }

  public destroy(): void { /* limpa listeners */ }
}
5. Filtro programático (slicerManager.ts)
ts
Copiar
Editar
applyFilter(col: string, values: string[], single: boolean) {
  const filter: powerbi.IBasicFilter = {
    $schema: 'https://powerbi.com/product/schema#basic',
    target: { table: this.tableName, column: col },
    operator: 'In',
    values
  };
  this.host.applyJsonFilter(
    filter, 'general', 'filter',
    powerbi.FilterAction.merge
  );
}
Para única seleção, limpe o filtro antes de aplicar a nova seleção.

6. Renderização performática
CSS Grid:

css
Copiar
Editar
.grid-root{display:grid;grid-template-columns:repeat(var(--cols),1fr);gap:var(--gap);}
.slicer{border:1px solid var(--border);height:var(--h);width:var(--w);}
Virtual scroll se > 500 itens → só renderizar visíveis.

Debounce de 200 ms nos change dos <select>.

7. Personalização que o usuário verá
Propriedade	Local	Efeito
Colunas	Layout	Nº de colunas da grade
Gutter	Layout	Espaço px entre slicers
Height/Width	Slicer	Tamanho individual
BorderColor	Slicer	Cor da borda
SingleSelect	Slicer	Alterna única × múltipla

8. Build & Test
bash
Copiar
Editar
pbiviz start        # hot‑reload no browser
pbiviz package      # gera .pbiviz para import
9. Checklist de performance
 Usou fetchMoreData para lotes > 30 k linhas

 Cache de valores por coluna em Map

 DOM virtualizado (IntersectionObserver)

 Sem libs externas além de APIs nativas

 Debounce + TupleFilter quando múltiplos campos ativos

10. Próximos passos
Bookmarks: garantir que selectionManager propague IDs.

Hierarquia: suporte drill se a coluna for hierárquica.

Tema: ler cores do tema via `host