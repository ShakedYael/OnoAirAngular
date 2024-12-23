export class Destination {
    constructor(
      public code: string,         // Unique identifier for the destination
      public name: string,         // City or destination name
      public airportName: string,  // Name of the airport
      public airportUrl: string,   // URL for the airport website
      public imageUrl: string      // URL for the destination image
    ) {}
  }