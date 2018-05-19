import { Component, OnInit, Input, ViewEncapsulation,
  TemplateRef, ContentChildren, QueryList } from '@angular/core';
import { UnitThComponent } from './unit-th.component';

@Component({
  selector: 'unit-table',
  templateUrl: './unit-table.component.html',
  styleUrls: ['./unit-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnitTableComponent implements OnInit {

  @Input() dataSet: any;
  @Input() pageSize: string;
  @Input() page: string;
  @ContentChildren(UnitThComponent, { descendants: true }) listOfUnitThComponent: QueryList<UnitThComponent>;
  private _noResult: string | TemplateRef<void>;
  isNoResultString: boolean;

  @Input()
  set nzNoResult(value: string | TemplateRef<void>) {
    this.isNoResultString = !(value instanceof TemplateRef);
    this._noResult = value;
  }

  get nzNoResult(): string | TemplateRef<void> {
    return this._noResult;
  }

  constructor() { }

  ngOnInit() {
  }

  pageChanged() {
  }

  

}
