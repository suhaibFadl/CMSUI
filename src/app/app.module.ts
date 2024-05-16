import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCityFormComponent } from './cities/edit-city-form/edit-city-form.component';
import { CompComponent } from './comp/comp.component';
import { FormsModule } from '@angular/forms';
import { AddCityFormComponent } from './cities/add-city-form/add-city-form.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicFormComponent } from './clinics/clinic-form/clinic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    EditCityFormComponent,
    CompComponent,
    AddCityFormComponent,
    ClinicsComponent,
    ClinicFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
