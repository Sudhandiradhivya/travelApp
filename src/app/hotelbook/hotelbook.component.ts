import { Component } from '@angular/core';

@Component({
  selector: 'app-hotelbook',
  templateUrl: './hotelbook.component.html',
  styleUrls: ['./hotelbook.component.css']
})
export class HotelbookComponent {
  bookingForm: any;
  reservationHotel() {
    console.log('Flight booked!', this.bookingForm.value);
  }
}
