import { Component, OnInit } from '@angular/core';
import { CityService } from '../shared/city.service';
import { City } from '../shared/city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit{
  constructor(public service: CityService){}
  ngOnInit(){
    this.service.refreshList();
  }

  onDelete(id: number) {
    this.service.deleteCity(id)
      .subscribe({
        next: res => {
          this.service.cities = res as City[]
          console.log("Deleted")
        },
        error: err => { console.log(err) }
      })
  }
}
