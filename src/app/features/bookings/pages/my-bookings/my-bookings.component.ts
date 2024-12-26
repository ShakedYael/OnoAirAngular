import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../service/bookings.service';
import { Booking } from '../../model/booking.model';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-my-bookings',
  imports: [RouterModule, CommonModule, MatButtonModule],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  futureBookings: Booking[] = [];
  pastBookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.futureBookings = this.bookingService.listFutureBookings();
    this.pastBookings = this.bookingService.listPastBookings();
  }
}
