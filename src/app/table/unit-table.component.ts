import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  pageChanged() {
  }

}
