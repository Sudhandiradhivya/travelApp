import { Component } from '@angular/core';

@Component({
  selector: 'app-flightbook',
  templateUrl: './flightbook.component.html',
  styleUrls: ['./flightbook.component.css']
})
export class FlightbookComponent {
  bookingForm: any;
  bookFlight() {
    console.log('Flight booked!', this.bookingForm.value);
  }
}
