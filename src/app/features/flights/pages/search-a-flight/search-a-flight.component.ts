import { Component } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card.component';


@Component({
  selector: 'app-search-a-flight',
  imports: [FlightCardComponent],
  templateUrl: './search-a-flight.component.html',
  styleUrl: './search-a-flight.component.css'
})
export class SearchFlightComponent {

}
