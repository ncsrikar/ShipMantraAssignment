import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowCostComponent } from './show-cost/show-cost.component';
import { RedirectGaurdService } from './redirect-gaurd.service';
const routes: Routes = [
  {path:"", redirectTo:"calculateCost", pathMatch:"full"},
  {path:"calculateCost", component:HomeComponent},
  {path:"showCost", component:ShowCostComponent, canActivate:[RedirectGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
