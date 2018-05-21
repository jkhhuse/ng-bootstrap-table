import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
  allChecked = false;

  ngOnInit() {
    for (let i = 0; i < 6; i++) {
      this.dataSet.push({
        name   : `Edward King ${i}`,
        age    : 32,
        checked: false
      });
    }
  }

  refreshStatus(): void {
    const allChecked = this.dataSet.every(value => value.checked === true);
    this.allChecked = allChecked;
  }

  checkAll(value: boolean): void {
    this.allChecked = !this.allChecked;
    this.dataSet.forEach(data => data.checked = this.allChecked);
  }

}
