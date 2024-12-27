import { Component,OnInit } from '@angular/core';
import { BookingsService } from '../../service/bookings.service';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../../model/booking.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-booking',
  imports: [CommonModule],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit {
  booking: Booking | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookingsService: BookingsService
  ) {}

  ngOnInit(): void {
    const bookingId = this.route.snapshot.paramMap.get('id');
    if (bookingId) {
      this.booking = this.bookingsService.get(bookingId);
    }
  }

}
