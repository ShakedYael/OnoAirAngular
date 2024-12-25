import { Component,OnInit} from '@angular/core';
import { FlightCardComponent } from "../flight-card/flight-card.component";
import { Router } from '@angular/router';
import { FlightService } from '../../service/flights.service';
import { Flight } from '../../model/flight.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-a-flight',
  imports: [FlightCardComponent, CommonModule],
  templateUrl: './search-a-flight.component.html',
  styleUrl: './search-a-flight.component.css'
})
export class SearchAFlightComponent  implements OnInit {
  flights: Flight[] = [];

  constructor(
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flights = this.flightService.list();
  }

  bookFlight(flightNo: string): void {
    this.router.navigate(['/book-single-flight', { flightNo }]);
  }





}
