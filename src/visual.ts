"use strict";

import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;


export class Visual implements IVisual {
    private host: IVisualHost;
    private selectionManager: ISelectionManager;
    private container: HTMLElement;
    private activeSelectionKeys: Set<string> = new Set();

    constructor(opts: VisualConstructorOptions) {
        if (!opts) { return; }
        this.host = opts.host;
        this.selectionManager = this.host.createSelectionManager();
        this.container = document.createElement('div');
        this.container.className = 'grid-root';
        opts.element.appendChild(this.container);
    }

    public update(opts: VisualUpdateOptions): void {
        try {
            this.activeSelectionKeys = new Set(this.selectionManager.getSelectionIds().map(id => (id as any).getKey()));

            if (!opts || !opts.dataViews || !opts.dataViews[0] || !opts.dataViews[0].categorical || !opts.dataViews[0].categorical.categories) {
                this.container.innerHTML = '';
                return;
            }

            this.container.innerHTML = '';
            const categories = opts.dataViews[0].categorical.categories;

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        el.textContent = el.dataset.value;
                        observer.unobserve(el);
                    }
                });
            }, { root: this.container, threshold: 0.1 });

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

                    if (this.activeSelectionKeys.has((selectionId as any).getKey())) {
                        item.classList.add('selected');
                    }

                    item.addEventListener('click', () => {
                        // Lógica de seleção visual com o SelectionManager
                        this.selectionManager.select(selectionId, true);

                        // Alterna o estado visual imediatamente
                        item.classList.toggle('selected');

                        // Atualiza o conjunto de chaves de seleção ativas
                        const selectionKey = (selectionId as any).getKey();
                        if (this.activeSelectionKeys.has(selectionKey)) {
                            this.activeSelectionKeys.delete(selectionKey);
                        } else {
                            this.activeSelectionKeys.add(selectionKey);
                        }

                        // Aplica o filtro JSON
                        this.applyFilter(category);
                    });

                    slicerContainer.appendChild(item);
                    observer.observe(item);
                });

                this.container.appendChild(slicerContainer);
            });
        } catch (error) {
            console.error(error);
        }
    }

    public destroy(): void {
        // Cleanup logic here
    }

    private buildCache(categories: DataViewCategoryColumn[]): void {
        // Caching logic here
    }

    private applyFilter(category: DataViewCategoryColumn): void {
        const selectedIds = this.selectionManager.getSelectionIds();
        const selectedValues: (string | number | boolean)[] = [];

        const selectionIdValueMap = new Map<string, any>();
        category.values.forEach((value, index) => {
            const selectionId = this.host.createSelectionIdBuilder()
                .withCategory(category, index)
                .createSelectionId();
            selectionIdValueMap.set((selectionId as any).getKey(), value);
        });

        selectedIds.forEach(id => {
            const key = (id as any).getKey();
            if (selectionIdValueMap.has(key)) {
                selectedValues.push(selectionIdValueMap.get(key));
            }
        });

        if (selectedValues.length > 0) {
            const target = {
                table: category.source.queryName.split('.')[0],
                column: category.source.displayName
            };

            const filter = {
                $schema: "http://powerbi.com/product/schema#basic",
                target: {
                    table: target.table,
                    column: target.column
                },
                operator: "In",
                values: selectedValues,
                filterType: 1 // Basic Filter
            };

            this.host.applyJsonFilter(filter, "general", "filter", powerbi.FilterAction.merge);
        } else {
            this.host.applyJsonFilter(null, "general", "filter", powerbi.FilterAction.remove);
        }
    }
}