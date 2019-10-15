import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'practi-store';
  power = 10;
  items = ['carlos', 'Dee', 'Kleyber'];

  ngOnInit() {
  }

  addItem(item: string = 'new item') {
    this.items.push(item);
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
