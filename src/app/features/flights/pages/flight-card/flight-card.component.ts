import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../service/flights.service';
import { DestinationService } from '../../../destinations/service/destinations.service';
import { Flight } from '../../model/flight.model';
import { Destination } from '../../../destinations/model/destination.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  providers: [FlightService, DestinationService]
})
export class FlightCardComponent implements OnInit {
  flights: Flight[] = [];
  destinations: Destination[] = [];
  filteredFlights: any[] = [];
  today: Date = new Date();

  constructor(
    private flightService: FlightService,
    private destinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.flights = this.flightService.list();
    this.destinations = this.destinationService.list();
    this.filterNextWeekFlights();
  }
  filterNextWeekFlights(): void {
    const todayWithoutTime = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    const oneWeekFromNow = new Date(todayWithoutTime.getTime() + 7 * 24 * 60 * 60 * 1000); // Next 7 days
  
    console.log(`Filtering flights between ${todayWithoutTime.toISOString()} and ${oneWeekFromNow.toISOString()}`);
  
    this.filteredFlights = this.flights
      .filter((flight) => {
        const departureDate = new Date(flight.departureDate);
        const departureDateWithoutTime = new Date(departureDate.getFullYear(), departureDate.getMonth(), departureDate.getDate());
        console.log(`Flight: ${flight.flightNo}, Departure Date: ${departureDateWithoutTime.toISOString()}`);
  
        // Compare only the date (ignoring time)
        return departureDateWithoutTime >= todayWithoutTime && departureDateWithoutTime <= oneWeekFromNow;
      })
      .map((flight) => {
        const destination = this.destinations.find(dest => dest.name === flight.destination);
        return {
          ...flight,
          destinationImage: destination ? destination.imageUrl : 'https://via.placeholder.com/150',
        };
      });
  
    console.log('Filtered Flights:', this.filteredFlights);
  }
  
  bookFlight(flightNo: string): void {
    this.router.navigate(['/book-single-flight', { flightNo }]);
  }
}