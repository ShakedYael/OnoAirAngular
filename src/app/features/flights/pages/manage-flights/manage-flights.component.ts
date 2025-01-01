import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlightService } from '../../service/flights.service';
import { Flight } from '../../model/flight.model';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-manage-flights',
  imports: [MatTableModule,MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './manage-flights.component.html',
  styleUrl: './manage-flights.component.css'
})
export class ManageFlightsComponent implements OnInit {
  flights: Flight[] = []; 

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flights = this.flightService.list(); 
  }
  
}
