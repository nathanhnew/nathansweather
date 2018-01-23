import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { LocationService } from '../services/local.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../models/location.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit, OnDestroy {

  locSearch: FormControl;
  location: Location;
  locSub: Subscription;
  errorSub: Subscription;
  options: string[];
  filteredOptions: string[];
  headerWelcomeText: string;
  headerCityText: string;
  errorDisp: boolean;

  @Input('host') host: string;

  constructor(private locationService: LocationService) {
    this.locSearch = new FormControl();
  }

  ngOnInit() {
    this.headerWelcomeText = this.host === 'currents' ? 'Currently in' : 'Forecast for';
    this.location = this.locationService.location;
    this.setHeader();
    this.locSub = this.locationService.getLocation.subscribe(city => {
      this.location = this.locationService.location;
      this.setHeader();
    });
    this.filteredOptions = this.options = ['Current Location'];
    this.locSearch.valueChanges
        .map(val => val ? this.filterCities(val) : this.filteredOptions.slice())
        .subscribe();
    this.errorSub = this.locationService.errorList.subscribe(error => {
      this.errorDisp = typeof error !== 'undefined';
    });
  }

  setHeader() {
    if (this.location.city) {
      this.headerCityText = this.location.city;
      if (!['united states', 'us', 'usa', 'united states of america', 'ca', 'canada'].includes(this.location.country.toLowerCase())) {
        this.headerCityText += ', ' + this.location.country;
      } else if (this.location.state) {
        this.headerCityText += ', ' + this.location.state;
      }
    } else {
      this.headerCityText = 'Your Location';
    }
  }

  filterCities(val: string): string[] {
    if (val.length > 2) {
      this.locationService.findLocationByInputStream(val).subscribe(
        data => {
          this.filteredOptions = this.options.concat(data);
        }
      );
    } else {
      return this.options.slice();
    }
  }

  searchCity() {
    if (this.locSearch.value === 'Current Location') {
      this.locationService.getUserLocation();
    } else {
      this.locationService.setLocationByInput(this.locSearch.value);
    }
    this.removeErrors();
    this.tidyForm();
  }

  tidyForm(fullClean: boolean = false) {
    this.filteredOptions = this.options.slice();
    if (fullClean) {
      this.locSearch.patchValue('');
    }
  }

  removeErrors() {
    this.locationService.removeError();
  }

  ngOnDestroy() {
    if (this.locSub) {
      this.locSub.unsubscribe();
    }
    this.errorSub.unsubscribe();
  }

}
