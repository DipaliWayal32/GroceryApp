import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  static view() {
    throw new Error('Method not implemented.');
  }
  items:Item[];
  constructor() {
    this.items = []
   }

  ngOnInit(): void {
  }
  deleteItem(item:Item){
    let index = this.items.indexOf(item)
    this.items.splice(index,1)
  }
  addItem(item:Item){
    this.items.push(item)
  }
  item = new Item()
  view(item:Item){
    this.item=item
    localStorage.setItem('item',JSON.stringify(item))
    
    window.open('/view')
  }
}