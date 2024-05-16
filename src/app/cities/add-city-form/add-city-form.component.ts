import { Component } from '@angular/core';
import { CityService } from '../../shared/city.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-city-form',
  templateUrl: './add-city-form.component.html',
  styleUrl: './add-city-form.component.css'
})
export class AddCityFormComponent {

  constructor(public service: CityService){
    console.log(service.city)
  }

  addCity(form: NgForm){
    console.log(form);
    this.service.postCity()
    .subscribe({
      next: res => {
      console.log('Should created')
      },
      error: err => { console.log(err) }
    })
  }  
}
