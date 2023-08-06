import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDateComponent } from './pages/sale-date/sale-date.component';
import { SaleProductComponent } from './pages/sale-product/sale-product.component';
import { PurchaseSupplierComponent } from './pages/purchase-supplier/purchase-supplier.component';

const routes: Routes = [
  { path:'sale-date', component: SaleDateComponent},
  { path:'sale-product', component: SaleProductComponent},
  { path:'purchase-supplier', component: PurchaseSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
