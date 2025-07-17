import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
export declare class Visual implements IVisual {
    private host;
    private selectionManager;
    private container;
    private cache;
    constructor(opts: VisualConstructorOptions);
    update(opts: VisualUpdateOptions): void;
    destroy(): void;
    private buildCache;
}
