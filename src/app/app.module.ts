import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import Component wit relative path
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  //Must declare all components being used in this module
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  //Don't add any new components here, only cares about root component
  bootstrap: [AppComponent],
})
export class AppModule {}
