import { Injectable } from '@angular/core';
import { Booking } from '../model/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookings: Booking[] = [
    new Booking(
        '1',
        'Tel Aviv',
        'London',
        '2024-12-24',
        '20:00',
        '2024-12-24',
        '23:00',
        2,
        'https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F5682444%2FLondon_Dest_16531610X.jpg&width=1081.5', 
        'future'
      ),
      new Booking(
        '3',
        'New York',
        'Paris',
        '2024-12-26',
        '18:00',
        '2024-12-27',
        '08:00',
        4,
        'https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg',
        'past'
      ),
      new Booking(
        '4',
        'Dubai',
        'Tokyo',
        '2024-12-27',
        '22:00',
        '2024-12-28',
        '07:00',
        1,
        'https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg',
        'future'
      ),
    // Add more bookings as needed...
  ];

  // Fetch list of past bookings
  listPastBookings(): Booking[] {
    return this.bookings.filter((booking) => booking.status === 'past');
  }

  // Fetch list of future bookings
  listFutureBookings(): Booking[] {
    return this.bookings.filter((booking) => booking.status === 'future');
  }
}
