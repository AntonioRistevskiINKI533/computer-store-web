import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonHttpRequestInterceptor } from './clients/CommonHttpRequestInterceptor';
import { API_BASE_URL, Client } from './clients/system-api/UserApiClient.gen';
import { environment } from './environments/environment';

import { NgApexchartsModule } from "ng-apexcharts";

import { SaleProductComponent } from './pages/sale-product/sale-product.component';
import { SaleDateComponent } from './pages/sale-date/sale-date.component';
import { PurchaseSupplierComponent } from './pages/purchase-supplier/purchase-supplier.component';
import { PurchaseDateComponent } from './pages/purchase-date/purchase-date.component';
import { PurchaseProductComponent } from './pages/purchase-product/purchase-product.component';
import { SaleCityComponent } from './pages/sale-city/sale-city.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleDateComponent,
    SaleProductComponent,
    PurchaseSupplierComponent,
    PurchaseDateComponent,
    PurchaseProductComponent,
    SaleCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserModule,
    NgApexchartsModule,
    MatTabsModule
    //CanvasJSAngularChartsModule,
    //Client,
  ],
  providers: [
    //MatDatepickerModule,
    [
      { provide: HTTP_INTERCEPTORS, useClass: CommonHttpRequestInterceptor, multi: true },
      {
        provide: API_BASE_URL,
        useValue: environment.apiUrl
      },
    ],
    //{ provide: MAT_DIALOG_DATA, useValue: {} }
    Client
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
