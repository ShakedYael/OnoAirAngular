import { Component,OnInit} from '@angular/core';
import { FlightCardComponent } from "../flight-card/flight-card.component";
import { Router } from '@angular/router';
import { FlightService } from '../../service/flights.service';
import { Flight } from '../../model/flight.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-search-a-flight',
  imports: [CommonModule,MatTableModule,MatButtonModule,MatPaginatorModule,MatSortModule],
  templateUrl: './search-a-flight.component.html',
  styleUrl: './search-a-flight.component.css'
})
export class SearchAFlightComponent  implements OnInit {
  flights: MatTableDataSource<Flight> = new MatTableDataSource<Flight>();
  displayedColumns: string[] = [
    'flightNo',
    'origin',
    'destination',
    'departureDate',
    'arrivalDate',
    'actions'
  ];

  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const flightData = this.flightService.list();
    this.flights = new MatTableDataSource(flightData);

    setTimeout(() => {
      this.flights.sort = this.sort;
    });

  }
  
  
  bookFlight(flightNo: string): void {
    this.router.navigate(['/book-single-flight', { flightNo }]);
  }





}
