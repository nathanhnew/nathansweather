import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

declare const Skycons: any;

@Injectable()
export class DarkSkyService {
  token = 'd064e87ad89527652940e04e8c65288a';
  urlBase = `https://api.darksky.net/forecast/${this.token}/`;
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
  };

  constructor(private http: HttpClient) { }

  getCurrents(lat: number, lon: number) {
    const url = this.urlBase + `${lat},${lon}?exclude=[minutely,hourly]`;
    const returnable = {'currents': {}};
    return this.http.jsonp(url, 'callback').map(
      data => {
        if ('darksky-unavailable' in data['flags']) {
          console.log('Darksky-unavailable');
          return 'A Temporary Error Occurred Retrieving Weather Data';
        } else if (Object.keys(data).length === 0) {
          console.log('Error loading Darksky');
          return 'An error occurred. Try again';
        }
        const dataset = data['currently'];
        for (const element in dataset) {
          if (typeof dataset[element] === 'number') {
            if (element === 'humidity') {
              returnable['currents'][element] = dataset[element] * 100;
            } else if (element === 'time') {
              returnable['currents'][element] = new Date(dataset[element] * 1000);
            } else {
            returnable['currents'][element] = Math.round(dataset[element]);
            }
          } else {
            returnable['currents'][element] = dataset[element];
          }
        }
        if ('alerts' in data) {
          if (data['alerts'].length === 1) {
            returnable['alerts'] = data['alerts'];
          } else {
            returnable['alerts'] = data['alerts'];
            const typeHierarchy = ['tornado', 'hurricane',
                                   'severe thunderstorm', 'tropical storm',
                                   'blizzard', 'ice storm', 'winter storm',
                                   'fire', 'wind chill', 'flood', 'flash flood', 'excessive heat',
                                   'extreme wind', 'high wind', 'freeze', 'frost', 'red flag'];
            let extreme = Infinity;
            let mostExtreme: number;
            for (let i = 0; i < data['alerts'].length; i++ ) {

              const alertType = data['alerts'][i].title.toLowerCase().split(' ');
              let intensity = typeHierarchy.indexOf(alertType.slice(0, -1).join(' '));
              if (intensity < 0) { console.log( data['alerts'][i].title + ' intensity not found'); }
              if (alertType[-1] === 'watch') {
                intensity += 20;
              } else if (alertType[-1] === 'advisory') {
                intensity += 40;
              }
              if (intensity < extreme) {
                extreme = intensity;
                mostExtreme = i;
              }
            }
            returnable['alerts'].unshift(data['alerts'].splice(mostExtreme, 1)[0]);
          }
        }
        return returnable;
      },
      error => {
        console.log(error);
      });
  }

  getSkycon(cond: string) {
    return this.skycons[cond];
  }

}
