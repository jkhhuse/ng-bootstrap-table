import { Component, OnInit, Input, Output, ViewEncapsulation, ElementRef, Renderer2, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'th',
  template: `
    <ng-content></ng-content>
    <div class="unit-table-column-sorter" *ngIf="unitShowSort">
      <span
        class="unit-table-column-sorter-up"
        [class.on]="unitSort == 'ascend'"
        [class.off]="unitSort != 'ascend'"
        title="↑"
        (click)="setSortValue('ascend')">
        <i class="fa fa-sort-asc" aria-hidden="true"></i>
      </span>
      <span
        class="unit-table-column-sorter-down"
        [class.on]="unitSort == 'descend'"
        [class.off]="unitSort != 'descend'"
        title="↓"
        (click)="setSortValue('descend')">
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
      </span>
    </div>
  `,
  styleUrls: ['./unit-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnitThComponent implements OnInit {

  private _showSort = false;
  private _sort = null;
  private el: HTMLElement;
  @Input() unitSortKey: string;
  @Output() unitSortChange = new EventEmitter<string>();
  @Output() unitSortChangeWithKey = new EventEmitter<{ key: string, value: string }>();

  @Input()
  set unitShowSort(value: boolean) {
    this._showSort = value != null && `${value}` !== 'false';
  }

  get unitShowSort(): boolean {
    return this._showSort;
  }

  setSortValue(value: string): void {
    if (this.unitSort === value) {
      this.unitSort = null;
    } else {
      this.unitSort = value;
    }
    this.unitSortChangeWithKey.emit({ key: this.unitSortKey, value: this.unitSort });
    this.unitSortChange.emit(this.unitSort);
  }

  ngOnInit() {
  }

  @Input()
  set unitSort(value: string) {
    this._sort = value;
    if ((value !== 'ascend') && (value !== 'descend')) {
      this.renderer.removeClass(this.el, 'unit-table-column-sort');
    } else {
      this.renderer.addClass(this.el, 'unit-table-column-sort');
    }
  }

  get unitSort(): string {
    return this._sort;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.el = this.elementRef.nativeElement;
  }

}
