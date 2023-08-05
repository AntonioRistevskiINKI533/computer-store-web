import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDateComponent } from './pages/sale-date/sale-date.component';
import { SaleProductComponent } from './pages/sale-product/sale-product.component';

const routes: Routes = [
  { path:'sale-date', component: SaleDateComponent},
  { path:'sale-product', component: SaleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
