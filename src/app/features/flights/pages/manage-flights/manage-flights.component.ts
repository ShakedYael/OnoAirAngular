import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlightService } from '../../service/flights.service';
import { Flight } from '../../model/flight.model';


@Component({
  selector: 'app-manage-flights',
  imports: [MatTableModule,MatIconModule, MatButtonModule],
  templateUrl: './manage-flights.component.html',
  styleUrl: './manage-flights.component.css'
})
export class ManageFlightsComponent implements OnInit {
  flights: Flight[] = []; // Initialize as an empty array

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.list(); // Retrieve flights from the service
  }
  
}
