import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css']
})
export class VehicleEntryComponent {
  entryForm: FormGroup;

  constructor(private fb: FormBuilder, private vehicleService: VehicleService) {
    this.entryForm = this.fb.group({
      plate: ['', Validators.required],
      type: ['', Validators.required],
      userId: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.entryForm.valid) {
      this.vehicleService.registerEntry(this.entryForm.value).subscribe(response => {
        console.log('Vehicle entry registered:', response);
      });
    }
  }
}