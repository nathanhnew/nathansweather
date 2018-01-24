import { Component, OnInit, AfterContentChecked, Input, OnDestroy } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LocationService } from '../services/local.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../models/location.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit, AfterContentChecked, OnDestroy {

  links: Array<any>;
  currentRoute: string;
  locSearch: FormControl;
  location: Location;
  locSub: Subscription;
  errorSub: Subscription;
  options: string[];
  filteredOptions: string[];
  errorDisp: boolean;
  subs: Subscription[];

  @Input('host') host: string;

  constructor(private locationService: LocationService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentRoute = this.router.routerState.snapshot.url.split('/').slice(-1)[0];
    this.links = [{ 'label': 'Local', 'path': 'local' }, { 'label': 'National', 'path': 'national' }];
    this.location = this.locationService.location;
    this.locSub = this.locationService.getLocation.subscribe(city => {
      this.location = this.locationService.location;
    });
    this.locSearch = new FormControl();
    this.filteredOptions = this.options = ['Current Location'];
    this.locSearch.valueChanges
        .map(val => val ? this.filterCities(val) : this.filteredOptions.slice())
        .subscribe();
    this.errorSub = this.locationService.errorList.subscribe(error => {
      this.errorDisp = typeof error !== 'undefined';
    });
    this.subs = [this.locSub, this.errorSub];
  }

  ngAfterContentChecked() {
    this.currentRoute = this.router.routerState.snapshot.url.split('/').slice(-1)[0];
  }

  tabClick(tab: string) {
    this.currentRoute = tab.toLowerCase();
  }

  filterCities(val: string): string[] {
    if (val.length > 2 && val !== 'Current Location') {
      this.locationService.findLocationByInputStream(val).subscribe(
        data => {
          this.filteredOptions = this.options.concat(data);
        }
      );
    } else {
      return this.options.slice();
    }
  }

  searchCity(): void {
    if (this.locSearch.value === 'Current Location') {
      this.locationService.getUserLocation();
    } else if (!this.locSearch.value) {
      return;
    } else {
      this.locationService.setLocationByInput(this.locSearch.value);
    }
    this.removeErrors();
    this.tidyForm();
  }

  tidyForm(fullClean: boolean = false, event?: any): void {
    if (event && event.target.nodeName.toLowerCase() === 'mat-icon') {
      return;
    } else {
      this.filteredOptions = this.options.slice();
      if (fullClean) {
        this.locSearch.patchValue('');
      }
    }
  }

  removeErrors() {
    this.locationService.removeError();
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      if (sub) { sub.unsubscribe(); }
    }
  }

}
