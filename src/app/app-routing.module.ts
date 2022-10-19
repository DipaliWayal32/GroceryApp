import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './component/add-item/add-item.component';
import { GroceryComponent } from './component/list/grocery.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
  {path:'additem',component:AddItemComponent},
  {path:'list',component:GroceryComponent},
  {path:'view',component:ViewComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }