import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flightbook',
  templateUrl: './flightbook.component.html',
  styleUrls: ['./flightbook.component.css']
})
export class FlightbookComponent {
  constructor(private fb:FormBuilder){}
  flightBookingForm=this.fb.group({
    Departure:["",Validators.required],
    Destination:["",Validators.required],
    Date:["",Validators.required],
    Adults:["",Validators.required],
    Children:["",Validators.required],
    SeatPreference:["",Validators.required],
  })
  submitForm(){
    if(this.flightBookingForm.valid){
    alert("Successfully Registered!");
    this.refresh()
    }
    else{
    alert("Enter all the fileds")
    }
}
refresh(): void {
  window.location.reload();
}
}
