import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnitTableComponent } from './unit-table.component';
import { UnitThComponent } from './unit-th.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ UnitTableComponent, UnitThComponent ],
  exports     : [ UnitTableComponent, UnitThComponent ],
  imports     : [ CommonModule, FormsModule, NgbModule.forRoot(), ]
})
export class UnitTableModule {
}
