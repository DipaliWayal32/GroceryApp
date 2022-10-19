import { NgModule, ɵisListLikeIterable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './component/list/grocery.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './component/view/view.component';




@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    AddItemComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
