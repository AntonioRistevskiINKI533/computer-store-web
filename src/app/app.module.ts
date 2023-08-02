import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableComponent } from './pages/table/table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonHttpRequestInterceptor } from './clients/CommonHttpRequestInterceptor';
import { API_BASE_URL, Client } from './clients/system-api/UserApiClient.gen';
import { environment } from './environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
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
    //Client,
    //BrowserModule
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
