import { Injectable } from '@angular/core';
import { Flight } from '../model/flight.model';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights: Flight[] = [
    new Flight('W61283', 'Tel Aviv', 'Krakow', '2024-01-15', '08:00', '2024-01-15', '12:00', 180),
    new Flight('LX8396', 'Larnaca', 'Zurich', '2024-01-16', '09:30', '2024-01-16', '14:30', 150),
    new Flight('DL419', 'New York', 'London', '2024-01-17', '18:00', '2024-01-18', '06:00', 250),
    new Flight('EK202', 'Dubai', 'Paris', '2024-01-18', '22:00', '2024-01-19', '04:00', 300),
    new Flight('LH456', 'Frankfurt', 'Los Angeles', '2024-01-19', '11:00', '2024-01-19', '20:00', 350),
    new Flight('AF007', 'Paris', 'New York', '2024-01-20', '10:00', '2024-01-20', '13:00', 220),
    new Flight('BA001', 'London', 'New York', '2024-01-21', '14:00', '2024-01-21', '17:00', 200),
    new Flight('QR888', 'Doha', 'Tokyo', '2024-01-22', '07:00', '2024-01-22', '16:00', 180),
    new Flight('AA101', 'Dallas', 'Miami', '2024-01-23', '12:00', '2024-01-23', '14:00', 120),
    new Flight('CA123', 'Beijing', 'Shanghai', '2024-01-24', '15:00', '2024-01-24', '16:30', 100)
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
