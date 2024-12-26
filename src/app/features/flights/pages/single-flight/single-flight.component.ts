import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../service/flights.service';
import { Flight } from '../../model/flight.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-flight',
  imports: [CommonModule],
  templateUrl: './single-flight.component.html',
  styleUrls: ['./single-flight.component.css']
})
export class SingleFlightComponent implements OnInit {
  flight?: Flight; // Store the flight details
  flightNotFound: boolean = false; // Track if flight is not found

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    // Get the flight number from the route parameters
    const flightNo = this.route.snapshot.paramMap.get('flightNo');
    if (flightNo) {
      // Fetch the flight details using the service
      this.flight = this.flightService.list().find(f => f.flightNo === flightNo);

      // If no flight is found, set the flag to true
      if (!this.flight) {
        this.flightNotFound = true;
      }
    } else {
      this.flightNotFound = true; // No flightNo provided in the URL
    }
  }
}
