import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { DarkSkyService } from '../../services/web.service';
import { LocationService, CurrentsService } from '../../services/local.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../../models/location.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
declare var Skycons: any;

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalCurrentsComponent implements OnInit, AfterViewInit, OnDestroy {

  currents: Object;
  currentSub: Subscription;
  currentsErrors: Subscription;
  @ViewChild('skycon') skyconCanvas: ElementRef;
  location: Location;
  locationSub: Subscription;
  header: string;
  errorSub: Subscription;
  errorDisp: string;
  subs: Array<Subscription>;
  snackBarOpen: boolean;
  unitDisplay: Object;
  units: string;

  constructor(private locationService: LocationService,
              private darkSkyService: DarkSkyService,
              private currentsService: CurrentsService,
              private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.locationService.location);
    this.units = this.currentsService.units;
    this.currents = this.currentsService.currents;
    this.currentSub = this.currentsService.getCurrents.subscribe(
      currents => {
        this.currents = currents;
        this.changeDetector.detectChanges();
        this.setSkycons();
      });
    this.currentsErrors = this.currentsService.errors.subscribe(
      errors => this.errorDisp = errors
    );
    this.locationSub = this.locationService.getLocation.subscribe(newLoc => {
      this.location = newLoc;
      this.currentsService.queryDarkSky(this.location.lat, this.location.lon);
      this.header = this.getHeader();
    });
    if (this.locationService.location.lat && this.locationService.location.lon) {
      if (new Date().getTime() - this.locationService.location.searchDate.getTime() > 3.6e6) {
        this.setLocation();
      } else {
        this.location = this.locationService.location;
      }
    } else {
      this.setLocation();
    }
    this.subs = [this.locationSub, this.errorSub, this.currentSub, this.currentsErrors];
    this.unitDisplay = this.updateDisplayUnits(this.units ? this.units : 'imperial');
    this.header = this.getHeader();
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
    if (this.skyconCanvas) { this.setSkycons(); }
    this.header = this.getHeader();
  }

  setLocation() {
    this.locationService.getUserLocation();
    this.errorSub = this.locationService.errorList.subscribe(
      errors => { this.errorDisp = errors; }
    );
  }

  getHeader() {
    return this.location ? `${this.getPrintableName(this.location)}` : '';
  }

  getPrintableName(location: Location) {
    if (location.state) {
      return `${location.city}, ${location.state}`;
    } else if (location.country) {
      return `${location.city}, ${location.country}`;
    } else if (location.city) {
      return this.location.city;
    } else {
      return 'Your Location';
    }
  }

  castDeg(bearing: string) {
    return this.currentsService.castDeg(bearing);
  }

  setSkycons(): void {
    const skycon = new Skycons({ 'color': '#0f3b65' });
    skycon.add(this.skyconCanvas.nativeElement, this.darkSkyService.getSkycon(this.currents['currents'].icon.toUpperCase()));
    skycon.play();
  }

  updateUnits() {
    this.unitDisplay = this.updateDisplayUnits(this.units);
    this.currentsService.castUnits(this.units);
  }

  updateDisplayUnits(units: string) {
    const possibleUnits = {
      'imperial' : {
        'temp': '\xB0F',
        'distance': 'mi',
        'wind': 'mph',
        'windGustThresh': 25,
        'windDiffThresh': 10,
        'tempDiffThresh': 5
      },
      'metric': {
        'temp': '\xB0C',
        'distance': 'km',
        'wind': 'km/h',
        'windGustThresh': 40,
        'windDiffThresh': 15,
        'tempDiffThresh': 3
      }
    };
    return possibleUnits[units];
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      if (sub) { sub.unsubscribe(); }
    }
  }

}
