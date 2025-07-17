"use strict";

import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import DataViewCategorical = powerbi.DataViewCategorical;

// Presumindo que estes serão criados a seguir
// import { getFormattingCards } from "./settings"; 
// import { renderGrid } from "./gridRenderer";

export class Visual implements IVisual {
  private host: IVisualHost;
  private selectionManager: ISelectionManager;
  private container: HTMLElement;
  private cache = new Map<string, string[]>();

  constructor(opts: VisualConstructorOptions) {
    if (!opts) { return; } // Safety check
    this.host = opts.host;
    this.selectionManager = this.host.createSelectionManager();
    this.container = document.createElement('div');
    this.container.className = 'grid-root';
    opts.element.appendChild(this.container);
  }

  public update(opts: VisualUpdateOptions): void {
    if (!opts || !opts.dataViews || !opts.dataViews[0] || !opts.dataViews[0].categorical || !opts.dataViews[0].categorical.categories) {
        this.container.innerHTML = '';
        return;
    }

    this.container.innerHTML = ''; // Limpa o container principal
    const categories = opts.dataViews[0].categorical.categories;

    // Cria um observer para virtualização
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target as HTMLElement;
                el.textContent = el.dataset.value;
                observer.unobserve(el);
            }
        });
    }, { root: this.container, threshold: 0.1 });

    // Itera sobre cada coluna (categoria) para criar um slicer
    categories.forEach(category => {
        const slicerContainer = document.createElement('div');
        slicerContainer.className = 'slicer-container';

        const slicerHeader = document.createElement('div');
        slicerHeader.className = 'slicer-header';
        slicerHeader.textContent = category.source.displayName;
        slicerContainer.appendChild(slicerHeader);

        category.values.forEach((value, index) => {
            const selectionId = this.host.createSelectionIdBuilder()
                .withCategory(category, index)
                .createSelectionId();

            const item = document.createElement('div');
            item.className = 'slicer-item';
            item.dataset.value = value as string;
            
            // Verifica se o item está selecionado
            if (this.selectionManager.contains(selectionId)) {
                item.classList.add('selected');
            }

            item.addEventListener('click', () => {
                this.selectionManager.select(selectionId, false); // false para permitir multiselect
                // Alterna a classe 'selected' para feedback visual imediato
                item.classList.toggle('selected');
            });

            slicerContainer.appendChild(item);
            observer.observe(item);
        });

        this.container.appendChild(slicerContainer);
    });
  }

  // public getFormattingModel(): powerbi.visuals.FormattingModel {
  //   return getFormattingCards();   // TODO: Implementar helper em settings.ts
  // }

  public destroy(): void { 
    /* TODO: Limpar listeners e referências */ 
  }

  private buildCache(categories: powerbi.DataViewCategoryColumn[]): void {
      // TODO: Implementar cache e lógica de fetchMoreData
  }
}