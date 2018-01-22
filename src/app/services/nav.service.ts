import { Injectable, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavLink } from '../models/link.model'

export class NavVisibilityService {
  sidebarIsVisible = false;
  sidebarVisibilityChange = new Subject<boolean>();


  constructor() {
    this.sidebarVisibilityChange.subscribe(val => {
      this.sidebarIsVisible = val;
    });
  }

  toggleSidebar() {
    this.sidebarVisibilityChange.next(!this.sidebarIsVisible)
  }

  showSidebar() {
    this.sidebarVisibilityChange.next(true);
  }

  hideSidebar() {
    this.sidebarVisibilityChange.next(false);
  }

}

export class NavCanShowService {
  windowSize: any;
  canShow: boolean;
  screenChange = new Subject<String>();
  windowSizes: String[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  constructor() {
    this.screenChange.subscribe(val => {
      this.canShow = this.windowSizes.indexOf(val) > 2;
    });
  }

  sizeWindow(size: number) {
    if (size < 600) {
      this.logVal('xs');
      return 'xs';
    }
    else if (size >= 600 && size < 960) {
      this.logVal('sm');
      return 'sm';
    }
    else if (size >= 960 && size < 1280) {
      this.logVal('md');
      return 'md';
    }
    else if (size >= 1280 && size < 1920) {
      this.logVal('lg');
      return 'lg';
    }
    else {
      this.logVal('xl');
      return 'xl';
    }
  }

  logVal(val: any, execute: boolean = false) {
    if (execute === true) {
      console.log(this.canShow)
    }
  }

}

export class NavLinkService {
  navLinks: NavLink[] = [
    {
      'label': 'Home',
      'path' : '/home',
    },
    {
      'label': 'Currents',
      'path' : '/currents',
    },
    {
      'label': 'Forecast',
      'path' : '/forecast',
    },
    {
      'label': 'Discussion',
      'path' : '/discussion',
    },
    {
      'label': 'Severe',
      'path' : '/severe',
    },
    {
      'label': 'Tropics',
      'path' : '/tropics',
    },
    {
      'label': 'About',
      'path' : '/about',
    },
  ]
}
