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
  dsSub: Subscription;
  snackBarOpen: boolean;
  snackBarRef: MatSnackBarRef<any>;

  constructor(private locationService: LocationService, private darkSkyService: DarkSkyService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.location = this.locationService.location;
    this.locationService.getLocation.subscribe(newLoc => {
      this.location = newLoc;
      if (this.dsSub) {this.dsSub.unsubscribe(); }
      this.dsSub = this.queryDarkSky(this.location.lat, this.location.lon);
    });
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
              panelClass: alertType
            });
          } else {
            if (this.snackBarOpen) {
              this.snackBarRef.dismiss();
              this.snackBarOpen = false;
            }
          }
          console.log(this.currents);
      });
  }

  ngOnDestroy() {
    if (this.dsSub) { this.dsSub.unsubscribe(); }
  }

}
