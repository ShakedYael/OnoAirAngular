export class Booking {
    constructor(
      public id: string, // Unique identifier
      public origin: string, // Origin of the flight
      public destination: string, // Destination of the flight
      public boardingDate: string, // Date of boarding
      public boardingTime: string, // Time of boarding
      public landingDate: string, // Date of landing
      public landingTime: string, // Time of landing
      public passengers: number, // Number of passengers
      public destinationImage: string, // URL of the destination image
      public status: 'past' | 'future' // Status of the booking
    ) {}
  }
  