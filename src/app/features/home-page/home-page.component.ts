import { Component } from '@angular/core';
import { FlightCardComponent } from '../flights/pages/flight-card/flight-card.component';
import { SearchAFlightComponent } from '../flights/pages/search-a-flight/search-a-flight.component';

@Component({
  selector: 'app-home-page',
  imports: [ FlightCardComponent, SearchAFlightComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}