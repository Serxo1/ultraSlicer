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
            if (!opts || !opts.dataViews || !opts.dataViews[0]) {
                this.container.innerHTML = '';
                return;
            }

            const dataView = opts.dataViews[0];
            const displayMode = this.getDisplayMode(dataView);

            this.activeSelectionKeys = new Set(this.selectionManager.getSelectionIds().map(id => (id as any).getKey()));

            if (!dataView.categorical || !dataView.categorical.categories) {
                this.container.innerHTML = '';
                return;
            }

            this.container.innerHTML = '';
            const categories = dataView.categorical.categories;

            if (displayMode === 'dropdown') {
                this.renderDropdown(categories, dataView);
            } else {
                this.renderList(categories);
            }


        } catch (error) {
            console.error(error);
        }
    }

    private getDisplayMode(dataView: powerbi.DataView): string {
        if (dataView && dataView.metadata && dataView.metadata.objects) {
            const general = dataView.metadata.objects['general'];
            if (general && general['displayMode']) {
                return general['displayMode'] as string;
            }
        }
        return 'list'; // Default to list
    }

    private getSlicerSettings(dataView: powerbi.DataView): any {
        if (dataView && dataView.metadata && dataView.metadata.objects) {
            return dataView.metadata.objects['slicer'];
        }
        return {};
    }

    private renderDropdown(categories: DataViewCategoryColumn[], dataView: powerbi.DataView): void {
        categories.forEach(category => {
            const slicerContainer = document.createElement('div');
            slicerContainer.className = 'slicer-container';

            const slicerHeader = document.createElement('div');
            slicerHeader.className = 'slicer-header';
            slicerHeader.textContent = category.source.displayName;
            slicerContainer.appendChild(slicerHeader);

            const settings = this.getSlicerSettings(dataView);
            const multiSelect = settings && settings['multiSelect'];

            const selectElement = document.createElement('select');
            selectElement.className = 'slicer-dropdown';
            if (multiSelect) {
                selectElement.multiple = true;
            }

            // Add a default, non-selectable option
            const defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select...';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            selectElement.appendChild(defaultOption);

            category.values.forEach((value, index) => {
                const option = document.createElement('option');
                option.value = value as string;
                option.textContent = value as string;

                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(category, index)
                    .createSelectionId();

                if (this.activeSelectionKeys.has((selectionId as any).getKey())) {
                    option.selected = true;
                }

                selectElement.appendChild(option);
            });

            selectElement.addEventListener('change', () => {
                const selectedOptions = Array.from(selectElement.selectedOptions);
                const selectionIds = selectedOptions
                    .filter(option => !option.disabled) // Exclude the default placeholder
                    .map(option => {
                        const index = category.values.indexOf(option.value);
                        return this.host.createSelectionIdBuilder()
                            .withCategory(category, index)
                            .createSelectionId();
                    });

                this.selectionManager.clear();
                if (selectionIds.length > 0) {
                    this.selectionManager.select(selectionIds, true);
                }

                this.activeSelectionKeys.clear();
                selectionIds.forEach(id => this.activeSelectionKeys.add((id as any).getKey()));

                this.applyFilter(category);
            });

            slicerContainer.appendChild(selectElement);
            this.container.appendChild(slicerContainer);
        });
    }

    private renderList(categories: DataViewCategoryColumn[]): void {
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
                    this.selectionManager.select(selectionId, true);
                    item.classList.toggle('selected');
                    const selectionKey = (selectionId as any).getKey();
                    if (this.activeSelectionKeys.has(selectionKey)) {
                        this.activeSelectionKeys.delete(selectionKey);
                    } else {
                        this.activeSelectionKeys.add(selectionKey);
                    }
                    this.applyFilter(category);
                });

                slicerContainer.appendChild(item);
                observer.observe(item);
            });

            this.container.appendChild(slicerContainer);
        });
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