import { Component } from '@angular/core';

@Component({
  selector: 'app-carbook',
  templateUrl: './carbook.component.html',
  styleUrls: ['./carbook.component.css']
})
export class CarbookComponent {
  bookingForm: any;
  bookCar() {
    console.log('Flight booked!', this.bookingForm.value);
  }
}
