import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavVisibilityService, NavCanShowService, NavLinkService } from '../services/nav.service';
import { Subscription } from 'rxjs/Subscription';
import { NavLink } from '../models/link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showFullNav: boolean;
  showNavSub: Subscription;
  navLinks: NavLink[];

  constructor(private navVisService: NavVisibilityService, private navCanShowService: NavCanShowService, private navLinkService: NavLinkService) { }

  ngOnInit() {
    this.showFullNav = this.navCanShowService.canShow;
    this.showNavSub = this.navCanShowService.screenChange.subscribe(val => {
      this.showFullNav = this.navCanShowService.canShow;
    });
    this.navLinks = this.navLinkService.navLinks;
  }

  onClick() {
    this.navVisService.toggleSidebar();
  }

  ngOnDestroy() {
    this.showNavSub.unsubscribe();
  }


}
