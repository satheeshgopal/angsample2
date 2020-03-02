import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductdetailComponent} from './productdetail/productdetail.component'


const routes: Routes = [
  { path: 'productdetail', component: ProductdetailComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
