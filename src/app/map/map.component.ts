import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { tileLayer, latLng, Layer, TileLayer, LatLng, Map, CRS } from 'leaflet';
import { Location } from '../models/location.model';
import { LocationService } from '../services/local.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  options: any;
  @Input() location: Location;
  @Input() national: boolean;
  @ViewChild('map') map: ElementRef;
  locationSub: Subscription;
  layersControl: Object;
  baseLayers: Object;
  overlays: Object;
  center: LatLng;
  header: string;
  american: boolean;
  mapboxToken: string;
  layers: Layer[];
  constantLayers: Layer[];

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocation.subscribe(
      newLoc => {
        this.location = newLoc;
        this.header = this.getHeader();
        this.center = latLng(this.location.lat, this.location.lon);
        this.american = this.checkAmerican();
      }
    );
    this.american = this.checkAmerican();
    this.mapboxToken = 'pk.eyJ1IjoibmF0aGFuaG5ldyIsImEiOiJjajYxZXJ2NHowdHk1MnFvZnFvcjE2aTZ3In0.uyW_Te8pYugmfTiKuVHvOA';
    if (this.national) {
      this.layers = [
      tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
          '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: 'abcd',
        maxZoom: 18
      }),
      tileLayer('https://api.mapbox.com/styles/v1/nathanhnew/cjctoyhyx19sc2rqzik284dqd/tiles/256/{z}/{x}/{y}?' +
        'access_token=pk.eyJ1IjoibmF0aGFuaG5ldyIsImEiOiJjajYxZXJ2NHowdHk1MnFvZnFvcjE2aTZ3In0.uyW_Te8pYugmfTiKuVHvOA', {
          attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> ',
          maxZoom: 18
        }),
      tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_rtma_time/MapServer/WMSServer', {
        layers: '17',
        format: 'image/png',
        transparent: true,
        opacity: 0.4
      }),
      tileLayer.wms('https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/WMSServer', {
        layers: '0',
        format: 'image/png',
        transparent: true,
        opacity: 1
      }),
      tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
        layers: '1',
        format: 'image/png',
        transparent: true,
        opacity: 0.8,
        attribution: 'Weather Data &copy; National Weather Service nowCOAST'
      }),
      tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png', {
        subdomains: 'abcd',
        maxZoom: 19
      })
    ];
    this.baseLayers = {
      'Satellite': this.layers[1],
      'Classic': this.layers[0]
    };
    this.overlays = {
      'Radar': this.layers[3],
      'Temps': this.layers[2],
      'Warnings': this.layers[4],
      'Cities': this.layers[5]
    };
  } else {
      this.layers = [
        tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
            '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
          subdomains: 'abcd',
          maxZoom: 18
        }),
        tileLayer('https://api.mapbox.com/styles/v1/nathanhnew/cjctoyhyx19sc2rqzik284dqd/tiles/256/{z}/{x}/{y}?' +
          'access_token=pk.eyJ1IjoibmF0aGFuaG5ldyIsImEiOiJjajYxZXJ2NHowdHk1MnFvZnFvcjE2aTZ3In0.uyW_Te8pYugmfTiKuVHvOA', {
            attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> ',
            maxZoom: 18
          }),
        tileLayer.wms('https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/WMSServer', {
          layers: '0',
          format: 'image/png',
          transparent: true,
          opacity: 1
        }),
        tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
          layers: '1',
          format: 'image/png',
          transparent: true,
          opacity: 0.8,
          attribution: 'Weather Data &copy; National Weather Service nowCOAST'
        }),
        tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png', {
          subdomains: 'abcd',
          maxZoom: 19
        })
      ];
      this.baseLayers = {
        'Satellite': this.layers[1],
        'Classic': this.layers[0]
      };
      this.overlays = {
        'Warnings': this.layers[2],
        'Radar': this.layers[3],
        'Cities': this.layers[4]
      };
  }

    this.layersControl = {
      'baseLayers': this.baseLayers,
      'overlays': this.overlays
    };
    this.options = {
      layers: this.layers,
      zoom: this.location ? 8 : 4,
      center: this.location ? latLng(this.location.lat, this.location.lon) : latLng(39.8283, -98.5795),
      crs: CRS.EPSG3857
    };
    this.header = this.getHeader();
  }

  onMapReady(map: Map) {
  }

  onMapClick(ev) {
    console.log(ev);
  }

  getHeader() {
    return this.location ? `${this.getPrintableName(this.location)} Radar` : 'Currently Nationally';
  }

  getPrintableName(location: Location) {
    if (location.state) {
      return `${location.city}, ${location.state}`;
    } else if (location.country) {
      return `${location.city}, ${location.country}`;
    } else if (location.city) {
      return this.location.city;
    } else {
      return 'Your Location';
    }
  }
  checkAmerican(): boolean {
    if (this.national || ['us', 'usa', 'united states', 'united states of america'].includes(this.location.country.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

}
