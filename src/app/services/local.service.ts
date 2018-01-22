import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class IpGeoService {
  url = "https://ipinfo.io/geo"

  constructor(public http: HttpClient) { }

  ipLocation() {
    return this.http.get(this.url)
  }
}

@Injectable()
export class OSMGeocodeService  {
  reverseGeocodeBase = 'https://nominatim.openstreetmap.org/reverse?'
  geocodeBase = 'https://nominatim.openstreetmap.org/search?'

  constructor(private http: HttpClient) { }

  reverseGeocode(lat: number, lon: number) {
    const url = this.reverseGeocodeBase;
    let params = new HttpParams();
    params = params.set('format', 'json')
    params = params.append('lat', lat.toString())
    params = params.append('lon', lon.toString())
    params = params.append('addressdetail', '1')

    return this.http.get(url, {params: params});
  }

  geocode(city: string, state: string, country: string) {
    const url = this.geocodeBase;
    let params = new HttpParams();
    params = params.set('format', 'json');
    params = params.append('city', city);
    params = params.append('state', state);
    params = params.append('country', country)
    return this.http.get(url, {params: params});
  }
}

@Injectable()
export class GoogleService {
  key = 'AIzaSyCwPPZ5pogzC9vJm0gw4ISOHHXMAr-18dU';

  constructor(private http: HttpClient) {}

  getAutocomplete(input: string) {
    const autocompleteBaseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
    let params = new HttpParams();
    params = params.set('key', this.key);
    params = params.append('input', input);
    params = params.append('types', '(cities)');
    return this.http.get(autocompleteBaseUrl, {params: params});
  }
}


@Injectable()
export class LocationService implements OnDestroy {
  location: Location;
  geoSub: Subscription;
  ipSub: Subscription;
  subs: Subscription[];
  noData: boolean;
  errorList: Subject<string>;
  getLocation: Subject<Location>;

  constructor(private ipGeoService: IpGeoService, private geocoder: OSMGeocodeService, private google: GoogleService) {
    this.location = new Location();
    this.subs = [this.geoSub, this.ipSub];
    this.errorList = new Subject<string>();
    this.getLocation = new Subject<Location>();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        this.location.lat = location.coords.latitude;
        this.location.lon = location.coords.longitude;
        this.location.searchDate = new Date();
        this.setCityInformation(this.location.lat, this.location.lon);
      },
        error => {
          console.log('Unable to get location from navigator, looking through IP.')
          this.ipSub = this.ipGeoService.ipLocation().subscribe(
            data => {
              this.location.lat = data["loc"].split(',')[0];
              this.location.lon = data["loc"].split(',')[1];
              if (data["city"]) {
                this.location.city = data["city"];
              }
              if (data["region"]) {
                this.location.state = data["region"];
              }
              if (data["postal"]) {
                this.location.postal = data["postal"];
              }
              if (data["country"]) {
                this.location.country = data["country"]
              }
              this.getLocation.next(this.location);
            },
            error => {
              this.noData = true;
            });
          if (this.noData) {
            switch (error.code) {
              case 1:
                console.log('permission denied');
                this.errorList.next("Please share your location!");
                break;
              case 2:
                console.log('Location Unavailable');
                this.errorList.next("Unable to find location, please try again.");
                break;
              case 3:
                console.log('Timeout');
                this.errorList.next("An Unknown error occurred.");
                break;
            }
          }
        });
    }
  }

  setCityInformation(lat: number, lon: number) {
    this.geoSub = this.geocoder.reverseGeocode(lat, lon).subscribe(
      data => {
        this.location.city = data['address']['city'];
        this.location.postal = data['address']['postcode'];
        this.location.state = data['address']['state'];
        this.location.country = data['address']['country_code'].toUpperCase();
        this.getLocation.next(this.location);
      }
    );
  }

  setLocation(location: Location) {
    this.location = location;
    this.getLocation.next(this.location);
  }

  findLocationByInputStream(input: string): Observable<string[]>{
    let returnVals: string[] = [];
    return this.google.getAutocomplete(input).map(
      data => {
          let optList = [];
          let predictions = data["predictions"];
          let i = 0;
          for(let prediction of predictions){
            if(i>=4) {
              break;
            }
            let load = prediction["structured_formatting"]["main_text"];
            load += ', ';
            load += prediction["structured_formatting"]["secondary_text"];
            optList.push(load);
            i ++;
          }
          return optList.slice();
        }, error => {
          return [error]
        });
      }
  setLocationByInput(cityInput: string) {
    const address = cityInput.split(', ');
    let city: string;
    let state: string;
    let country: string;

    if (address.length < 3) {
      city = address[0];
      state = ''
      country = address[1];
    } else {
      city = address[0];
      state = address[1];
      country = address[2];
    }
    this.geoSub = this.geocoder.geocode(city, state, country).subscribe(
      data => {
        if (!data[0]) {
          this.errorList.next('Unable to Find Requested Location');
          return
        }
        this.location.lat = data[0]["lat"];
        this.location.lon = data[0]["lon"];
        this.location.city = city;
        this.location.state = state.length > 0 ? state : undefined;
        this.location.country = country;
        this.location.searchDate = new Date();
        this.location.postal = undefined;
        this.getLocation.next(this.location);
      },
      error => {
        this.errorList.next(error);
      });
  }

  removeError() {
    this.errorList.next();
  }

  ngOnDestroy() {
    this.subs.forEach(elem => elem.unsubscribe());
  }
}
