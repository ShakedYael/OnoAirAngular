import { Injectable } from '@angular/core';
import { FlightService } from '../../flights/service/flights.service';
import { Booking } from '../model/booking.model';
import { Flight } from '../../flights/model/flight.model';
import { DestinationService } from '../../destinations/service/destinations.service';
import { Passenger } from '../model/passenger.model';


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
        new Booking(
          '1',
          [
            new Passenger('P123456', 'John Doe'),
            new Passenger('P654321', 'Jane Smith'),
          ],
          flights[0],
          this.getDestinationImageUrl(flights[0].destination)
        ),
        new Booking(
          '2',
          [
            new Passenger('P789123', 'Alice Brown'),
            new Passenger('P111222', 'Chris Green'),
          ],
          flights[1],
          this.getDestinationImageUrl(flights[1].destination)
        ),
        new Booking(
          '3',
          [
            new Passenger('P333444', 'Michael Blue'),
            new Passenger('P555666', 'Sarah White'),
          ],
          flights[2],
          this.getDestinationImageUrl(flights[2].destination)
        ),
        new Booking(
          '4',
          [
            new Passenger('P777888', 'David Black'),
            new Passenger('P999000', 'Emily Yellow'),
          ],
          flights[3],
          this.getDestinationImageUrl(flights[3].destination)
        ),
        new Booking(
          '5',
          [
            new Passenger('P121314', 'Oliver Violet'),
            new Passenger('P151617', 'Sophia Red'),
          ],
          flights[4],
          this.getDestinationImageUrl(flights[4].destination)
        ),
        new Booking(
          '6',
          [
            new Passenger('P181920', 'William Orange'),
            new Passenger('P212223', 'Emma Cyan'),
          ],
          flights[5],
          this.getDestinationImageUrl(flights[5].destination)
        ),
        new Booking(
          '7',
          [
            new Passenger('P242526', 'James Purple'),
            new Passenger('P272829', 'Charlotte Magenta'),
          ],
          flights[6],
          this.getDestinationImageUrl(flights[6].destination)
        ),
        new Booking(
          '8',
          [
            new Passenger('P303132', 'Benjamin Lime'),
            new Passenger('P333435', 'Ava Aqua'),
          ],
          flights[7],
          this.getDestinationImageUrl(flights[7].destination)
        ),
        new Booking(
          '9',
          [
            new Passenger('P363738', 'Lucas Silver'),
            new Passenger('P394041', 'Mia Gold'),
          ],
          flights[8],
          this.getDestinationImageUrl(flights[8].destination)
        ),
        new Booking(
          '10',
          [
            new Passenger('P424344', 'Henry Teal'),
            new Passenger('P454647', 'Isabella Indigo'),
          ],
          flights[9],
          this.getDestinationImageUrl(flights[9].destination)
        ),
      ];
    }
  
    private getDestinationImageUrl(destination: string): string | undefined {
      const destinationDetails = this.destinationService
        .list()
        .find((d) => d.name === destination);
      return destinationDetails ? destinationDetails.imageUrl : 'https://via.placeholder.com/150';
    }
  
    list(): Booking[] {
      return this.bookings;
    }
  
    get(id: string): Booking | undefined {
      return this.bookings.find((booking) => booking.id === id);
    }
  }