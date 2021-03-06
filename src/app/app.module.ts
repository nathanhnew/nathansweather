// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
// Router
import { AppRouter } from './app.router';
// Material imports
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
// Leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// Services
import { NavVisibilityService, NavCanShowService, NavLinkService } from './services/nav.service';
import { LocationService, IpGeoService, OSMGeocodeService, GoogleService, CurrentsService } from './services/local.service';
import { DarkSkyService } from './services/web.service';
// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { HeaderComponent } from './header/header.component';
import { LocalCurrentsComponent } from './currents/local/local.component';
import { NationalCurrentsComponent } from './currents/national/national.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { CurrentsComponent } from './currents/currents/currents.component';
import { AlertSnackBarComponent } from './snackbar/snackbar.component';
import { LoaderComponent } from './loader/loader.component';
import { MapComponent } from './map/map.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ImageModalComponent,
    HeaderComponent,
    LocalCurrentsComponent,
    NationalCurrentsComponent,
    SearchLocationComponent,
    CurrentsComponent,
    AlertSnackBarComponent,
    LoaderComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRouter,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    LeafletModule.forRoot(),
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  entryComponents: [
    ImageModalComponent,
    AlertSnackBarComponent,
  ],
  providers: [NavVisibilityService,
              NavCanShowService,
              NavLinkService,
              LocationService,
              IpGeoService,
              OSMGeocodeService,
              GoogleService,
              DarkSkyService,
              CurrentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
