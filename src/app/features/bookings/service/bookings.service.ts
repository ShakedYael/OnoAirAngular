import { Injectable } from '@angular/core';
import { FlightService } from '../../flights/service/flights.service';
import { Booking } from '../model/booking.model';
import { Flight } from '../../flights/model/flight.model';
import { DestinationService } from '../../destinations/service/destinations.service';


@Injectable({
    providedIn: 'root',
  })
  export class BookingsService {
    private bookings: Booking[] = [];
  
    constructor(
      private flightService: FlightService,
      private destinationService: DestinationService
    ) {
      this.initializeBookings();
    }
  
    private initializeBookings(): void {
      const flights = this.flightService.list();
  
      this.bookings = [
        {
          id: '1',
          passengers: 5,
          flight: flights[0],
          destinationImageUrl: this.getDestinationImageUrl(flights[0].destination),
        },
        {
          id: '2',
          passengers: 6,
          flight: flights[1],
          destinationImageUrl: this.getDestinationImageUrl(flights[1].destination),
        },
        // Add more bookings here
      ];
    }
  
    private getDestinationImageUrl(destination: string): string | undefined {
      const destinationDetails = this.destinationService
        .list()
        .find((d) => d.code === destination);
      return destinationDetails ? destinationDetails.imageUrl : undefined;
    }
  
    list(): Booking[] {
      return this.bookings;
    }
  
    get(id: string): Booking | undefined {
      return this.bookings.find((booking) => booking.id === id);
    }
  }