import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDateComponent } from './pages/sale-date/sale-date.component';
import { SaleProductComponent } from './pages/sale-product/sale-product.component';
import { PurchaseSupplierComponent } from './pages/purchase-supplier/purchase-supplier.component';
import { PurchaseDateComponent } from './pages/purchase-date/purchase-date.component';
import { PurchaseProductComponent } from './pages/purchase-product/purchase-product.component';
import { SaleCityComponent } from './pages/sale-city/sale-city.component';
import { SaleCustomerComponent } from './pages/sale-customer/sale-customer.component';

const routes: Routes = [
  { path:'sale-date', component: SaleDateComponent},
  { path:'sale-product', component: SaleProductComponent},
  { path:'purchase-supplier', component: PurchaseSupplierComponent},
  { path:'purchase-date', component: PurchaseDateComponent},
  { path:'purchase-product', component: PurchaseProductComponent},
  { path:'sale-city', component: SaleCityComponent},
  { path:'sale-customer', component: SaleCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
