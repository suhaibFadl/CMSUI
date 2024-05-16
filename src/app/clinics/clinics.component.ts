import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../shared/clinic.service';
import { Clinic } from '../shared/clinic.model';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrl: './clinics.component.css'
})
export class ClinicsComponent implements OnInit {
 constructor(public service: ClinicService){}
  ngOnInit(){
    this.service.refreshList();
  }

  onDelete(id: number) {
    this.service.deleteClinic(id)
      .subscribe({
        next: res => {
          this.service.clinics = res as Clinic[]
          console.log("Deleted")
        },
        error: err => { console.log(err) }
      })
  }
}
