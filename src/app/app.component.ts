import { Component, ViewChild, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavVisibilityService, NavCanShowService, NavLinkService } from './services/nav.service';
import { NavLink } from './models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') sidenav;
  sidebarShowing = false;
  navSub: Subscription;
  showSub: Subscription;
  showFullNav: boolean;
  windowSize: String
  navLinks: NavLink[];

  constructor(private navVisService: NavVisibilityService, private navCanShowService: NavCanShowService, private navLinkService: NavLinkService) { }

  ngOnInit() {
    this.showSub = this.navCanShowService.screenChange.subscribe(val => {
      this.showFullNav = this.navCanShowService.canShow;
    });
    this.navCanShowService.canShow = this.navCanShowService.windowSizes.indexOf(this.navCanShowService.sizeWindow(window.innerWidth)) > 2;
    this.showFullNav = this.navCanShowService.canShow;
    this.navSub = this.navVisService.sidebarVisibilityChange.subscribe(val => {
      if (val === true) {
        this.sidenav.open();
        this.sidebarShowing = true;
      }
      else {
        this.sidenav.close();
        this.sidebarShowing = false;
      }
    });
    this.navLinks = this.navLinkService.navLinks;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowSize = this.navCanShowService.sizeWindow(window.innerWidth);
    this.navCanShowService.screenChange.next(this.windowSize);
  }

  closeSidenav() {
    this.navVisService.hideSidebar();
  }

  ngOnDestroy() {
    this.navSub.unsubscribe();
    this.showSub.unsubscribe();
  }
}
