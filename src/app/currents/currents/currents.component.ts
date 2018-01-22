import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/local.service';
import { Location } from '../../models/location.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-currents',
  templateUrl: './currents.component.html',
  styleUrls: ['./currents.component.css']
})
export class CurrentsComponent implements OnInit {

    location: Location;
    errorDisp: string;
    errorSub: Subscription;
    locationSub: Subscription;
    loc: boolean = false;

    constructor(private locationService: LocationService) { }

    ngOnInit() {
      this.locationSub = this.locationService.getLocation.subscribe(loc => {
        this.location = loc;
        console.log(this.location);
      });
      if(this.locationService.location.lat && this.locationService.location.lon) {
        if(new Date().getTime() - this.locationService.location.searchDate.getTime() > 3.6e6) {
          this.setLocation();
        }
        else {
          this.location = this.locationService.location;
        }
      }
      else {
        this.setLocation();
      }
    }

    setLocation() {
      this.locationService.getUserLocation();
      this.errorSub = this.locationService.errorList.subscribe(
        errors => {this.errorDisp = errors;}
      );
    }

    ngOnDestroy() {
      if(this.errorSub) {
        this.errorSub.unsubscribe();
      }
    }

}
