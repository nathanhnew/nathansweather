import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkSkyService } from '../../services/web.service';
import { LocationService } from '../../services/local.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../../models/location.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalCurrentsComponent implements OnInit, OnDestroy {

  currents: any;
  location: Location;
  dsSub: Subscription;

  constructor(private locationService: LocationService, private darkSkyService: DarkSkyService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.location = this.locationService.location;
    this.locationService.getLocation.subscribe(newLoc => {
      this.location = newLoc;
      if(this.dsSub){this.dsSub.unsubscribe()};
      this.dsSub = this.queryDarkSky(this.location.lat, this.location.lon);
    });
  }

  queryDarkSky(lat: number, lon: number) {
    return this.darkSkyService.getCurrents(lat, lon).subscribe(
        data => {
          this.currents = data;
          if ('alerts' in this.currents) {
            this.snackBar.open(`${this.currents.alerts[0].title} for ${this.location.city}. Details...`, 'Close');
          }
          console.log(this.currents);
      });
  }

  ngOnDestroy() {
    this.dsSub.unsubscribe();
  }

}
