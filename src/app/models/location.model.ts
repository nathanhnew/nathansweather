export class Location {
  constructor(public lat: number = undefined,
              public lon: number = undefined,
              public city: string = undefined,
              public state: string = undefined,
              public country: string = undefined,
              public postal: number = undefined,
              public searchDate: Date = undefined) {}
}
