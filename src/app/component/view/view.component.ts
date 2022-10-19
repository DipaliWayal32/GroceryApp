import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewItem = new Item()
  
  
  constructor() { 
    
  }

  ngOnInit(): void {

    var obj = JSON.parse( localStorage.getItem('item') || '{}')
    this.viewItem.itemName = obj.itemName
    this.viewItem.itemQuantity=obj.itemQuantity
    this.viewItem.itemUrl=obj.itemUrl
  }
  

  
}
