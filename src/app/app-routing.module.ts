import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { FlightbookComponent } from './flightbook/flightbook.component';
import { CarbookComponent } from './carbook/carbook.component';
import { BusBookComponent } from './bus-book/bus-book.component';
import { HotelbookComponent } from './hotelbook/hotelbook.component';

const routes: Routes = [

  {
    path:'',redirectTo:'/Home',pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"book-tickets",
    component:BookTicketsComponent
  },
  {
    path:"flightbook",
    component:FlightbookComponent
  },
  {
    path:"carbook",
    component:CarbookComponent
  },
  {
    path:"busbook",
    component:BusBookComponent
  },
  {
    path:"hotelbook",
    component:HotelbookComponent
  },
  {
    path:"**",
    redirectTo:'/Home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
