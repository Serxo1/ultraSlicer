var GridSlicer_guid_placeholder_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);

// --- estilos do visual (webpack trata .less) ---


/* ---------- SETTINGS CLASSES (NEW API) ---------- */
class SlicerSettingsCard extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z0.Tn {
    constructor() {
        super(...arguments);
        this.multiSelect = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z0.jF({
            name: "multiSelect",
            displayName: "Multi-Select",
            value: true
        });
        this.singleSelect = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z0.jF({
            name: "singleSelect",
            displayName: "Single-Select",
            value: false
        });
        this.name = "slicerSettings";
        this.displayName = "Slicer Settings";
        this.slices = [this.multiSelect, this.singleSelect];
    }
}
class GridCard extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z0.Tn {
    constructor() {
        super(...arguments);
        this.flexDirection = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z0.PA({
            name: "flexDirection", displayName: "Direction",
            items: [{ value: "row", displayName: "Horizontal" }, { value: "column", displayName: "Vertical" }],
            value: { value: "row", displayName: "Horizontal" }
        });
        this.justifyContent = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z0.PA({
            name: "justifyContent", displayName: "Justify Content",
            items: [
                { value: "flex-start", displayName: "Start" }, { value: "center", displayName: "Center" },
                { value: "flex-end", displayName: "End" }, { value: "space-between", displayName: "Space Between" },
                { value: "space-around", displayName: "Space Around" }
            ],
            value: { value: "flex-start", displayName: "Start" }
        });
        this.alignItems = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z0.PA({
            name: "alignItems", displayName: "Align Items",
            items: [{ value: "flex-start", displayName: "Start" }, { value: "center", displayName: "Center" }, { value: "flex-end", displayName: "End" }, { value: "stretch", displayName: "Stretch" }],
            value: { value: "flex-start", displayName: "Start" }
        });
        this.alignContent = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z0.PA({
            name: "alignContent", displayName: "Align Content",
            items: [{ value: "flex-start", displayName: "Start" }, { value: "center", displayName: "Center" }, { value: "flex-end", displayName: "End" }, { value: "space-between", displayName: "Space Between" }, { value: "space-around", displayName: "Space Around" }, { value: "stretch", displayName: "Stretch" }],
            value: { value: "flex-start", displayName: "Start" }
        });
        this.horizontalSpacing = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "horizontalSpacing", displayName: "Horizontal Spacing", value: 5 });
        this.verticalSpacing = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "verticalSpacing", displayName: "Vertical Spacing", value: 5 });
        this.name = "grid";
        this.displayName = "Grid Layout";
        this.slices = [this.flexDirection, this.justifyContent, this.alignItems, this.alignContent, this.horizontalSpacing, this.verticalSpacing];
    }
}
class ContainerCard extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z0.Tn {
    constructor() {
        super(...arguments);
        this.backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "backgroundColor", displayName: "Background Color", value: { value: "#FFFFFF" } });
        this.borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "borderColor", displayName: "Border Color", value: { value: "#DDDDDD" } });
        this.borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "borderWidth", displayName: "Border Width", value: 1 });
        this.borderRadius = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "borderRadius", displayName: "Border Radius", value: 5 });
        this.padding = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "padding", displayName: "Padding", value: 10 });
        this.shadow = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z0.ks({ name: "shadow", displayName: "Shadow", value: "none", placeholder: "e.g., 2px 2px 5px #888888" });
        this.flexGrow = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z0.jF({ name: "flexGrow", displayName: "Flex Grow", value: false });
        this.name = "container";
        this.displayName = "Container";
        this.slices = [this.backgroundColor, this.borderColor, this.borderWidth, this.borderRadius, this.padding, this.shadow, this.flexGrow];
    }
}
class LabelCard extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z0.Tn {
    constructor() {
        super(...arguments);
        this.fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "fontColor", displayName: "Font Color", value: { value: "#333333" } });
        this.fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "fontSize", displayName: "Font Size", value: 14 });
        this.fontWeight = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z0.PA({ name: "fontWeight", displayName: "Font Weight", items: [{ value: "normal", displayName: "Normal" }, { value: "bold", displayName: "Bold" }], value: { value: "bold", displayName: "Bold" } });
        this.textAlign = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z0.PA({ name: "textAlign", displayName: "Text Align", items: [{ value: "left", displayName: "Left" }, { value: "center", displayName: "Center" }, { value: "right", displayName: "Right" }], value: { value: "left", displayName: "Left" } });
        this.name = "label";
        this.displayName = "Label";
        this.slices = [this.fontColor, this.fontSize, this.fontWeight, this.textAlign];
    }
}
class SelectorCard extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z0.Tn {
    constructor() {
        super(...arguments);
        this.backgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "backgroundColor", displayName: "Background Color", value: { value: "#FFFFFF" } });
        this.fontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "fontColor", displayName: "Font Color", value: { value: "#333333" } });
        this.fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "fontSize", displayName: "Font Size", value: 12 });
        this.borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "borderColor", displayName: "Border Color", value: { value: "#CCCCCC" } });
        this.borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "borderWidth", displayName: "Border Width", value: 1 });
        this.borderRadius = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "borderRadius", displayName: "Border Radius", value: 4 });
        this.height = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z0.iB({ name: "height", displayName: "Height", value: 40 });
        this.arrowColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "arrowColor", displayName: "Arrow Color", value: { value: "#666666" } });
        this.name = "selector";
        this.displayName = "Selector";
        this.slices = [this.backgroundColor, this.fontColor, this.fontSize, this.borderColor, this.borderWidth, this.borderRadius, this.height, this.arrowColor];
    }
}
class DropdownCard extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z0.Tn {
    constructor() {
        super(...arguments);
        this.itemBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "itemBackgroundColor", displayName: "Item Background", value: { value: "#FFFFFF" } });
        this.itemFontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "itemFontColor", displayName: "Item Font Color", value: { value: "#333333" } });
        this.itemHoverBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "itemHoverBackgroundColor", displayName: "Hover Background", value: { value: "#e9ecef" } });
        this.itemHoverFontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "itemHoverFontColor", displayName: "Hover Font Color", value: { value: "#0056b3" } });
        this.selectedItemBackgroundColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "selectedItemBackgroundColor", displayName: "Selected Background", value: { value: "#007bff" } });
        this.selectedItemFontColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z0.sk({ name: "selectedItemFontColor", displayName: "Selected Font Color", value: { value: "#FFFFFF" } });
        this.name = "dropdown";
        this.displayName = "Dropdown Items";
        this.slices = [
            this.itemBackgroundColor, this.itemFontColor,
            this.itemHoverBackgroundColor, this.itemHoverFontColor,
            this.selectedItemBackgroundColor, this.selectedItemFontColor
        ];
    }
}
class VisualFormattingSettings extends powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.Model */ .z0.Kx {
    constructor() {
        super(...arguments);
        this.slicerSettings = new SlicerSettingsCard();
        this.grid = new GridCard();
        this.container = new ContainerCard();
        this.label = new LabelCard();
        this.selector = new SelectorCard();
        this.dropdown = new DropdownCard();
        this.cards = [this.slicerSettings, this.grid, this.container, this.label, this.selector, this.dropdown];
    }
}
/* ------------------------- VISUAL ------------------------------ */
class Visual {
    constructor(options) {
        this.activeSelectionKeys = new Set();
        this.host = options.host;
        this.selectionManager = this.host.createSelectionManager();
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .FormattingSettingsService */ .OZ();
        this.container = document.createElement("div");
        this.container.className = "grid-root";
        options.element.appendChild(this.container);
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
    update(options) {
        var _a, _b;
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettings, options.dataViews[0]);
        if (!((_a = options === null || options === void 0 ? void 0 : options.dataViews) === null || _a === void 0 ? void 0 : _a[0])) {
            this.container.innerHTML = "";
            return;
        }
        const dataView = options.dataViews[0];
        this.activeSelectionKeys = new Set(this.selectionManager.getSelectionIds().map(id => JSON.stringify(id.getKey()) + JSON.stringify(id.getSelector())));
        const cat = (_b = dataView.categorical) === null || _b === void 0 ? void 0 : _b.categories;
        if (cat)
            this.renderDropdown(cat, dataView);
    }
    renderDropdown(categories, dataView) {
        const existingSlicers = new Set();
        this.container.querySelectorAll('[data-slicer-name]').forEach((node) => {
            existingSlicers.add(node.getAttribute('data-slicer-name'));
        });
        const currentSlicers = new Set();
        // Sort categories alphabetically by display name
        const sortedCategories = [...categories].sort((a, b) => a.source.displayName.localeCompare(b.source.displayName));
        sortedCategories.forEach(category => {
            const slicerName = category.source.displayName;
            currentSlicers.add(slicerName);
            let slicerContainer = this.container.querySelector(`[data-slicer-name="${slicerName}"]`);
            if (!slicerContainer) {
                slicerContainer = this.createSlicerContainer(slicerName);
                this.container.appendChild(slicerContainer);
            }
            else {
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
    applyGridStyles() {
        const g = this.formattingSettings.grid;
        this.container.style.flexDirection = g.flexDirection.value.value;
        this.container.style.justifyContent = g.justifyContent.value.value;
        this.container.style.alignItems = g.alignItems.value.value;
        this.container.style.alignContent = g.alignContent.value.value;
        this.container.style.gap = `${g.verticalSpacing.value}px ${g.horizontalSpacing.value}px`;
    }
    createSlicerContainer(slicerName) {
        const slicerContainer = document.createElement("div");
        slicerContainer.className = "slicer-container";
        slicerContainer.setAttribute("data-slicer-name", slicerName);
        this.applyContainerStyles(slicerContainer);
        return slicerContainer;
    }
    applyContainerStyles(element) {
        if (!element)
            return;
        const c = this.formattingSettings.container;
        element.style.backgroundColor = c.backgroundColor.value.value;
        element.style.border = `${c.borderWidth.value}px solid ${c.borderColor.value.value}`;
        element.style.borderRadius = `${c.borderRadius.value}px`;
        element.style.boxShadow = c.shadow.value;
        element.style.padding = `${c.padding.value}px`;
        element.style.flexGrow = c.flexGrow.value ? '1' : '0';
    }
    applyLabelStyles(element) {
        if (!element)
            return;
        const l = this.formattingSettings.label;
        element.style.color = l.fontColor.value.value;
        element.style.fontSize = `${l.fontSize.value}px`;
        element.style.fontWeight = l.fontWeight.value.value;
        element.style.textAlign = l.textAlign.value.value;
    }
    applySelectorStyles(element) {
        if (!element)
            return;
        const s = this.formattingSettings.selector;
        const header = element.querySelector('.dropdown-header');
        if (header) {
            header.style.backgroundColor = s.backgroundColor.value.value;
            header.style.border = `${s.borderWidth.value}px solid ${s.borderColor.value.value}`;
            header.style.borderRadius = `${s.borderRadius.value}px`;
            header.style.height = `${s.height.value}px`;
        }
        const text = element.querySelector('.header-text');
        if (text) {
            text.style.color = s.fontColor.value.value;
            text.style.fontSize = `${s.fontSize.value}px`;
        }
        const arrow = element.querySelector('.arrow-down');
        if (arrow) {
            arrow.style.borderTopColor = s.arrowColor.value.value;
        }
    }
    applyDropdownStyles(element) {
        if (!element)
            return;
        const d = this.formattingSettings.dropdown;
        element.style.setProperty('--item-bg-color', d.itemBackgroundColor.value.value);
        element.style.setProperty('--item-font-color', d.itemFontColor.value.value);
        element.style.setProperty('--item-hover-bg-color', d.itemHoverBackgroundColor.value.value);
        element.style.setProperty('--item-hover-font-color', d.itemHoverFontColor.value.value);
        element.style.setProperty('--selected-bg-color', d.selectedItemBackgroundColor.value.value);
        element.style.setProperty('--selected-font-color', d.selectedItemFontColor.value.value);
    }
    createDropdownLayout(container, category, dataView) {
        // Clear existing event listeners
        const oldDropdownContainer = container.querySelector(".custom-dropdown");
        if (oldDropdownContainer) {
            const oldHeader = oldDropdownContainer.querySelector(".dropdown-header");
            const oldList = oldDropdownContainer.querySelector(".dropdown-list-container");
            if (oldHeader) {
                const newHeader = oldHeader.cloneNode(true);
                oldHeader.parentNode.replaceChild(newHeader, oldHeader);
            }
            if (oldList) {
                oldList.classList.remove('open');
            }
        }
        let label = container.querySelector(".slicer-header");
        if (!label) {
            label = document.createElement("div");
            label.className = "slicer-header";
            container.appendChild(label);
        }
        label.textContent = category.source.displayName;
        let dropdownContainer = container.querySelector(".custom-dropdown");
        if (!dropdownContainer) {
            dropdownContainer = document.createElement("div");
            dropdownContainer.className = "custom-dropdown";
            container.appendChild(dropdownContainer);
        }
        let dropdownHeader = dropdownContainer.querySelector(".dropdown-header");
        if (!dropdownHeader) {
            dropdownHeader = document.createElement("div");
            dropdownHeader.className = "dropdown-header";
            dropdownContainer.appendChild(dropdownHeader);
        }
        let headerText = dropdownHeader.querySelector(".header-text");
        if (!headerText) {
            headerText = document.createElement("span");
            headerText.className = "header-text";
            dropdownHeader.appendChild(headerText);
        }
        let arrow = dropdownHeader.querySelector(".arrow-down");
        if (!arrow) {
            arrow = document.createElement("div");
            arrow.className = "arrow-down";
            dropdownHeader.appendChild(arrow);
        }
        let dropdownListContainer = dropdownContainer.querySelector(".dropdown-list-container");
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
            }
            else {
                document.removeEventListener('click', closeDropdownOnOutsideClick, true);
            }
        };
        const closeDropdownOnOutsideClick = (event) => {
            if (!dropdownContainer.contains(event.target)) {
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
    populateDropdownOptions(content, category, dataView, headerText) {
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
                option.style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
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
    createOption(container, name, index, category, dataView, headerText, isAllOption) {
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
        }
        else {
            const key = JSON.stringify(selectionId.getKey()) + JSON.stringify(selectionId.getSelector());
            if (this.activeSelectionKeys.has(key)) {
                option.classList.add("selected");
            }
        }
        option.onclick = (event) => {
            if (isAllOption) {
                // Clear all selections when 'All' is clicked
                this.selectionManager.clear();
                this.activeSelectionKeys.clear();
            }
            else {
                const multiSelect = this.formattingSettings.slicerSettings.multiSelect.value;
                this.selectionManager.select(selectionId, multiSelect);
            }
            this.updateAndClose(headerText, category, dataView, container.parentElement);
            container.parentElement.classList.remove('open'); // Explicitly close dropdown
        };
        container.appendChild(option);
    }
    updateAndClose(headerText, category, dataView, dropdownListContainer) {
        // Update activeSelectionKeys to match current selections
        const selections = this.selectionManager.getSelectionIds();
        this.activeSelectionKeys.clear();
        selections.forEach(selection => {
            this.activeSelectionKeys.add(JSON.stringify(selection.getKey()) + JSON.stringify(selection.getSelector()));
        });
        this.updateHeaderText(headerText, category, dataView);
        if (dropdownListContainer) {
            dropdownListContainer.classList.remove('open');
        }
    }
    updateHeaderText(headerText, category, dataView) {
        const selections = this.selectionManager.getSelectionIds();
        const selectedIdKeys = new Set(selections.map(id => JSON.stringify(id.getKey()) + JSON.stringify(id.getSelector())));
        const selectedValues = [];
        category.values.forEach((value, index) => {
            const selectionId = this.host.createSelectionIdBuilder()
                .withCategory(category, index)
                .createSelectionId();
            const key = JSON.stringify(selectionId.getKey()) + JSON.stringify(selectionId.getSelector());
            if (selectedIdKeys.has(key)) {
                selectedValues.push(value);
            }
        });
        if (selectedValues.length === 0) {
            // Show "Todos" when no selection is made
            headerText.textContent = "Todos";
        }
        else if (selectedValues.length === 1) {
            const selectedValue = selectedValues[0];
            const displayText = (selectedValue !== null && selectedValue !== undefined && selectedValue !== '') ? String(selectedValue) : "Todos";
            headerText.textContent = displayText;
        }
        else if (selectedValues.length === category.values.length) {
            headerText.textContent = "Todos";
        }
        else {
            headerText.textContent = `${selectedValues.length} selecionados`;
        }
    }
    destroy() { }
}


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   De: () => (/* binding */ getPropertyValue),
/* harmony export */   Ld: () => (/* binding */ getLocalizedProperty),
/* harmony export */   yp: () => (/* binding */ getDescriptor)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if ((slice === null || slice === void 0 ? void 0 : slice.type) === "Dropdown" /* visuals.FormattingComponent.Dropdown */ && slice.items) {
        const itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
function getLocalizedProperty(item, property, localizationManager) {
    var _a;
    return (localizationManager && item[property.toString() + "Key"]) ? localizationManager.getDisplayName(item[property.toString() + "Key"]) : (_a = item[property]) === null || _a === void 0 ? void 0 : _a.toString();
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(639);


class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataView) {
        var _a, _b;
        const defaultSettings = new typeClass();
        const dataViewObjects = (_a = dataView === null || dataView === void 0 ? void 0 : dataView.metadata) === null || _a === void 0 ? void 0 : _a.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach((card) => {
                var _a;
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ? [card] : card.groups);
                cardGroupInstances === null || cardGroupInstances === void 0 ? void 0 : cardGroupInstances.forEach((cardGroupInstance) => {
                    var _a, _b, _c, _d;
                    // Set current top level toggle value
                    (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                    (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                    (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach((containerItem) => {
                        var _a, _b;
                        (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                            slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                        });
                        (_b = containerItem === null || containerItem === void 0 ? void 0 : containerItem.groups) === null || _b === void 0 ? void 0 : _b.forEach((group) => {
                            var _a, _b;
                            (_a = group === null || group === void 0 ? void 0 : group.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                            (_b = group === null || group === void 0 ? void 0 : group.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                                slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                            });
                        });
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        const formattingModel = {
            cards: []
        };
        formattingSettingsModel.cards
            .filter(({ visible = true }) => visible)
            .forEach((card) => {
            var _a;
            const formattingCard = {
                displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(card, "displayName", this.localizationManager),
                description: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(card, "description", this.localizationManager),
                disabled: card.disabled,
                disabledReason: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(card, "disabledReason", this.localizationManager),
                groups: [],
                uid: card.name + "-card",
                analyticsPane: card.analyticsPane,
            };
            const objectName = card.name;
            this.setTopLevelToggleSliceClone(card, formattingCard, objectName);
            (_a = card.onPreProcess) === null || _a === void 0 ? void 0 : _a.call(card);
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn;
            const cardGroupInstances = (isSimpleCard ?
                [card].filter(({ visible = true }) => visible) :
                card.groups.filter(({ visible = true }) => visible));
            cardGroupInstances === null || cardGroupInstances === void 0 ? void 0 : cardGroupInstances.forEach((cardGroupInstance) => {
                const formattingGroup = this.buildCardGroupInstances(cardGroupInstance, formattingCard, isSimpleCard, objectName);
                formattingCard.groups.push(formattingGroup);
            });
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
            formattingModel.cards.push(formattingCard);
        });
        return formattingModel;
    }
    buildCardGroupInstances(cardGroupInstance, formattingCard, isSimpleCard, objectName) {
        const groupUid = cardGroupInstance.name + "-group";
        // Build formatting group for each group
        const formattingGroup = {
            displayName: isSimpleCard ? undefined : (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(cardGroupInstance, "displayName", this.localizationManager),
            description: isSimpleCard ? undefined : (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(cardGroupInstance, "description", this.localizationManager),
            slices: [],
            uid: groupUid,
            collapsible: cardGroupInstance.collapsible,
            delaySaveSlices: cardGroupInstance.delaySaveSlices,
            disabled: cardGroupInstance.disabled,
            disabledReason: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(cardGroupInstance, "disabledReason", this.localizationManager),
        };
        // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
        // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
        // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
        const sliceNames = {};
        // Build formatting container slice for each property
        if (cardGroupInstance.container) {
            const containerUid = formattingGroup.uid + "-container";
            const formattingContainer = this.buildContainerGroupInstance(cardGroupInstance.container, containerUid, objectName, sliceNames);
            formattingGroup.displayName = "Apply settings to";
            formattingGroup.sliceWithContainer = false;
            formattingGroup.collapsible = false;
            formattingGroup.container = formattingContainer;
        }
        if (cardGroupInstance.slices) {
            this.setTopLevelToggleSliceClone(cardGroupInstance, (formattingGroup.displayName == undefined ? formattingCard : formattingGroup), objectName);
            // Build formatting slice for each property
            this.buildFormattingSlices({ slices: cardGroupInstance.slices, objectName, sliceNames, formattingSlices: formattingGroup.slices });
        }
        return formattingGroup;
    }
    buildContainerGroupInstance(container, containerUid, objectName, sliceNames) {
        const formattingContainer = {
            displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(container, "displayName", this.localizationManager),
            description: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(container, "description", this.localizationManager),
            containerItems: [],
            uid: containerUid
        };
        container.containerItems.filter(({ visible = true }) => visible).forEach((containerItem) => {
            if (!containerItem) { // This is to prevent error when container item is null or undefined
                return;
            }
            // Build formatting container item object
            const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
            const containerItemUid = containerUid + containerIemName;
            const formattingContainerItem = {
                displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(containerItem, "displayName", this.localizationManager),
                slices: [],
                groups: [],
                uid: containerItemUid
            };
            // Build formatting slices and add them to current formatting container item
            if (containerItem.slices) {
                this.buildFormattingSlices({ slices: containerItem.slices, objectName, sliceNames, formattingSlices: formattingContainerItem.slices });
            }
            // Build formatting groups and add them to current formatting container item
            if (containerItem.groups) {
                containerItem.groups.forEach((group) => {
                    const groupSlices = {
                        displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(group, "displayName", this.localizationManager),
                        description: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(group, "description", this.localizationManager),
                        slices: [],
                        uid: group.name + "-container-group",
                        collapsible: group.collapsible,
                        delaySaveSlices: group.delaySaveSlices,
                        disabled: group.disabled,
                        disabledReason: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_1__/* .getLocalizedProperty */ .Ld)(group, "disabledReason", this.localizationManager)
                    };
                    this.setTopLevelToggleSliceClone(group, groupSlices, objectName);
                    this.buildFormattingSlices({ slices: group.slices, objectName, sliceNames, formattingSlices: groupSlices.slices });
                    formattingContainerItem.groups.push(groupSlices);
                });
            }
            formattingContainer.containerItems.push(formattingContainerItem); // pushes specific container item (All, name1, name2) with slices
        });
        return formattingContainer;
    }
    buildFormattingSlices({ slices, objectName, sliceNames, formattingSlices }) {
        // Filter slices based on their visibility
        slices === null || slices === void 0 ? void 0 : slices.filter(({ visible = true }) => visible).forEach((slice) => {
            const formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                formattingSlices.push(formattingSlice);
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        const revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors;
        let cardContainerSlicesDefaultDescriptors = [];
        // eslint-disable-next-line
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ?
            [card].filter(({ visible = true }) => visible) :
            card.groups.filter(({ visible = true }) => visible));
        cardGroupInstances === null || cardGroupInstances === void 0 ? void 0 : cardGroupInstances.forEach((cardGroupInstance) => {
            var _a, _b;
            cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
            (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
                var _a;
                cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
                (_a = containerItem.groups) === null || _a === void 0 ? void 0 : _a.forEach((group) => {
                    cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, group.slices, sliceNames));
                });
            });
            revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
        });
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
        let revertToDefaultDescriptors = [];
        if (topLevelSlice) {
            sliceNames[topLevelSlice.name] = true;
            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
        }
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
    setTopLevelToggleSliceClone(objectToClone, newParent, objectName) {
        if (objectToClone.topLevelSlice) {
            const topLevelToggleSlice = objectToClone.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
            topLevelToggleSlice.suppressDisplayName = true;
            newParent.topLevelToggle = topLevelToggleSlice;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OZ: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   z0: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kx: () => (/* binding */ Model),
/* harmony export */   PA: () => (/* binding */ ItemDropdown),
/* harmony export */   St: () => (/* binding */ CompositeCard),
/* harmony export */   Tn: () => (/* binding */ SimpleCard),
/* harmony export */   iB: () => (/* binding */ NumUpDown),
/* harmony export */   jF: () => (/* binding */ ToggleSwitch),
/* harmony export */   ks: () => (/* binding */ TextInput),
/* harmony export */   sk: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports NamedEntity, CardGroupEntity, Group, SimpleSlice, AlignmentGroup, Slider, DatePicker, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */


class NamedEntity {
}
class CardGroupEntity extends NamedEntity {
}
class Model {
}
/** CompositeCard is use to populate a card into the formatting pane with multiple groups */
class CompositeCard extends NamedEntity {
}
class Group extends CardGroupEntity {
    constructor(object) {
        super();
        Object.assign(this, object !== null && object !== void 0 ? object : new Object({}));
    }
}
/** SimpleCard is use to populate a card into the formatting pane in a single group */
class SimpleCard extends CardGroupEntity {
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(this, "displayName", localizationManager);
        const sliceDescription = (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(this, "description", localizationManager);
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            }, disabled: this.disabled, disabledReason: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(this, "disabledReason", localizationManager) });
    }
    // eslint-disable-next-line
    getFormattingComponent(objectName, localizationManager) {
        let value = this.value;
        if (value === null || value === void 0 ? void 0 : value.displayNameKey) {
            value = {
                displayName: localizationManager === null || localizationManager === void 0 ? void 0 : localizationManager.getDisplayName(value.displayNameKey),
                value: value.value
            };
        }
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .yp(objectName, this),
            value: value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        const newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .De(this, newValue, this.value);
    }
}
class AlignmentGroup extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends NumUpDown {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(this, "placeholder", localizationManager), validators: this.validators });
    }
}
class ItemDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName, localizationManager)), { items: this.getFormattingItems(localizationManager, this.items) });
    }
    getFormattingItems(localizationManager, items) {
        return items.map((item) => {
            return Object.assign(Object.assign({}, item), { displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(item, "displayName", localizationManager) });
        });
    }
    setValue(value, localizationManager) {
        const newValue = this.getFormattingItems(localizationManager, this.items).find((item) => item.value === value);
        this.value = newValue ? newValue : this.items[0];
    }
}
class AutoDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName, localizationManager)), { mergeValues: this.getFormattingItems(localizationManager, this.mergeValues), filterValues: this.filterValues });
    }
    getFormattingItems(localizationManager, items) {
        return items === null || items === void 0 ? void 0 : items.map((item) => {
            return Object.assign(Object.assign({}, item), { displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(item, "displayName", localizationManager) });
        });
    }
}
class DurationPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
/**
 * Allows selecting multiple flags from a predefined list of items with bitwise values.
 * The selected flags are stored as a single number using bitwise representation,
 * where each flag corresponds to a specific bit position.
 * @example
 * 0 = no flags
 * 1 = show category
 * 2 = show value
 * 4 = show percent
 */
class ItemFlagsSelection extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.getFormattingItems(localizationManager, this.items) });
    }
    getFormattingItems(localizationManager, items) {
        return items.map((item) => {
            return Object.assign(Object.assign({}, item), { displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(item, "displayName", localizationManager) });
        });
    }
}
/**
 * Multiple flags selection component with enumeration values defined in capabilities.json,
 * using bitwise number values in a string representation.
 * The selected flags are stored as a single number using bitwise representation,
 * where each flag corresponds to a specific bit position.
 * @example
 * 0 = no flags
 * 1 = show category
 * 2 = show value
 * 4 = show percent
 */
class AutoFlagsSelection extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends TextInput {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(this, "displayName", localizationManager),
            description: (0,_utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getLocalizedProperty */ .Ld)(this, "description", localizationManager),
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it declares 'GridSlicer_guid_placeholder_DEBUG' on top-level, which conflicts with the current library output.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (visualPlugin)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var GridSlicer_guid_placeholder_DEBUG = {
    name: 'GridSlicer_guid_placeholder_DEBUG',
    displayName: 'Grid Slicer',
    class: 'Visual',
    apiVersion: '5.7.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["GridSlicer_guid_placeholder_DEBUG"] = GridSlicer_guid_placeholder_DEBUG;
}
/* harmony default export */ const visualPlugin = (GridSlicer_guid_placeholder_DEBUG);

})();

GridSlicer_guid_placeholder_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map