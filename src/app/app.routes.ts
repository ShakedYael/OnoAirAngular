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
  {path: 'mange-flights', component: HomePageComponent},
  {path: 'manage-destinations', component: HomePageComponent},
  {path: 'book-flight', component: HomePageComponent},
  {path: 'book-single-flight', component: HomePageComponent},
  {path: 'my-bookings', component: HomePageComponent},
  {path: 'help', component: HomePageComponent},
  {path:'single-flight', component: HomePageComponent},
  {path:'single-destination', component: HomePageComponent},
  {path:'view-booking', component: HomePageComponent},
  {path:'flight-card', component: HomePageComponent}


  

];