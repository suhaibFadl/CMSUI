import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { EditCityFormComponent } from './cities/edit-city-form/edit-city-form.component';
import { AddCityFormComponent } from './cities/add-city-form/add-city-form.component';
import { ClinicFormComponent } from './clinics/clinic-form/clinic-form.component';
import { ClinicsComponent } from './clinics/clinics.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    EditCityFormComponent,
    AddCityFormComponent,
    ClinicsComponent,
    ClinicFormComponent,
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
