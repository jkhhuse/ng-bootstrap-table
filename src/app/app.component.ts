import { Component } from '@angular/core';

@Component({
  selector: 'unit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dataSet = [
    // {
    //   name: 'jkhhuse1',
    //   age: 1
    // },
    // {
    //   name: 'jkhhuse2',
    //   age: 2
    // }
  ];
  pageSize = 10;
  page = 1;

}
