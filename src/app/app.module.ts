import { CalenderModule } from './calender/calender.module';
import { CalenderComponent } from './calender/calender.component';
import { CalendarModule } from 'angular-calendar';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalenderModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
