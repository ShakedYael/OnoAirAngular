import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../service/bookings.service';
import { Booking } from '../../model/booking.model';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-my-bookings',
  imports: [RouterModule, CommonModule, MatButtonModule],
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
      this.isFutureBooking(booking.flight.departureDate, now)
    );

    this.pastBookings = bookings.filter(
      (booking) => !this.isFutureBooking(booking.flight.departureDate, now)
    );


  }

  private isFutureBooking(departureDate: string, now: Date): boolean {
    const departure = new Date(departureDate);
    return departure >= now;
  }
}