import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ Item } from "../../Item"

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemName:string
  itemQuantity:number
  itemUrl:string
  @Output() itemAdd:EventEmitter <Item> = new EventEmitter();
  constructor() { }
  message:number
  ngOnInit(): void {
  }
  addItem(form:NgForm){
    
    const item = {
      itemName:this.itemName,
      itemQuantity:this.itemQuantity,
      itemUrl:this.itemUrl,
      
      
    }
    form.reset(),
    this.itemAdd.emit(item)
  }

  
}
