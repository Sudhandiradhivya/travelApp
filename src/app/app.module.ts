import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { FlightbookComponent } from './flightbook/flightbook.component';
import { FormsModule } from '@angular/forms';
import { BusBookComponent } from './bus-book/bus-book.component';
import { CarbookComponent } from './carbook/carbook.component';
import { HotelbookComponent } from './hotelbook/hotelbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    UserPageComponent,
    BookTicketsComponent,
    FlightbookComponent,
    BusBookComponent,
    CarbookComponent,
    HotelbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
