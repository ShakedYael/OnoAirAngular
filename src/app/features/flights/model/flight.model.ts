export class Flight {
    constructor(
      public flightNo: string,
      public origin: string,
      public destination: string,
      public departureDate: string,
      public departureTime: string,
      public arrivalDate: string,
      public arrivalTime: string,
      public seats: number
    ) {}
  }
  