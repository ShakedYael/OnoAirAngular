import { Flight } from '../../flights/model/flight.model';
import { Passenger } from './passenger.model';



export class Booking {
  constructor(
    public id: string,
    public passengers: Passenger[], 
    public flight: Flight, 
    public destinationImageUrl?: string 


  ) {}
  
  getPassengerCount(): number {
    return this.passengers.length;
  }


}
