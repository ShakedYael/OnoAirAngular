import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { ManageFlightsComponent } from './features/flights/pages/manage-flights/manage-flights.component';
import { ManageDestinationsComponent } from './features/destinations/pages/manage-destinations/manage-destinations.component';
import  { BookFlightComponent } from './features/bookings/pages/book-flight/book-flight.component';
import { BookSingleFlightComponent } from './features/bookings/pages/book-single-flight/book-single-flight.component';
import { MyBookingsComponent } from './features/bookings/pages/my-bookings/my-bookings.component';
import { HelpComponent } from './features/help/help.component';
import { SingleFlightComponent } from './features/flights/pages/single-flight/single-flight.component';
import { SingleDestinationComponent } from './features/destinations/pages/single-destination/single-destination.component';
import { ViewBookingComponent } from './features/bookings/pages/view-booking/view-booking.component';
import { FlightCardComponent } from './features/flights/pages/flight-card/flight-card.component';

export const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  {path: 'manage-flights', component: ManageFlightsComponent},
  {path: 'manage-destinations', component: ManageDestinationsComponent},
  {path: 'book-flight', component: BookFlightComponent},
  {path: 'book-single-flight', component: BookSingleFlightComponent},
  {path: 'my-bookings', component: MyBookingsComponent},
  {path: 'help', component: HelpComponent},
  {path:'single-flight', component: SingleFlightComponent},
  {path:'single-destination', component: SingleDestinationComponent},
  {path:'view-booking', component: ViewBookingComponent},
  {path:'flight-card', component: FlightCardComponent}


  

];