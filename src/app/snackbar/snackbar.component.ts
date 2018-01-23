import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-alert-snackbar',
  template: '{{ alertMessage }} Close',
  styleUrls: ['./snackbar.component.css']
})
export class AlertSnackBarComponent implements OnInit {

  expires: moment.Moment;
  cityString: string;
  alertType: string;
  alertMessage: string;

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any ) { }

  ngOnInit() {
    this.expires = moment(this.data.alerts[0].expires * 1000);
    this.cityString = this.data.location.state ? `${this.data.location.city}, ${this.data.location.state}` : this.data.location.city;
    this.alertMessage = `${this.data.alerts[0].title} for ${this.cityString} Until ${this.expires.format('h:mma MMM Do')}`;
  }

}
