import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleDateComponent } from './pages/sale-date/sale-date.component';
import { SaleProductComponent } from './pages/sale-product/sale-product.component';
import { PurchaseSupplierComponent } from './pages/purchase-supplier/purchase-supplier.component';
import { PurchaseDateComponent } from './pages/purchase-date/purchase-date.component';
import { PurchaseProductComponent } from './pages/purchase-product/purchase-product.component';
import { SaleCityComponent } from './pages/sale-city/sale-city.component';
import { SaleCustomerComponent } from './pages/sale-customer/sale-customer.component';
import { SaleProductTypeComponent } from './pages/sale-product-type/sale-product-type.component';
import { SaleBrandComponent } from './pages/sale-brand/sale-brand.component';
import { SaleDayOfWeekComponent } from './pages/sale-day-of-week/sale-day-of-week.component';

const routes: Routes = [
  { path:'sale-date', component: SaleDateComponent},
  { path:'sale-product', component: SaleProductComponent},
  { path:'purchase-supplier', component: PurchaseSupplierComponent},
  { path:'purchase-date', component: PurchaseDateComponent},
  { path:'purchase-product', component: PurchaseProductComponent},
  { path:'sale-city', component: SaleCityComponent},
  { path:'sale-customer', component: SaleCustomerComponent},
  { path:'sale-brand', component: SaleBrandComponent},
  { path:'sale-day-of-week', component: SaleDayOfWeekComponent},
  { path:'sale-product-type', component: SaleProductTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
