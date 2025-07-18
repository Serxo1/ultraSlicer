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

class SlicerSettingsCard extends formattingSettings.SimpleCard {
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

class GridCard extends formattingSettings.SimpleCard {
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

class ContainerCard extends formattingSettings.SimpleCard {
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

class LabelCard extends formattingSettings.SimpleCard {
    fontColor = new formattingSettings.ColorPicker({ name: "fontColor", displayName: "Font Color", value: { value: "#333333" } });
    fontSize = new formattingSettings.NumUpDown({ name: "fontSize", displayName: "Font Size", value: 14 });
    fontWeight = new formattingSettings.ItemDropdown({ name: "fontWeight", displayName: "Font Weight", items: [{ value: "normal", displayName: "Normal" }, { value: "bold", displayName: "Bold" }], value: { value: "bold", displayName: "Bold" } });
    textAlign = new formattingSettings.ItemDropdown({ name: "textAlign", displayName: "Text Align", items: [{ value: "left", displayName: "Left" }, { value: "center", displayName: "Center" }, { value: "right", displayName: "Right" }], value: { value: "left", displayName: "Left" } });

    name: string = "label";
    displayName: string = "Label";
    slices: formattingSettings.Slice[] = [this.fontColor, this.fontSize, this.fontWeight, this.textAlign];
}

class SelectorCard extends formattingSettings.SimpleCard {
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

class DropdownCard extends formattingSettings.SimpleCard {
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
  private selectionManager: ISelectionManager;
  private container: HTMLElement;
  private activeSelectionKeys: Set<string> = new Set();

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

  public update(options: VisualUpdateOptions): void {
    this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettings, options.dataViews[0]);

    if (!options?.dataViews?.[0]) {
      this.container.innerHTML = "";
      return;
    }

    const dataView = options.dataViews[0];
    this.activeSelectionKeys = new Set(
      (this.selectionManager.getSelectionIds() as any[]).map(id => JSON.stringify(id.getKey()) + JSON.stringify(id.getSelector()))
    );



    const cat = dataView.categorical?.categories;
    if (cat) this.renderDropdown(cat, dataView);
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

    this.updateHeaderText(headerText, category, dataView);
    this.populateDropdownOptions(dropdownListContainer, category, dataView, headerText);

    // Apply styles after elements are created or updated
    this.applyLabelStyles(label);
    this.applySelectorStyles(dropdownContainer);
    this.applyDropdownStyles(dropdownListContainer);
  }

  private populateDropdownOptions(content: HTMLElement, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView, headerText: HTMLElement) {
    content.innerHTML = ''; // Clear existing options

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Buscar opções...";
    searchInput.className = "search-input";
    searchInput.onkeyup = () => {
        const filter = searchInput.value.toUpperCase();
        const options = content.querySelectorAll(".dropdown-option");
        options.forEach(option => {
            const txtValue = option.textContent || "";
            (option as HTMLElement).style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        });
    };
    content.appendChild(searchInput);

    // 'All' Option
    this.createOption(content, "All", 0, category, dataView, headerText, true);

    // Data Options
    category.values.forEach((value, index) => {
        const displayValue = (value !== null && value !== undefined && value !== '') ? String(value) : `Item ${index + 1}`;
        this.createOption(content, displayValue, index, category, dataView, headerText, false);
    });
  }

  private createOption(container: HTMLElement, name: string, index: number, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView, headerText: HTMLElement, isAllOption: boolean) {
      const option = document.createElement("div");
      option.className = "dropdown-option";
      option.textContent = name;

      const selectionId = this.host.createSelectionIdBuilder()
          .withCategory(category, isAllOption ? null : index)
          .createSelectionId();

      // Check if this option should be marked as selected
      if (isAllOption) {
          // 'All' is selected when no selections exist or all items are selected
          const selections = this.selectionManager.getSelectionIds();
          if (selections.length === 0 || selections.length === category.values.length) {
              option.classList.add("selected");
          }
      } else {
          const key = JSON.stringify((selectionId as any).getKey()) + JSON.stringify((selectionId as any).getSelector());
          if (this.activeSelectionKeys.has(key)) {
              option.classList.add("selected");
          }
      }

      option.onclick = (event) => {

          if (isAllOption) {
              // Clear all selections when 'All' is clicked
              this.selectionManager.clear();
              this.activeSelectionKeys.clear();

          } else {
              const multiSelect = this.formattingSettings.slicerSettings.multiSelect.value;

              this.selectionManager.select(selectionId, multiSelect);

          }
          this.updateAndClose(headerText, category, dataView, container.parentElement);
          container.parentElement.classList.remove('open'); // Explicitly close dropdown
      };
      container.appendChild(option);
  }

  private updateAndClose(headerText: HTMLElement, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView, dropdownListContainer: HTMLElement) {
      // Update activeSelectionKeys to match current selections
      const selections = this.selectionManager.getSelectionIds();
      this.activeSelectionKeys.clear();
      selections.forEach(selection => {
          this.activeSelectionKeys.add(JSON.stringify((selection as any).getKey()) + JSON.stringify((selection as any).getSelector()));
      });
      
      this.updateHeaderText(headerText, category, dataView);
            
      if (dropdownListContainer) {
        dropdownListContainer.classList.remove('open');
      }
  }

  private updateHeaderText(headerText: HTMLElement, category: powerbi.DataViewCategoryColumn, dataView: powerbi.DataView) {
    const selections = this.selectionManager.getSelectionIds();
    const selectedIdKeys = new Set((selections as any[]).map(id => JSON.stringify(id.getKey()) + JSON.stringify(id.getSelector())));
    const selectedValues: powerbi.PrimitiveValue[] = [];
    category.values.forEach((value, index) => {
        const selectionId = this.host.createSelectionIdBuilder()
            .withCategory(category, index)
            .createSelectionId();
        const key = JSON.stringify((selectionId as any).getKey()) + JSON.stringify((selectionId as any).getSelector());
        if (selectedIdKeys.has(key)) {
            selectedValues.push(value);
        }
    });



    if (selectedValues.length === 0) {
        // Show "Todos" when no selection is made

        headerText.textContent = "Todos";
    } else if (selectedValues.length === 1) {
        const selectedValue = selectedValues[0];
        const displayText = (selectedValue !== null && selectedValue !== undefined && selectedValue !== '') ? String(selectedValue) : "Todos";

        headerText.textContent = displayText;
    } else if (selectedValues.length === category.values.length) {

        headerText.textContent = "Todos";
    } else {

        headerText.textContent = `${selectedValues.length} selecionados`;
    }
  }


  public destroy(): void { /* cleanup */ }
}