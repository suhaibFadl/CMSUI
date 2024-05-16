import { Component, OnInit } from '@angular/core';
import { CityService } from '../../shared/city.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-city-form',
  templateUrl: './edit-city-form.component.html',
  styleUrl: './edit-city-form.component.css'
})
export class EditCityFormComponent implements OnInit {
  constructor(public service: CityService, private route : ActivatedRoute){}
  cityId: number = 0

  ngOnInit(): void {
    this.cityId = this.route.snapshot.params['id'];  
    this.service.getCity(this.cityId);
  }
  
  updateCity(form: NgForm){
    console.log(form);
    this.service.putCity(this.cityId)
    .subscribe({
      next: res => {
      console.log('Should updated')
      },
      error: err => { console.log(err) }
    })
  }
}
