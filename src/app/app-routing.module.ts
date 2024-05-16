import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { EditCityFormComponent } from './cities/edit-city-form/edit-city-form.component';
import { CompComponent } from './comp/comp.component';
import { AddCityFormComponent } from './cities/add-city-form/add-city-form.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicFormComponent } from './clinics/clinic-form/clinic-form.component';

const routes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/add-city', component: AddCityFormComponent },
  { path: 'cities/edit-city/:id', component: EditCityFormComponent },
  { path: 'clinics', component: ClinicsComponent },
  { path: 'clinics/edit-clinic/:id', component: ClinicFormComponent },
  { path: 'clinics/add-clinic', component: ClinicFormComponent },
  { path: 'Comp', component: CompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
