import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ShowCostComponent } from './show-cost/show-cost.component';
import { GetCostDataService } from './get-cost-data.service';
import { RedirectGaurdService } from './redirect-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowCostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    GooglePlaceModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetCostDataService, RedirectGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
