import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { ShowStockComponent } from './components/show-stock/show-stock.component';
import { AllStockComponent } from './components/all-stock/all-stock.component';

const routes: Routes = [
  { path: '', component: AllStockComponent },
  { path: 'add', component: AddStockComponent },
  { path: 'stock/:code', component: ShowStockComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
