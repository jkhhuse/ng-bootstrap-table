import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation,
  TemplateRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/operators/merge';
import { UnitThComponent } from './unit-th.component';

@Component({
  selector: 'unit-table',
  templateUrl: './unit-table.component.html',
  styleUrls: ['./unit-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnitTableComponent implements OnInit, AfterContentInit  {

  @Input() dataSet: any;
  @Input() pageSize: string;
  @Input() page: string;
  @Input() unitLoading: boolean;
  @ContentChildren(UnitThComponent, { descendants: true }) listOfUnitThComponent: QueryList<UnitThComponent>;
  @Output() nzSortChange = new EventEmitter<{ key: string, value: string }>();
  private _singleSort = true;
  private sortSubscription: Subscription;
  private _noResult: string | TemplateRef<void>;
  isNoResultString: boolean;

  @Input()
  set nzSingleSort(value: boolean) {
    this._singleSort = value != null && `${value}` !== 'false';
  }

  get nzSingleSort(): boolean {
    return this._singleSort;
  }

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

  ngAfterContentInit(): void {
    let sortChange = new Subject<{ key: string, value: string }>().asObservable();
    const listOfTh = this.listOfUnitThComponent.toArray();
    const sortChangeArray = listOfTh.map(th => th.unitSortChangeWithKey);
    if (sortChangeArray.length) {
      sortChangeArray.forEach(sort => {
        sortChange = sortChange.pipe(merge(sort.asObservable()));
      });
    }
    this.sortSubscription = sortChange.subscribe(data => {
      this.nzSortChange.emit(data);
      if (this.nzSingleSort) {
        listOfTh.forEach(th => th.unitSort = (th.unitSortKey === data.key ? th.unitSort : null));
      }
    });
  }

}
