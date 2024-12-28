import { Injectable } from '@angular/core';
import { Flight } from '../model/flight.model';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights: Flight[] = [
    new Flight('W61283', 'Tel Aviv', 'London', '2024-12-24', '22:00', '2024-12-24', '23:00', 180),
    new Flight('LX8396', 'Larnaca', 'Frankfurt', '2024-12-25', '09:30', '2024-12-25', '14:30', 150),
    new Flight('DL419', 'New York', 'Paris', '2024-12-26', '18:00', '2024-12-27', '06:00', 250),
    new Flight('EK202', 'Dubai', 'Tokyo', '2024-12-27', '22:00', '2024-12-28', '04:00', 300),
    new Flight('LH456', 'Frankfurt', 'Sydney', '2024-12-28', '11:00', '2024-12-29', '20:00', 350),
    new Flight('AF007', 'Paris', 'New York', '2025-01-01', '10:00', '2025-01-01', '13:00', 220),
    new Flight('BA001', 'London', 'Dubai', '2025-01-03', '14:00', '2025-01-03', '20:00', 200),
    new Flight('QR888', 'Doha', 'Tokyo', '2025-01-05', '07:00', '2025-01-05', '16:00', 180),
    new Flight('AA101', 'Dallas', 'Miami', '2025-01-06', '12:00', '2025-01-06', '14:00', 120),
    new Flight('CA123', 'Beijing', 'Sydney', '2025-01-07', '15:00', '2025-01-07', '16:30', 100)
  ];


  // Return all flights
  list(): Flight[] {
    return this.flights;
  }

  // Get a specific flight by its flight number
  get(flightNo: string): Flight | undefined {
    return this.flights.find(f => f.flightNo === flightNo);
  }
}
