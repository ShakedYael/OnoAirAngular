import { Component,Input } from '@angular/core';
import { Booking } from '../../model/booking.model';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-booking-card',
  imports: [RouterModule,MatButtonModule],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.css'
})
export class BookingCardComponent {
  @Input() booking!: Booking; 

}
