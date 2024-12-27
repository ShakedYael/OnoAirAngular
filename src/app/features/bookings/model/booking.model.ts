import { Flight } from '../../flights/model/flight.model';
export interface Booking {
  id: string;
  passengers: number;
  flight: Flight; // Contains destination and other flight details
  destinationImageUrl?: string // Optional field for destination image URL

}
