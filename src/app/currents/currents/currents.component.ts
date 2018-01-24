import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/local.service';
import { Location } from '../../models/location.model';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-currents',
  templateUrl: './currents.component.html',
  styleUrls: ['./currents.component.css']
})
export class CurrentsComponent implements OnInit {

    constructor(private locationService: LocationService) { }

    ngOnInit() {
    }

}
