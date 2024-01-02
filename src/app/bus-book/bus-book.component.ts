import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-book',
  templateUrl: './bus-book.component.html',
  styleUrls: ['./bus-book.component.css']
})
export class BusBookComponent {
  bookingForm: any;
  bookBus() {
    console.log('Flight booked!', this.bookingForm.value);
  }
}
