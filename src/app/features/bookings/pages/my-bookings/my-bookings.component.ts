import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../service/bookings.service';
import { Booking } from '../../model/booking.model';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-my-bookings',
  imports: [RouterModule, CommonModule,BookingCardComponent],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  futureBookings: Booking[] = [];
  pastBookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) {}

  ngOnInit(): void {
    const now = new Date();
    const bookings = this.bookingsService.list();

    this.futureBookings = bookings.filter((booking) =>
      this.isFutureBooking(booking.flight.departureDate, booking.flight.departureTime, now)
    );

    this.pastBookings = bookings.filter(
      (booking) => !this.isFutureBooking(booking.flight.departureDate,booking.flight.departureTime, now)
    );


  }

  private isFutureBooking(departureDate: string,departureTime: string, now: Date): boolean {
    const departure = new Date(`${departureDate}T${departureTime}`);
    return departure >= now;
  }
}
import { BookingCardComponent } from '../booking-card/booking-card.component';
