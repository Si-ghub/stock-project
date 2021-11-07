import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AllStockComponent } from './components/all-stock/all-stock.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ShowStockComponent } from './components/show-stock/show-stock.component';



@NgModule({
  declarations: [
    AppComponent,
    AllStockComponent,
    AddStockComponent,
    HeaderComponent,
    ShowStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
