import { Injectable } from '@angular/core';
import { Flight } from '../model/flight.model';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private flights: Flight[] = [];

  constructor() {
    this.generateFlights();
  }

  private generateFlights(): void {
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    this.flights = [
      new Flight(
        'W61283',
        'Tel Aviv',
        'London',
        this.formatDate(today),
        '22:00',
        this.formatDate(new Date(today.getTime() + oneDay)),
        '23:00',
        180
      ),
      new Flight(
        'LX8396',
        'Larnaca',
        'Frankfurt',
        this.formatDate(new Date(today.getTime() + oneDay)),
        '09:30',
        this.formatDate(new Date(today.getTime() + 2 * oneDay)),
        '14:30',
        150
      ),
      new Flight(
        'DL419',
        'New York',
        'Paris',
        this.formatDate(new Date(today.getTime() + 2 * oneDay)),
        '18:00',
        this.formatDate(new Date(today.getTime() + 3 * oneDay)),
        '06:00',
        250
      ),
      new Flight(
        'EK202',
        'Dubai',
        'Tokyo',
        this.formatDate(new Date(today.getTime() + 3 * oneDay)),
        '22:00',
        this.formatDate(new Date(today.getTime() + 4 * oneDay)),
        '04:00',
        300
      ),
      new Flight(
        'LH456',
        'Frankfurt',
        'Sydney',
        this.formatDate(new Date(today.getTime() + 4 * oneDay)),
        '11:00',
        this.formatDate(new Date(today.getTime() + 5 * oneDay)),
        '20:00',
        350
      ),
      new Flight(
        'AF007',
        'Paris',
        'New York',
        '2023-06-26',
        '10:00',
        '2023-06-26',
        '13:00',
        220
      ),
      new Flight(
        'BA001',
        'London',
        'Dubai',
        '2023-04-11',
        '14:00',
        '2023-04-11',
        '20:00',
        200
      ),
      new Flight(
        'QR888',
        'Doha',
        'Tokyo',
        '2023-04-11',
        '07:00',
        '2023-04-11',
        '16:00',
        180
      ),
      new Flight(
        'AA101',
        'Dallas',
        'Miami',
        '2023-01-01',
        '12:00',
        '2023-01-01',
        '14:00',
        120
      ),
      new Flight(
        'CA123',
        'Beijing',
        'Sydney',
        '2023-03-01',
        '15:00',
        '2023-03-01',
        '16:30',
        100
      )
    ];
  }


  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



  list(): Flight[] {
    return this.flights;
  }

  get(flightNo: string): Flight | undefined {
    return this.flights.find(f => f.flightNo === flightNo);
  }
}
