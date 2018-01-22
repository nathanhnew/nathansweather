import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
declare var Skycons: any;

@Injectable()
export class DarkSkyService {
  token = 'd064e87ad89527652940e04e8c65288a'
  urlBase = `https://api.darksky.net/forecast/${this.token}/`
  skycons = {
    'CLEAR-DAY': Skycons.CLEAR_DAY,
    'CLEAR-NIGHT': Skycons.CLEAR_NIGHT,
    'PARTLY-CLOUDY-DAY': Skycons.PARTLY_CLOUDY_DAY,
    'PARTLY-CLOUDY-NIGHT': Skycons.PARTLY_CLOUDY_NIGHT,
    'CLOUDY': Skycons.CLOUDY,
    'RAIN': Skycons.RAIN,
    'SLEET': Skycons.SLEET,
    'SNOW': Skycons.SNOW,
    'WIND': Skycons.WIND,
    'FOG': Skycons.FOG,
  }

  constructor(private http: HttpClient) { }

  getCurrents(lat: number, lon: number) {
    const url = this.urlBase + `${lat},${lon}?exclude=[minutely,hourly]`;
    let returnable = {'currents': {}};
    return this.http.jsonp(url, 'callback').map(
      data => {
        if ('darksky-unavailable' in data['flags']) {
          console.log('Darksky-unavailable');
          return 'A temporary error occurred';
        }
        else if (Object.keys(data).length === 0) {
          console.log('Error loading Darksky');
          return 'An error occurred. Try again';
        }
        let dataset = data['currently'];
        for (let element in dataset) {
          if (typeof dataset[element] == "number") {

            if (element === 'humidity') {
              returnable['currents'][element] = dataset[element] * 100;
            } if (element === 'time') {
              returnable['currents'][element] = new Date(dataset[element] * 1000);
            } else {
            returnable['currents'][element] = Math.round(dataset[element]);
            }
          } else {
            returnable['currents'][element] = dataset[element];
          }
        }
        if('alerts' in data) { returnable['alerts'] = data['alerts']};
        return returnable;
      },
      error => {
        console.log(error);
      });
  }

  castDeg(deg: string) {
    let dir = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"]
    return dir[Math.floor((parseFloat(deg) / 45) + .5) % 8].toString()
  }

  getSkycon(cond: string) {
    return this.skycons[cond]
  }
}
