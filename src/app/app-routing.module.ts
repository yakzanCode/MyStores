import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component'; 
import { SaleComponent } from './sale/sale.component'; 
import { NewComponent } from './new/new.component';  
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'frontend' , loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
  { path:'' , component : HomeComponent },
  { path:'M' , component : MenComponent },
  { path:'W' , component : WomenComponent },
  { path:'K' , component : KidsComponent },
  { path:'S' , component : SaleComponent },
  { path:'N' , component : NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
