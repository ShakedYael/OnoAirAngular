import { Component ,OnInit} from '@angular/core';
import { FlightService } from '../../service/flights.service';
import { Flight } from '../../model/flight.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css'
})
export class FlightCardComponent implements OnInit {
  flightCards: Flight[] = []; // Reuse the Flight model or adapt as necessary

  constructor(private flightsService: FlightService) {}

  ngOnInit(): void {
    // Fetch the flights from the FlightsService
    this.flightCards = this.flightsService.list(); // Adjust if using a different method
    console.log(this.flightCards); // Debugging: Ensure data is logged

  }

 


}
