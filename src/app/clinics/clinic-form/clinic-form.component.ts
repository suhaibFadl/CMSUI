import { Component } from '@angular/core';
import { ClinicService } from '../../shared/clinic.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../shared/city.service';

@Component({
  selector: 'app-clinic-form',
  templateUrl: './clinic-form.component.html',
  styleUrl: './clinic-form.component.css'
})
export class ClinicFormComponent {
  constructor(public service: ClinicService, private route: ActivatedRoute){}
  clinicId: number = 0
 
  ngOnInit(): void {
    this.service.getCities()
    try {
      this.clinicId = this.route.snapshot.params['id'] 
      this.service.getClinic(this.clinicId);  
    } catch (error) {
      console.log(error)
    }
    console.log(this.clinicId)
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.service.clinic.clinicId == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }
  }

  insertRecord(form: NgForm) {
    this.service.postClinic()
      .subscribe({
        next: res => {
          console.log('Inserted successfully Clinic Registered')
        },
        error: err => { console.log(err) }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putClinic(this.clinicId)
      .subscribe({
        next: res => {
        
        },
        error: err => { console.log(err) }
      })
   }

}
