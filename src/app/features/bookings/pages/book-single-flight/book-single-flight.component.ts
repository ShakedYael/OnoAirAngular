import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../../flights/model/flight.model';
import { FlightService } from '../../../flights/service/flights.service'; 
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-book-single-flight',
  imports: [CommonModule],
  templateUrl: './book-single-flight.component.html',
  styleUrl: './book-single-flight.component.css'
})
export class BookSingleFlightComponent implements OnInit {
  flight?: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    const flightNo = this.route.snapshot.paramMap.get('flightNo');
    if (flightNo) {
      this.flight = this.flightService.get(flightNo);
    }


    /*
    if (!this.flight) {
      throw new Error(`Flight with flightNo ${flightNo} not found`);
    }*/
    
  }


}
