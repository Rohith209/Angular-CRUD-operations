import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCrudComponent } from './employee-crud/employee-crud.component';
import { EmployeeHeadComponent } from './employee-head/employee-head.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCrudComponent,
    EmployeeHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
