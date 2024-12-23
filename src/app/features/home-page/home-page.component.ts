import { Component } from '@angular/core';
import { FlightCardComponent } from '../flights/pages/flight-card/flight-card.component';


@Component({
  selector: 'app-home-page',
  imports: [ FlightCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}