"use strict";
// --- estilos do visual (webpack trata .less) ---
import "./style/visual.less";

import powerbi from "powerbi-visuals-api";
import {
    FormattingSettingsService,
    formattingSettings
} from "powerbi-visuals-utils-formattingmodel";
import { dataViewObjects } from "powerbi-visuals-utils-dataviewutils";
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;


/* ---------- SETTINGS CLASSES (NEW API) ---------- */

class SlicerSettingsCard extends formattingSettings.Card {
    multiSelect = new formattingSettings.ToggleSwitch({
        name: "multiSelect",
        displayName: "Multi-Select",
        value: true
    });

    singleSelect = new formattingSettings.ToggleSwitch({
        name: "singleSelect",
        displayName: "Single-Select",
        value: false
    });

    name: string = "slicerSettings";
    displayName: string = "Slicer Settings";
    slices: formattingSettings.Slice[] = [this.multiSelect, this.singleSelect];
}

class GridCard extends formattingSettings.Card {
    flexDirection = new formattingSettings.ItemDropdown({
        name: "flexDirection", displayName: "Direction",
        items: [{ value: "row", displayName: "Horizontal" }, { value: "column", displayName: "Vertical" }],
        value: { value: "row", displayName: "Horizontal" }
    });
    justifyContent = new formattingSettings.ItemDropdown({
        name: "justifyContent", displayName: "Justify Content",
        items: [ 
            { value: "flex-start", displayName: "Start" }, { value: "center", displayName: "Center" },
            { value: "flex-end", displayName: "End" }, { value: "space-between", displayName: "Space Between" },
            { value: "space-around", displayName: "Space Around" }
        ],
        value: { value: "flex-start", displayName: "Start" }
    });
    alignItems = new formattingSettings.ItemDropdown({
        name: "alignItems", displayName: "Align Items",
        items: [{ value: "flex-start", displayName: "Start" }, { value: "center", displayName: "Center" }, { value: "flex-end", displayName: "End" }, { value: "stretch", displayName: "Stretch" }],
        value: { value: "flex-start", displayName: "Start" }
    });
    alignContent = new formattingSettings.ItemDropdown({
        name: "alignContent", displayName: "Align Content",
        items: [{ value: "flex-start", displayName: "Start" }, { value: "center", displayName: "Center" }, { value: "flex-end", displayName: "End" }, { value: "space-between", displayName: "Space Between" }, { value: "space-around", displayName: "Space Around" }, { value: "stretch", displayName: "Stretch" }],
        value: { value: "flex-start", displayName: "Start" }
    });
    horizontalSpacing = new formattingSettings.NumUpDown({ name: "horizontalSpacing", displayName: "Horizontal Spacing", value: 5 });
    verticalSpacing = new formattingSettings.NumUpDown({ name: "verticalSpacing", displayName: "Vertical Spacing", value: 5 });

    name: string = "grid";
    displayName: string = "Grid Layout";
    slices: formattingSettings.Slice[] = [this.flexDirection, this.justifyContent, this.alignItems, this.alignContent, this.horizontalSpacing, this.verticalSpacing];
}

class ContainerCard extends formattingSettings.Card {
    backgroundColor = new formattingSettings.ColorPicker({ name: "backgroundColor", displayName: "Background Color", value: { value: "#FFFFFF" } });
    borderColor = new formattingSettings.ColorPicker({ name: "borderColor", displayName: "Border Color", value: { value: "#DDDDDD" } });
    borderWidth = new formattingSettings.NumUpDown({ name: "borderWidth", displayName: "Border Width", value: 1 });
    borderRadius = new formattingSettings.NumUpDown({ name: "borderRadius", displayName: "Border Radius", value: 5 });
    padding = new formattingSettings.NumUpDown({ name: "padding", displayName: "Padding", value: 10 });
    shadow = new formattingSettings.TextInput({ name: "shadow", displayName: "Shadow", value: "none", placeholder: "e.g., 2px 2px 5px #888888" });
    flexGrow = new formattingSettings.ToggleSwitch({ name: "flexGrow", displayName: "Flex Grow", value: false });

    name: string = "container";
    displayName: string = "Container";
    slices: formattingSettings.Slice[] = [this.backgroundColor, this.borderColor, this.borderWidth, this.borderRadius, this.padding, this.shadow, this.flexGrow];
}

class LabelCard extends formattingSettings.Card {
    fontColor = new formattingSettings.ColorPicker({ name: "fontColor", displayName: "Font Color", value: { value: "#333333" } });
    fontSize = new formattingSettings.NumUpDown({ name: "fontSize", displayName: "Font Size", value: 14 });
    fontWeight = new formattingSettings.ItemDropdown({ name: "fontWeight", displayName: "Font Weight", items: [{ value: "normal", displayName: "Normal" }, { value: "bold", displayName: "Bold" }], value: { value: "bold", displayName: "Bold" } });
    textAlign = new formattingSettings.ItemDropdown({ name: "textAlign", displayName: "Text Align", items: [{ value: "left", displayName: "Left" }, { value: "center", displayName: "Center" }, { value: "right", displayName: "Right" }], value: { value: "left", displayName: "Left" } });

    name: string = "label";
    displayName: string = "Label";
    slices: formattingSettings.Slice[] = [this.fontColor, this.fontSize, this.fontWeight, this.textAlign];
}

class SelectorCard extends formattingSettings.Card {
    backgroundColor = new formattingSettings.ColorPicker({ name: "backgroundColor", displayName: "Background Color", value: { value: "#FFFFFF" } });
    fontColor = new formattingSettings.ColorPicker({ name: "fontColor", displayName: "Font Color", value: { value: "#333333" } });
    fontSize = new formattingSettings.NumUpDown({ name: "fontSize", displayName: "Font Size", value: 12 });
    borderColor = new formattingSettings.ColorPicker({ name: "borderColor", displayName: "Border Color", value: { value: "#CCCCCC" } });
    borderWidth = new formattingSettings.NumUpDown({ name: "borderWidth", displayName: "Border Width", value: 1 });
    borderRadius = new formattingSettings.NumUpDown({ name: "borderRadius", displayName: "Border Radius", value: 4 });
    height = new formattingSettings.NumUpDown({ name: "height", displayName: "Height", value: 40 });
    arrowColor = new formattingSettings.ColorPicker({ name: "arrowColor", displayName: "Arrow Color", value: { value: "#666666" } });

    name: string = "selector";
    displayName: string = "Selector";
    slices: formattingSettings.Slice[] = [this.backgroundColor, this.fontColor, this.fontSize, this.borderColor, this.borderWidth, this.borderRadius, this.height, this.arrowColor];
}

class DropdownCard extends formattingSettings.Card {
    itemBackgroundColor = new formattingSettings.ColorPicker({ name: "itemBackgroundColor", displayName: "Item Background", value: { value: "#FFFFFF" } });
    itemFontColor = new formattingSettings.ColorPicker({ name: "itemFontColor", displayName: "Item Font Color", value: { value: "#333333" } });
    itemHoverBackgroundColor = new formattingSettings.ColorPicker({ name: "itemHoverBackgroundColor", displayName: "Hover Background", value: { value: "#e9ecef" } });
    itemHoverFontColor = new formattingSettings.ColorPicker({ name: "itemHoverFontColor", displayName: "Hover Font Color", value: { value: "#0056b3" } });
    selectedItemBackgroundColor = new formattingSettings.ColorPicker({ name: "selectedItemBackgroundColor", displayName: "Selected Background", value: { value: "#007bff" } });
    selectedItemFontColor = new formattingSettings.ColorPicker({ name: "selectedItemFontColor", displayName: "Selected Font Color", value: { value: "#FFFFFF" } });

    name: string = "dropdown";
    displayName: string = "Dropdown Items";
    slices: formattingSettings.Slice[] = [
        this.itemBackgroundColor, this.itemFontColor, 
        this.itemHoverBackgroundColor, this.itemHoverFontColor,
        this.selectedItemBackgroundColor, this.selectedItemFontColor
    ];
}

class VisualFormattingSettings extends formattingSettings.Model {
    slicerSettings = new SlicerSettingsCard();
    grid = new GridCard();
    container = new ContainerCard();
    label = new LabelCard();
    selector = new SelectorCard();
    dropdown = new DropdownCard();

    cards = [this.slicerSettings, this.grid, this.container, this.label, this.selector, this.dropdown];
}

/* ------------------------- VISUAL ------------------------------ */



export class Visual implements IVisual {
  private host: IVisualHost;
  private selectionManager: ISelectionManager; // Ainda necessário para tooltips
  private container: HTMLElement;


  private formattingSettings: VisualFormattingSettings;
  private formattingSettingsService: FormattingSettingsService;

  constructor(options: VisualConstructorOptions) {
    this.host = options.host;
    this.selectionManager = this.host.createSelectionManager();
    this.formattingSettingsService = new FormattingSettingsService();
    this.container = document.createElement("div");
    this.container.className = "grid-root";
    options.element.appendChild(this.container);
  }

  public getFormattingModel(): powerbi.visuals.FormattingModel {
      return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
  }

  private updateThrottleTimeout: NodeJS.Timeout | null = null;
  
  public update(options: VisualUpdateOptions): void {
    this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettings, options.dataViews);

    if (!options?.dataViews?.[0]) {
        this.container.innerHTML = "";
        return;
    }

    const dataView = options.dataViews[0];



    const cat = dataView.categorical?.categories;
    if (cat) {
        this.renderDropdown(cat, dataView);
        
        // Throttle da atualização da UI para melhor performance
        if (this.updateThrottleTimeout) {
            clearTimeout(this.updateThrottleTimeout);
        }
        
        this.updateThrottleTimeout = setTimeout(() => {
            const dropdownContainers = this.container.querySelectorAll('.custom-dropdown');
            dropdownContainers.forEach(container => {
                this.updateSelectionUI(container as HTMLElement, dataView);
            });
            this.updateThrottleTimeout = null;
        }, 50); // Throttle de 50ms
    }
}

  private renderDropdown(categories: powerbi.DataViewCategoryColumn[], dataView: powerbi.DataView): void {
    const existingSlicers = new Set<string>();
    this.container.querySelectorAll('[data-slicer-name]').forEach((node: HTMLElement) => {
        existingSlicers.add(node.getAttribute('data-slicer-name'));
    });

    const currentSlicers = new Set<string>();
    
    // Sort categories alphabetically by display name
    const sortedCategories = [...categories].sort((a, b) => 
        a.source.displayName.localeCompare(b.source.displayName)
    );

    sortedCategories.forEach(category => {
        const slicerName = category.source.displayName;
        currentSlicers.add(slicerName);

        let slicerContainer = this.container.querySelector(`[data-slicer-name="${slicerName}"]`) as HTMLElement;
        if (!slicerContainer) {
            slicerContainer = this.createSlicerContainer(slicerName);
            this.container.appendChild(slicerContainer);
        } else {
            // Update existing container styles if needed
            this.applyContainerStyles(slicerContainer);
        }

        this.createDropdownLayout(slicerContainer, category, dataView);
        this.applyLabelStyles(slicerContainer.querySelector('.slicer-header'));
        this.applySelectorStyles(slicerContainer.querySelector('.custom-dropdown'));
    });

    // Remove old slicers
    existingSlicers.forEach(slicerName => {
        if (!currentSlicers.has(slicerName)) {
            const oldSlicer = this.container.querySelector(`[data-slicer-name="${slicerName}"]`);
            if (oldSlicer) {
                this.container.removeChild(oldSlicer);
            }
        }
    });

    this.applyGridStyles();
  }

  private applyGridStyles() {
    const g = this.formattingSettings.grid;
    this.container.style.flexDirection = g.flexDirection.value.value as string;
    this.container.style.justifyContent = g.justifyContent.value.value as string;
    this.container.style.alignItems = g.alignItems.value.value as string;
    this.container.style.alignContent = g.alignContent.value.value as string;
    this.container.style.gap = `${g.verticalSpacing.value}px ${g.horizontalSpacing.value}px`;
  }

  private createSlicerContainer(slicerName: string): HTMLElement {
      const slicerContainer = document.createElement("div");
      slicerContainer.className = "slicer-container";
      slicerContainer.setAttribute("data-slicer-name", slicerName);
      this.applyContainerStyles(slicerContainer);
      return slicerContainer;
  }

  private applyContainerStyles(element: HTMLElement) {
      if (!element) return;
      const c = this.formattingSettings.container;
      element.style.backgroundColor = c.backgroundColor.value.value;
      element.style.border = `${c.borderWidth.value}px solid ${c.borderColor.value.value}`;
      element.style.borderRadius = `${c.borderRadius.value}px`;
      element.style.boxShadow = c.shadow.value;
      element.style.padding = `${c.padding.value}px`;
      element.style.flexGrow = c.flexGrow.value ? '1' : '0';
  }

  private applyLabelStyles(element: HTMLElement) {
    if (!element) return;
    const l = this.formattingSettings.label;
    element.style.color = l.fontColor.value.value;
    element.style.fontSize = `${l.fontSize.value}px`;
    element.style.fontWeight = l.fontWeight.value.value as string;
    element.style.textAlign = l.textAlign.value.value as string;
  }

  private applySelectorStyles(element: HTMLElement) {
    if (!element) return;
    const s = this.formattingSettings.selector;
    const header = element.querySelector('.dropdown-header') as HTMLElement;
    if (header) {
        header.style.backgroundColor = s.backgroundColor.value.value;
        header.style.border = `${s.borderWidth.value}px solid ${s.borderColor.value.value}`;
        header.style.borderRadius = `${s.borderRadius.value}px`;
        header.style.height = `${s.height.value}px`;
    }
    const text = element.querySelector('.header-text') as HTMLElement;
    if (text) {
        text.style.color = s.fontColor.value.value;
        text.style.fontSize = `${s.fontSize.value}px`;
    }
    const arrow = element.querySelector('.arrow-down') as HTMLElement;
    if (arrow) {
        arrow.style.borderTopColor = s.arrowColor.value.value;
    }
  }

  private applyDropdownStyles(element: HTMLElement) {
    if (!element) return;
    const d = this.formattingSettings.dropdown;
    element.style.setProperty('--item-bg-color', d.itemBackgroundColor.value.value);
    element.style.setProperty('--item-font-color', d.itemFontColor.value.value);
    element.style.setProperty('--item-hover-bg-color', d.itemHoverBackgroundColor.value.value);
    element.style.setProperty('--item-hover-font-color', d.itemHoverFontColor.value.value);
    element.style.setProperty('--selected-bg-color', d.selectedItemBackgroundColor.value.value);
    element.style.setProperty('--selected-font-color', d.selectedItemFontColor.value.value);
  }

  private createDropdownLayout(container: HTMLElement, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView) {
    // Clear existing event listeners
    const oldDropdownContainer = container.querySelector(".custom-dropdown") as HTMLElement;
    if (oldDropdownContainer) {
        const oldHeader = oldDropdownContainer.querySelector(".dropdown-header") as HTMLElement;
        const oldList = oldDropdownContainer.querySelector(".dropdown-list-container") as HTMLElement;
        if (oldHeader) {
            const newHeader = oldHeader.cloneNode(true);
            oldHeader.parentNode.replaceChild(newHeader, oldHeader);
        }
        if (oldList) {
            oldList.classList.remove('open');
        }
    }

    let label = container.querySelector(".slicer-header") as HTMLElement;
    if (!label) {
        label = document.createElement("div");
        label.className = "slicer-header";
        container.appendChild(label);
    }
    label.textContent = category.source.displayName;

    let dropdownContainer = container.querySelector(".custom-dropdown") as HTMLElement;
    if (!dropdownContainer) {
        dropdownContainer = document.createElement("div");
        dropdownContainer.className = "custom-dropdown";
        container.appendChild(dropdownContainer);
    }

    let dropdownHeader = dropdownContainer.querySelector(".dropdown-header") as HTMLElement;
    if (!dropdownHeader) {
        dropdownHeader = document.createElement("div");
        dropdownHeader.className = "dropdown-header";
        dropdownContainer.appendChild(dropdownHeader);
    }

    let headerText = dropdownHeader.querySelector(".header-text") as HTMLElement;
    if (!headerText) {
        headerText = document.createElement("span");
        headerText.className = "header-text";
        dropdownHeader.appendChild(headerText);
    }

    let arrow = dropdownHeader.querySelector(".arrow-down") as HTMLElement;
    if (!arrow) {
        arrow = document.createElement("div");
        arrow.className = "arrow-down";
        dropdownHeader.appendChild(arrow);
    }

    let dropdownListContainer = dropdownContainer.querySelector(".dropdown-list-container") as HTMLElement;
    if (!dropdownListContainer) {
        dropdownListContainer = document.createElement("div");
        dropdownListContainer.className = "dropdown-list-container";
        dropdownContainer.appendChild(dropdownListContainer);
    }

    // Ensure dropdown is closed initially
    dropdownListContainer.classList.remove('open');

    // Toggle dropdown visibility
    dropdownHeader.onclick = (event) => {
        event.stopPropagation();
        const isOpen = dropdownListContainer.classList.toggle('open');
        if (isOpen) {
            document.addEventListener('click', closeDropdownOnOutsideClick, true);
        } else {
            document.removeEventListener('click', closeDropdownOnOutsideClick, true);
        }
    };

    const closeDropdownOnOutsideClick = (event: MouseEvent) => {
        if (!dropdownContainer.contains(event.target as Node)) {
            dropdownListContainer.classList.remove('open');
            document.removeEventListener('click', closeDropdownOnOutsideClick, true);
        }
    };

    this.populateDropdownOptions(dropdownListContainer, category, dataView);

    // Apply styles after elements are created or updated
    this.applyLabelStyles(label);
    this.applySelectorStyles(dropdownContainer);
    this.applyDropdownStyles(dropdownListContainer);
  }

  private populateDropdownOptions(content: HTMLElement, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView) {
    content.innerHTML = ''; // Clear existing options

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Buscar opções...";
    searchInput.className = "search-input";
    content.appendChild(searchInput);

    // Container virtualizado para as opções
    const virtualContainer = document.createElement("div");
    virtualContainer.className = "virtual-container";
    virtualContainer.style.maxHeight = "200px";
    virtualContainer.style.overflowY = "auto";
    content.appendChild(virtualContainer);

    // 'Todos' Option
    this.createOption(virtualContainer, "Todos", 0, category, dataView, true);

    // Remover duplicatas e preparar dados únicos
    const uniqueValues = new Map<string, { value: powerbi.PrimitiveValue, index: number }>();
    category.values.forEach((value, index) => {
        let displayValue: string;
        if (value instanceof Date) {
            const date = new Date(value);
            date.setUTCHours(0, 0, 0, 0);
            displayValue = date.toLocaleDateString();
        } else {
            displayValue = (value !== null && value !== undefined && value !== '') ? String(value) : `Item ${index + 1}`;
        }
        
        // Usar displayValue como chave para evitar duplicatas
        if (!uniqueValues.has(displayValue)) {
            uniqueValues.set(displayValue, { value, index });
        }
    });

    // Renderizar opções únicas
    const sortedValues = Array.from(uniqueValues.entries()).sort(([a], [b]) => a.localeCompare(b));
    
    sortedValues.forEach(([displayValue, { value, index }]) => {
        this.createOption(virtualContainer, displayValue, index, category, dataView, false);
    });

    // Implementar busca com debounce para performance
    let searchTimeout: NodeJS.Timeout;
    searchInput.onkeyup = () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const filter = searchInput.value.toUpperCase();
            const options = virtualContainer.querySelectorAll(".dropdown-option");
            options.forEach(option => {
                const txtValue = option.textContent || "";
                (option as HTMLElement).style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
            });
        }, 150); // Debounce de 150ms
    };
  }

  private createOption(container: HTMLElement, name: string, index: number, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView, isAllOption: boolean) {
      const option = document.createElement("div");
      option.className = "dropdown-option";
      option.textContent = name;

      let selectionId: powerbi.visuals.ISelectionId | null = null;
      let isSelected = false;
      
      if (!isAllOption) {
          selectionId = this.host.createSelectionIdBuilder()
              .withCategory(category, index)
              .createSelectionId();
          
          isSelected = this.selectionManager.getSelectionIds()
                .some(selectedId => {
                    return this.compareSelectionIds(selectedId as any, selectionId as any);
                });
      } else {
          // Para "Todos", está selecionado se não há seleções ativas
          isSelected = this.selectionManager.getSelectionIds().length === 0;
      }

      if (isSelected) {
          option.classList.add("selected");
      }

      option.onclick = async (event) => {
            event.stopPropagation();
            const multiSelect = this.formattingSettings.slicerSettings.multiSelect.value;
            
            try {
                if (isAllOption) {
                    await this.selectionManager.clear();
                } else if (selectionId) {
                    await this.selectionManager.select(selectionId, multiSelect);
                }
                
                // Usar requestAnimationFrame para otimizar a atualização da UI
                requestAnimationFrame(() => {
                    const allDropdownContainers = this.container.querySelectorAll('.custom-dropdown');
                    allDropdownContainers.forEach(dropdown => {
                        this.updateSelectionUI(dropdown as HTMLElement, dataView);
                    });
                });
                
                // Notificar o Power BI sobre a mudança de seleção
                const currentSelections = this.selectionManager.getSelectionIds();
                this.host.persistProperties({
                    merge: [{
                        objectName: "general",
                        properties: {
                            selection: JSON.stringify(currentSelections)
                        },
                        selector: null
                    }]
                });
            } catch (error) {
                console.error('Erro na seleção:', error);
            }
        };

      container.appendChild(option);
  }
  
  private compareSelectionIds(id1: any, id2: any): boolean {
      try {
          // Primeiro tenta comparação por JSON
          const json1 = JSON.stringify(id1);
          const json2 = JSON.stringify(id2);
          if (json1 === json2) {
              return true;
          }
          
          // Fallback: comparação por propriedades internas se disponíveis
           if ((id1 as any).key && (id2 as any).key) {
               return (id1 as any).key === (id2 as any).key;
           }
           
           return false;
       } catch (error) {
           return false;
       }
  }



  private updateHeaderText(headerText: HTMLElement, dataView: powerbi.DataView, category?: powerbi.DataViewCategoryColumn) {
          const selectionIds = this.selectionManager.getSelectionIds();
          
          // Se não há seleções, mostrar "Todos"
          if (!selectionIds || selectionIds.length === 0) {
              headerText.textContent = "Todos";
              return;
          }
          
          // Se categoria não foi fornecida, tentar identificar pelo container
          if (!category) {
              const slicerContainer = headerText.closest('[data-slicer-name]') as HTMLElement;
              if (slicerContainer) {
                  const slicerName = slicerContainer.getAttribute('data-slicer-name');
                  category = dataView.categorical.categories.find(cat => cat.source.displayName === slicerName);
              }
          }
          
          if (!category) {
              headerText.textContent = `${selectionIds.length} selecionados`;
              return;
          }
          
          // Filtrar seleções que pertencem a esta categoria específica
          const categorySelections = selectionIds.filter(selectedId => {
              for (let i = 0; i < category.values.length; i++) {
                  const testId = this.host.createSelectionIdBuilder()
                      .withCategory(category, i)
                      .createSelectionId();
                  if (this.compareSelectionIds(selectedId as any, testId as any)) {
                      return true;
                  }
              }
              return false;
          });
          
          if (categorySelections.length === 0) {
              headerText.textContent = "Todos";
              return;
          }
          
          if (categorySelections.length === 1) {
              // Mostrar o valor específico selecionado
              const selectedId = categorySelections[0];
              
              for (let i = 0; i < category.values.length; i++) {
                  const testId = this.host.createSelectionIdBuilder()
                      .withCategory(category, i)
                      .createSelectionId();
                  
                  if (this.compareSelectionIds(selectedId as any, testId as any)) {
                      let value = category.values[i];
                      if (value instanceof Date) {
                          value = value.toLocaleDateString('pt-BR');
                      }
                      headerText.textContent = String(value);
                      return;
                  }
              }
              
              headerText.textContent = "1 selecionado";
          } else {
              headerText.textContent = `${categorySelections.length} selecionados`;
          }
      }

  private updateSelectionUI(dropdownContainer: HTMLElement, dataView: powerbi.DataView) {
           // Identificar qual categoria este dropdown representa
           const slicerContainer = dropdownContainer.closest('[data-slicer-name]') as HTMLElement;
           if (!slicerContainer) return;
           
           const slicerName = slicerContainer.getAttribute('data-slicer-name');
           const category = dataView.categorical.categories.find(cat => cat.source.displayName === slicerName);
           if (!category) return;
           
           const headerText = dropdownContainer.querySelector('.header-text') as HTMLElement;
           if (headerText) {
               this.updateHeaderText(headerText, dataView, category);
           }
           
           const options = dropdownContainer.querySelectorAll('.dropdown-option');
           const selectionIds = this.selectionManager.getSelectionIds();
           
           // Separar seleções por categoria
           const currentCategorySelections = new Set<number>();
           const otherCategorySelections = new Set<string>();
           
           selectionIds.forEach(selectedId => {
               // Verificar se pertence à categoria atual
               let belongsToCurrentCategory = false;
               for (let i = 0; i < category.values.length; i++) {
                   const testId = this.host.createSelectionIdBuilder()
                       .withCategory(category, i)
                       .createSelectionId();
                   if (this.compareSelectionIds(selectedId as any, testId as any)) {
                       currentCategorySelections.add(i);
                       belongsToCurrentCategory = true;
                       break;
                   }
               }
               
               // Se não pertence à categoria atual, é de outra categoria
               if (!belongsToCurrentCategory) {
                   otherCategorySelections.add(JSON.stringify(selectedId));
               }
           });
           
           // Cache para evitar recálculos
           const valueToIndexMap = new Map<string, number>();
           category.values.forEach((value, index) => {
               let displayValue: string;
               if (value instanceof Date) {
                   const date = new Date(value);
                   date.setUTCHours(0, 0, 0, 0);
                   displayValue = date.toLocaleDateString();
               } else {
                   displayValue = (value !== null && value !== undefined && value !== '') ? String(value) : `Item ${index + 1}`;
               }
               if (!valueToIndexMap.has(displayValue)) {
                   valueToIndexMap.set(displayValue, index);
               }
           });
           
           // Determinar quais valores estão disponíveis baseado em cross-filtering
           const availableValues = new Set<number>();
           
           if (otherCategorySelections.size === 0) {
               // Sem filtros de outras categorias, todos os valores estão disponíveis
               for (let i = 0; i < category.values.length; i++) {
                   availableValues.add(i);
               }
           } else {
               // Com filtros de outras categorias, usar uma abordagem simplificada
                // Verificar quais valores da categoria atual ainda têm dados válidos
                const currentCategoryIndex = dataView.categorical.categories.findIndex(cat => cat === category);
                
                // Coletar índices de seleções de outras categorias
                const otherCategoryFilters = new Map<number, Set<number>>();
                
                selectionIds.forEach(selectedId => {
                    for (let catIndex = 0; catIndex < dataView.categorical.categories.length; catIndex++) {
                        if (catIndex === currentCategoryIndex) continue;
                        
                        const otherCategory = dataView.categorical.categories[catIndex];
                        for (let i = 0; i < otherCategory.values.length; i++) {
                            const testId = this.host.createSelectionIdBuilder()
                                .withCategory(otherCategory, i)
                                .createSelectionId();
                            if (this.compareSelectionIds(selectedId as any, testId as any)) {
                                if (!otherCategoryFilters.has(catIndex)) {
                                    otherCategoryFilters.set(catIndex, new Set());
                                }
                                otherCategoryFilters.get(catIndex)!.add(i);
                            }
                        }
                    }
                });
                
                // Se há filtros de outras categorias, aplicar cross-filtering real
                 if (otherCategoryFilters.size > 0) {
                     // Analisar os dados para encontrar intersecções válidas
                     const dataLength = Math.min(...dataView.categorical.categories.map(cat => cat.values.length));
                     
                     // Para cada valor da categoria atual, verificar se há linhas de dados válidas
                     for (let valueIndex = 0; valueIndex < category.values.length; valueIndex++) {
                         let hasValidData = false;
                         
                         // Verificar todas as linhas de dados
                          for (let rowIndex = 0; rowIndex < dataLength; rowIndex++) {
                              // Para dados categóricos, verificar se esta linha tem o valor que estamos testando
                              let currentRowValue = null;
                              if (rowIndex < category.values.length) {
                                  currentRowValue = category.values[rowIndex];
                              }
                              
                              let targetValue = category.values[valueIndex];
                              
                              // Comparar valores (considerando diferentes tipos)
                              let valuesMatch = false;
                              if (currentRowValue === targetValue) {
                                  valuesMatch = true;
                              } else if (currentRowValue && targetValue) {
                                  // Para datas
                                  if (currentRowValue instanceof Date && targetValue instanceof Date) {
                                      valuesMatch = currentRowValue.getTime() === targetValue.getTime();
                                  } else {
                                      valuesMatch = String(currentRowValue) === String(targetValue);
                                  }
                              }
                              
                              // Se esta linha não tem o valor que estamos testando, pular
                              if (!valuesMatch) continue;
                             
                             // Verificar se esta linha atende aos filtros de outras categorias
                             let rowMatchesAllFilters = true;
                             
                             for (const [catIndex, selectedIndices] of otherCategoryFilters) {
                                 const otherCategory = dataView.categorical.categories[catIndex];
                                 if (rowIndex < otherCategory.values.length) {
                                     const rowValueInOtherCategory = otherCategory.values[rowIndex];
                                     
                                     // Verificar se o valor desta linha está nas seleções
                                     let rowValueMatches = false;
                                     for (const selectedIndex of selectedIndices) {
                                         if (selectedIndex < otherCategory.values.length) {
                                             const selectedValue = otherCategory.values[selectedIndex];
                                             
                                             if (rowValueInOtherCategory === selectedValue) {
                                                 rowValueMatches = true;
                                                 break;
                                             } else if (rowValueInOtherCategory && selectedValue) {
                                                 // Comparação mais robusta
                                                 if (rowValueInOtherCategory instanceof Date && selectedValue instanceof Date) {
                                                     rowValueMatches = rowValueInOtherCategory.getTime() === selectedValue.getTime();
                                                 } else {
                                                     rowValueMatches = String(rowValueInOtherCategory) === String(selectedValue);
                                                 }
                                                 if (rowValueMatches) break;
                                             }
                                         }
                                     }
                                     
                                     if (!rowValueMatches) {
                                         rowMatchesAllFilters = false;
                                         break;
                                     }
                                 }
                             }
                             
                             if (rowMatchesAllFilters) {
                                 hasValidData = true;
                                 break;
                             }
                         }
                         
                         // Se há dados válidos ou se o valor está selecionado, mantê-lo disponível
                         if (hasValidData || currentCategorySelections.has(valueIndex)) {
                             availableValues.add(valueIndex);
                         }
                     }
                 } else {
                     // Sem filtros de outras categorias, todos os valores estão disponíveis
                     for (let i = 0; i < category.values.length; i++) {
                         availableValues.add(i);
                     }
                 }
           }
           
           options.forEach((option: HTMLElement) => {
               const optionText = option.textContent;
               
               if (optionText === 'Todos') {
                   const isAllSelected = currentCategorySelections.size === 0;
                   option.classList.toggle('selected', isAllSelected);
                   // "Todos" sempre disponível
                   option.style.opacity = '1';
                   option.style.pointerEvents = 'auto';
               } else {
                   const dataIndex = valueToIndexMap.get(optionText);
                   if (dataIndex !== undefined) {
                       const isSelected = currentCategorySelections.has(dataIndex);
                       const isAvailable = availableValues.has(dataIndex);
                       
                       option.classList.toggle('selected', isSelected);
                       
                       // Aplicar estilo visual para indicar disponibilidade
                       if (!isAvailable && !isSelected) {
                           option.style.opacity = '0.4';
                           option.style.pointerEvents = 'none';
                       } else {
                           option.style.opacity = '1';
                           option.style.pointerEvents = 'auto';
                       }
                   }
               }
           });
       }

    public destroy(): void {
         // Limpar timeouts para evitar memory leaks
         if (this.updateThrottleTimeout) {
             clearTimeout(this.updateThrottleTimeout);
             this.updateThrottleTimeout = null;
         }
         
         // Limpar event listeners
         const searchInputs = this.container.querySelectorAll('.search-input');
         searchInputs.forEach(input => {
             (input as HTMLInputElement).onkeyup = null;
         });
         
         // Limpar container
         this.container.innerHTML = '';
     }
}