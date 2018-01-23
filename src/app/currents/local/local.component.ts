import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkSkyService } from '../../services/web.service';
import { LocationService } from '../../services/local.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../../models/location.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { AlertSnackBarComponent } from '../../snackbar/snackbar.component';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalCurrentsComponent implements OnInit, OnDestroy {

  currents: any;
  location: Location;
  locationSub: Subscription;
  dsSub: Subscription;
  errorSub: Subscription;
  errorDisp: string;
  subs: Array<Subscription>;
  snackBarOpen: boolean;
  snackBarRef: MatSnackBarRef<AlertSnackBarComponent>;

  constructor(private locationService: LocationService, private darkSkyService: DarkSkyService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    if (this.locationService.location.lat && this.locationService.location.lon) {
      if (new Date().getTime() - this.locationService.location.searchDate.getTime() > 3.6e6) {
        this.setLocation();
      } else {
        this.location = this.locationService.location;
      }
    } else {
      this.setLocation();
    }
    this.location = this.locationService.location;
    this.locationSub = this.locationService.getLocation.subscribe(newLoc => {
      this.location = newLoc;
      if (this.dsSub) {this.dsSub.unsubscribe(); }
      this.dsSub = this.queryDarkSky(this.location.lat, this.location.lon);
    });
    this.subs = [this.dsSub, this.locationSub, this.errorSub];
  }

  queryDarkSky(lat: number, lon: number) {
    return this.darkSkyService.getCurrents(lat, lon).subscribe(
        data => {
          this.currents = data;
          if ('alerts' in this.currents) {
            const snackBarData = {'alerts': this.currents.alerts, 'location': this.location};
            const alertType = this.currents.alerts[0].severity + '-snackbar';
            this.snackBarRef = this.snackBar.openFromComponent( AlertSnackBarComponent, {
              data: snackBarData,
              panelClass: alertType,
              duration: 20000;
            });
            this.snackBarOpen = true;
          } else {
            if (this.snackBarOpen) {
              this.snackBarRef.dismiss();
              this.snackBarOpen = false;
            }
          }
          console.log(this.currents);
      });
  }

  setLocation() {
    this.locationService.getUserLocation();
    this.errorSub = this.locationService.errorList.subscribe(
      errors => { this.errorDisp = errors; }
    );
  }


  ngOnDestroy() {
    for (const sub of this.subs) {
      if (sub) { sub.unsubscribe(); }
    }
  }

}
