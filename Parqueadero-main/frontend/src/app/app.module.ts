import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleEntryComponent } from './components/vehicle-entry/vehicle-entry.component';
import { VehicleExitComponent } from './components/vehicle-exit/vehicle-exit.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { CellManagementComponent } from './components/cell-management/cell-management.component';
import { PaymentManagementComponent } from './components/payment-management/payment-management.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleEntryComponent,
    VehicleExitComponent,
    UserManagementComponent,
    CellManagementComponent,
    PaymentManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }