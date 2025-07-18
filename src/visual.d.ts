import "./style/visual.less";
import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
export declare class Visual implements IVisual {
    private host;
    private selectionManager;
    private container;
    private activeSelectionKeys;
    private formattingSettings;
    private formattingSettingsService;
    constructor(options: VisualConstructorOptions);
    getFormattingModel(): powerbi.visuals.FormattingModel;
    update(options: VisualUpdateOptions): void;
    private renderDropdown;
    private applyGridStyles;
    private createSlicerContainer;
    private applyContainerStyles;
    private applyLabelStyles;
    private applySelectorStyles;
    private applyDropdownStyles;
    private createDropdownLayout;
    private populateDropdownOptions;
    private createOption;
    private updateAndClose;
    private updateHeaderText;
    destroy(): void;
}
