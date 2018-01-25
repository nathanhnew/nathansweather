webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\nmat-sidenav-container {\r\n  height: 93%;\r\n  width: 100%;\r\n}\r\n.page-content {\r\n  position: relative;\r\n  overflow-y: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n  <header>\r\n    <app-header fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxFlex></app-header>\r\n  </header>\r\n  <mat-sidenav-container (backdropClick)=\"closeSidenav()\">\r\n    <mat-sidenav position=\"end\" class=\"nav-container\" #sidenav (keydown.escape)=\"closeSidenav()\" disableClose *ngIf=\"!showFullNav\">\r\n      <nav fxFlex fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <button mat-button\r\n                *ngFor=\"let link of navLinks\"\r\n                [routerLink]=\"link.path\"\r\n                routerLinkActive #rla=\"routerLinkActive\"\r\n                (click)=\"closeSidenav()\">\r\n          {{link.label}}\r\n        </button>\r\n      </nav>\r\n    </mat-sidenav>\r\n    <div class=\"page-content\">\r\n    <content>\r\n      <router-outlet></router-outlet>\r\n    </content>\r\n    <footer>\r\n      <app-footer></app-footer>\r\n    </footer>\r\n    </div>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_service__ = __webpack_require__("../../../../../src/app/services/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(navVisService, navCanShowService, navLinkService) {
        this.navVisService = navVisService;
        this.navCanShowService = navCanShowService;
        this.navLinkService = navLinkService;
        this.title = 'app';
        this.sidebarShowing = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSub = this.navCanShowService.screenChange.subscribe(function (val) {
            _this.showFullNav = _this.navCanShowService.canShow;
        });
        this.navCanShowService.canShow = this.navCanShowService.windowSizes.indexOf(this.navCanShowService.sizeWindow(window.innerWidth)) > 2;
        this.showFullNav = this.navCanShowService.canShow;
        this.navSub = this.navVisService.sidebarVisibilityChange.subscribe(function (val) {
            if (val === true) {
                _this.sidenav.open();
                _this.sidebarShowing = true;
            }
            else {
                _this.sidenav.close();
                _this.sidebarShowing = false;
            }
        });
        this.navLinks = this.navLinkService.navLinks;
    };
    AppComponent.prototype.onResize = function (event) {
        this.windowSize = this.navCanShowService.sizeWindow(window.innerWidth);
        this.navCanShowService.screenChange.next(this.windowSize);
    };
    AppComponent.prototype.closeSidenav = function () {
        this.navVisService.hideSidebar();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.navSub.unsubscribe();
        this.showSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_nav_service__["c" /* NavVisibilityService */], __WEBPACK_IMPORTED_MODULE_1__services_nav_service__["a" /* NavCanShowService */], __WEBPACK_IMPORTED_MODULE_1__services_nav_service__["b" /* NavLinkService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_nav_service__ = __webpack_require__("../../../../../src/app/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__image_modal_image_modal_component__ = __webpack_require__("../../../../../src/app/image-modal/image-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__currents_local_local_component__ = __webpack_require__("../../../../../src/app/currents/local/local.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__currents_national_national_component__ = __webpack_require__("../../../../../src/app/currents/national/national.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__search_location_search_location_component__ = __webpack_require__("../../../../../src/app/search-location/search-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__currents_currents_currents_component__ = __webpack_require__("../../../../../src/app/currents/currents/currents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__loader_loader_component__ = __webpack_require__("../../../../../src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular imports






// Router

// Material imports













// Leaflet

// Services



// Components












var AppModule = /** @class */ (function () {
    function AppModule(matIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_25__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__image_modal_image_modal_component__["a" /* ImageModalComponent */],
                __WEBPACK_IMPORTED_MODULE_28__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__currents_local_local_component__["a" /* LocalCurrentsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__currents_national_national_component__["a" /* NationalCurrentsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__search_location_search_location_component__["a" /* SearchLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__currents_currents_currents_component__["a" /* CurrentsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__snackbar_snackbar_component__["a" /* AlertSnackBarComponent */],
                __WEBPACK_IMPORTED_MODULE_34__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_35__map_map_component__["a" /* MapComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_router__["a" /* AppRouter */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_snack_bar__["c" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_select__["a" /* MatSelectModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_27__image_modal_image_modal_component__["a" /* ImageModalComponent */],
                __WEBPACK_IMPORTED_MODULE_33__snackbar_snackbar_component__["a" /* AlertSnackBarComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__services_nav_service__["c" /* NavVisibilityService */],
                __WEBPACK_IMPORTED_MODULE_21__services_nav_service__["a" /* NavCanShowService */],
                __WEBPACK_IMPORTED_MODULE_21__services_nav_service__["b" /* NavLinkService */],
                __WEBPACK_IMPORTED_MODULE_22__services_local_service__["d" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_22__services_local_service__["c" /* IpGeoService */],
                __WEBPACK_IMPORTED_MODULE_22__services_local_service__["e" /* OSMGeocodeService */],
                __WEBPACK_IMPORTED_MODULE_22__services_local_service__["b" /* GoogleService */],
                __WEBPACK_IMPORTED_MODULE_23__services_web_service__["a" /* DarkSkyService */],
                __WEBPACK_IMPORTED_MODULE_22__services_local_service__["a" /* CurrentsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["b" /* MatIconRegistry */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currents_currents_currents_component__ = __webpack_require__("../../../../../src/app/currents/currents/currents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__currents_local_local_component__ = __webpack_require__("../../../../../src/app/currents/local/local.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currents_national_national_component__ = __webpack_require__("../../../../../src/app/currents/national/national.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'currents', component: __WEBPACK_IMPORTED_MODULE_3__currents_currents_currents_component__["a" /* CurrentsComponent */], children: [
            { path: '', redirectTo: 'local', pathMatch: 'full' },
            { path: 'local', component: __WEBPACK_IMPORTED_MODULE_4__currents_local_local_component__["a" /* LocalCurrentsComponent */] },
            { path: 'national', component: __WEBPACK_IMPORTED_MODULE_5__currents_national_national_component__["a" /* NationalCurrentsComponent */] }
        ] }
];
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRouter);
    return AppRouter;
}());



/***/ }),

/***/ "../../../../../src/app/currents/currents/currents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currents/currents/currents.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n<div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxFlex.xl=\"60\" fxFlex.lt-xl=\"80\" fxFlex.lt-md>\n  <!-- add tab for local/national selection -->\n  <app-search-location host=\"currents\"></app-search-location>\n  <router-outlet fxLayout=\"column\" fxLayoutAlign=\"start stretch\"></router-outlet>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/currents/currents/currents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentsComponent = /** @class */ (function () {
    function CurrentsComponent(locationService) {
        this.locationService = locationService;
    }
    CurrentsComponent.prototype.ngOnInit = function () {
    };
    CurrentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-currents',
            template: __webpack_require__("../../../../../src/app/currents/currents/currents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currents/currents/currents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_service__["d" /* LocationService */]])
    ], CurrentsComponent);
    return CurrentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/currents/local/local.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    font-size: 3em;\r\n}\r\nh3 {\r\n    font-size: 2em;\r\n}\r\nh4 {\r\n    font-size: 1.25em;\r\n}\r\n@media (max-width: 820px) {\r\n    h1 {\r\n        font-size: 2em;\r\n    }\r\n    h3 {\r\n        font-size: 1em;\r\n    }\r\n    h4 {\r\n        font-size: 1em;\r\n    }\r\n}\r\n.cold {\r\n    color: rgb(0, 0, 207);\r\n}\r\n.hot {\r\n    color: rgb(226, 53, 0);\r\n}\r\n#liveCurrents {\r\n    padding-bottom: 5px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currents/local/local.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"!currents && !errorDisp\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Looking Outside\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <app-loader fxLayoutAlign=\"center center\"></app-loader>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div *ngIf=\"currents && !errorDisp\">\r\n  <mat-card id=\"liveCurrents\">\r\n    <mat-card-header fxLayout.gt-sm=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign.gt-sm=\"space-between center\" fxLayoutAlign.lt-md=\"center stretch\">\r\n      <mat-card-title>\r\n        Currently in {{ header }}\r\n      </mat-card-title>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Units\" [(value)]=\"units\" (selectionChange)=\"updateUnits()\">\r\n          <mat-option value=\"imperial\">Imperial (&deg;F)</mat-option>\r\n          <mat-option value=\"metric\">Metric (&deg;C)</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-card-header>\r\n    <hr>\r\n    <mat-card-content>\r\n      <div class=\"large\" fxLayout.gt=\"column\">\r\n        <div class=\"upper-container\" fxLayout.gt-md=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"center center\">\r\n          <canvas #skycon height=\"200px\" width=\"200px\"></canvas>\r\n          <div class=\"upper-content\" fxLayout=\"column\" fxLayoutAlign.gt-md=\"center start\" fxLayoutAlign.lt-lg=\"center center\">\r\n            <h1>{{ currents.currents.summary }}</h1>\r\n            <h3>Temperature: {{ currents.currents.temperature}}{{ unitDisplay.temp }}</h3>\r\n            <h4 [ngClass]=\"{'cold': currents.currents.apparentTemperature - currents.currents.temperature < -unitDisplay.tempDiffThresh,\r\n                          'hot': currents.currents.apparentTemperature - currents.currents.temperature > unitDisplay.tempDiffThresh}\">\r\n              Feels Like: {{ currents.currents.apparentTemperature}}{{ unitDisplay.temp }}\r\n            </h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"lower-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n          <div class=\"left-side\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <h4>Wind: {{ castDeg(currents.currents.windBearing )}} {{ currents.currents.windSpeed }} {{ unitDisplay.wind }}\r\n              <span *ngIf=\"currents.currents.windGust > unitDisplay.windGustThresh || currents.currents.windGust - currents.currents.windSpeed > unitDisplay.windDiffThresh\">G {{ currents.currents.windGust }}</span>\r\n            </h4>\r\n            <h4>Cloud Cover: {{currents.currents.cloudCover * 100}}%</h4>\r\n            <h4>Visibility: {{currents.currents.visibility}} {{ unitDisplay.distance }}</h4>\r\n          </div>\r\n          <div class=\"right-side\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <h4>Dewpoint: {{currents.currents.dewPoint}}{{ unitDisplay.temp }}</h4>\r\n            <h4>Humidity: {{currents.currents.humidity}}%</h4>\r\n            <h4>Pressure: {{currents.currents.pressure}} mb</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p>Current Conditions\r\n        <a href=\"https://darksky.net/poweredby/\">Powered by DarkSky</a>\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <app-map [location]=\"location\"></app-map>\r\n</div>\r\n<mat-card *ngIf=\"errorDisp\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Error:\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>{{errorDisp}}</p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/currents/local/local.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalCurrentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalCurrentsComponent = /** @class */ (function () {
    function LocalCurrentsComponent(locationService, darkSkyService, currentsService, changeDetector) {
        this.locationService = locationService;
        this.darkSkyService = darkSkyService;
        this.currentsService = currentsService;
        this.changeDetector = changeDetector;
    }
    LocalCurrentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.locationService.location);
        this.units = this.currentsService.units;
        this.currents = this.currentsService.currents;
        this.currentSub = this.currentsService.getCurrents.subscribe(function (currents) {
            _this.currents = currents;
            _this.changeDetector.detectChanges();
            _this.setSkycons();
        });
        this.currentsErrors = this.currentsService.errors.subscribe(function (errors) { return _this.errorDisp = errors; });
        this.locationSub = this.locationService.getLocation.subscribe(function (newLoc) {
            _this.location = newLoc;
            _this.currentsService.queryDarkSky(_this.location.lat, _this.location.lon);
            _this.header = _this.getHeader();
        });
        if (this.locationService.location.lat && this.locationService.location.lon) {
            if (new Date().getTime() - this.locationService.location.searchDate.getTime() > 3.6e6) {
                this.setLocation();
            }
            else {
                this.location = this.locationService.location;
            }
        }
        else {
            this.setLocation();
        }
        this.subs = [this.locationSub, this.errorSub, this.currentSub, this.currentsErrors];
        this.unitDisplay = this.updateDisplayUnits(this.units ? this.units : 'imperial');
        this.header = this.getHeader();
    };
    LocalCurrentsComponent.prototype.ngAfterViewInit = function () {
        this.changeDetector.detectChanges();
        if (this.skyconCanvas) {
            this.setSkycons();
        }
        this.header = this.getHeader();
    };
    LocalCurrentsComponent.prototype.setLocation = function () {
        var _this = this;
        this.locationService.getUserLocation();
        this.errorSub = this.locationService.errorList.subscribe(function (errors) { _this.errorDisp = errors; });
    };
    LocalCurrentsComponent.prototype.getHeader = function () {
        return this.location ? "" + this.getPrintableName(this.location) : '';
    };
    LocalCurrentsComponent.prototype.getPrintableName = function (location) {
        if (location.state) {
            return location.city + ", " + location.state;
        }
        else if (location.country) {
            return location.city + ", " + location.country;
        }
        else if (location.city) {
            return this.location.city;
        }
        else {
            return 'Your Location';
        }
    };
    LocalCurrentsComponent.prototype.castDeg = function (bearing) {
        return this.currentsService.castDeg(bearing);
    };
    LocalCurrentsComponent.prototype.setSkycons = function () {
        var skycon = new Skycons({ 'color': '#0f3b65' });
        skycon.add(this.skyconCanvas.nativeElement, this.darkSkyService.getSkycon(this.currents['currents'].icon.toUpperCase()));
        skycon.play();
    };
    LocalCurrentsComponent.prototype.updateUnits = function () {
        this.unitDisplay = this.updateDisplayUnits(this.units);
        this.currentsService.castUnits(this.units);
    };
    LocalCurrentsComponent.prototype.updateDisplayUnits = function (units) {
        var possibleUnits = {
            'imperial': {
                'temp': '\xB0F',
                'distance': 'mi',
                'wind': 'mph',
                'windGustThresh': 25,
                'windDiffThresh': 10,
                'tempDiffThresh': 5
            },
            'metric': {
                'temp': '\xB0C',
                'distance': 'km',
                'wind': 'km/h',
                'windGustThresh': 40,
                'windDiffThresh': 15,
                'tempDiffThresh': 3
            }
        };
        return possibleUnits[units];
    };
    LocalCurrentsComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub) {
                sub.unsubscribe();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('skycon'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LocalCurrentsComponent.prototype, "skyconCanvas", void 0);
    LocalCurrentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-local',
            template: __webpack_require__("../../../../../src/app/currents/local/local.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currents/local/local.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_local_service__["d" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_web_service__["a" /* DarkSkyService */],
            __WEBPACK_IMPORTED_MODULE_2__services_local_service__["a" /* CurrentsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], LocalCurrentsComponent);
    return LocalCurrentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/currents/national/national.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currents/national/national.component.html":
/***/ (function(module, exports) {

module.exports = "<app-map [national]=\"true\"></app-map>"

/***/ }),

/***/ "../../../../../src/app/currents/national/national.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationalCurrentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NationalCurrentsComponent = /** @class */ (function () {
    function NationalCurrentsComponent() {
    }
    NationalCurrentsComponent.prototype.ngOnInit = function () {
    };
    NationalCurrentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-national',
            template: __webpack_require__("../../../../../src/app/currents/national/national.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currents/national/national.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NationalCurrentsComponent);
    return NationalCurrentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footerheart{\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"space-even center\">\n  <p fxFlex.lt-md fxLayoutAlign=\"center center\">Designed with &nbsp;\n    <mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-heart\" class=\"footerheart\"></mat-icon> by &nbsp;\n    <a href=\"https://github.com/nathanhnew\" target=\"blank\">Nathan New</a></p>\n  <p fxFlex.lt-md fxLayoutAlign=\"center center\"class=\"col-sm-12 col-md-6\" style=\"justify-content-end; text-align:right\">&copy; {{ year }} All Rights Reserved</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menuButton {\r\n  font-size: 2em;\r\n  vertical-align: middle;\r\n}\r\n\r\n.brand {\r\n  height: 70%;\r\n  padding-left: 1.25em;\r\n  vertical-align: middle;\r\n}\r\n\r\nnav {\r\n  padding-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<a fxLayoutAlign=\"start center\" routerLink=\"home\">\r\n  <img src=\"assets/img/logo.png\" alt=\"NathansWeather.com\" style=\"cursor:pointer\" class=\"brand\">\r\n</a>\r\n<nav mat-tab-nav-bar *ngIf=\"showFullNav\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n  <a mat-tab-link\r\n     *ngFor=\"let link of navLinks\"\r\n     [routerLink]=\"link.path\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]='rla.isActive'>\r\n  {{link.label}}\r\n  </a>\r\n</nav>\r\n<button fxFlex=\"5\" mat-button color=\"primary\" (click)=\"onClick()\" fxLayoutAlign=\"center center\" *ngIf=\"!showFullNav\">\r\n  <mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-bars\" class=\"menuButton\"></mat-icon>\r\n</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_service__ = __webpack_require__("../../../../../src/app/services/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navVisService, navCanShowService, navLinkService) {
        this.navVisService = navVisService;
        this.navCanShowService = navCanShowService;
        this.navLinkService = navLinkService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showFullNav = this.navCanShowService.canShow;
        this.showNavSub = this.navCanShowService.screenChange.subscribe(function (val) {
            _this.showFullNav = _this.navCanShowService.canShow;
        });
        this.navLinks = this.navLinkService.navLinks;
    };
    HeaderComponent.prototype.onClick = function () {
        this.navVisService.toggleSidebar();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.showNavSub.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_nav_service__["c" /* NavVisibilityService */], __WEBPACK_IMPORTED_MODULE_1__services_nav_service__["a" /* NavCanShowService */], __WEBPACK_IMPORTED_MODULE_1__services_nav_service__["b" /* NavLinkService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width:768px) {\r\n  .banner {\r\n    height: 100% !important;\r\n  }\r\n}\r\n.banner{\r\n  height: 400px;\r\n  background-image: url('/assets/img/sunflare.jpg');\r\n  background-position: center;\r\n  background-size:  100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.overlay {\r\n  background-color: rgba(65,199,243,0.7);\r\n  width: 60%;\r\n  padding: 15px;\r\n}\r\n.container {\r\n  padding-bottom: 10px;\r\n}\r\n.twitterfeed{\r\n  margin-left: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\" fxLayout=\"row\">\r\n  <div class=\"overlay\">\r\n    <h1>Welcome!</h1>\r\n    <p>Welcome to the renovated NathansWeather.com! This page is now powered by Google's Angular framework giving it much more power and speed than before. I'm hard at work adding new features, and making everything better than before! However, this is a\r\n      process, so please excuse some dust while I work on renovations and housekeeping.</p>\r\n  </div>\r\n</div>\r\n<div class=\"container\" fxLayoutAlign=\"center\">\r\n  <div fxFlex.xl=\"60\" fxFlex.lt-xl=\"80\" fxFlex.lt-md>\r\n    <div class=\"main\" fxFlex=\"70\" fxFlex.lt-md>\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Upcoming Updates\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <hr>\r\n        <mat-card-content>\r\n          <p>Some things I'm working on to make this a great weather site.</p>\r\n          <ul>\r\n            <li>Add an automated forecast tab to pull NWS data (I'll still be doing hand forecasts though)</li>\r\n            <li>Add a severe weather climatology tab</li>\r\n            <li>Add more fun features to the site!</li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Completed Updates\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <hr>\r\n        <mat-card-content>\r\n          <ul>\r\n            <li>Make images clickable to see a larger size</li>\r\n            <li>Make radar a movable map</li>\r\n            <li>Add clickable in-depth forecasts in the local tab</li>\r\n          </ul>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            WX Photos\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <hr>\r\n        <mat-card-content>\r\n          <p>Here is a random collection of weather photos that I've taken</p>\r\n          <mat-grid-list cols=\"3\" cols.lt-md=\"2\">\r\n            <mat-grid-tile *ngFor=\"let photo of images, let i=index\">\r\n              <img class=\"img-thumbnail\" src=\"{{photo.thumb}}\" alt=\"{{photo.alt}}\" (click)=\"openDialog(i)\" style=\"cursor:pointer;max-width:180px\">\r\n            </mat-grid-tile>\r\n          </mat-grid-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <mat-card class=\"twitterfeed\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxHide.lt-md>\r\n      <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center end\" fxFlex=\"10\">\r\n        <mat-card-title>\r\n          My Twitter Feed\r\n        </mat-card-title>\r\n          <a href=\"https://twitter.com/theNewWx\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @theNewWx</a>\r\n      </mat-card-header>\r\n      <hr>\r\n      <mat-card-content fxLayout=\"column\" fxFlex>\r\n        <div class=\"timeline\">\r\n          <a class=\"twitter-timeline\" href=\"https://twitter.com/theNewWX\" data-height=\"600px\">Tweets by theNewWX</a>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_modal_image_modal_component__ = __webpack_require__("../../../../../src/app/image-modal/image-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
        this.images = [
            {
                'title': 'Snow Showers Behind Delicate Arch',
                'thumb': 'assets/img/collection/arches_thumb.jpg',
                'alt': 'Arches NP'
            },
            {
                'title': 'Clearing Storms Above El Morro, San Juan, PR',
                'thumb': 'assets/img/collection/el_morro_thumb.jpg',
                'alt': 'El Morro'
            },
            {
                'title': 'Autumn Falls on Central Park',
                'thumb': 'assets/img/collection/nyc_fall_thumb.jpg',
                'alt': 'Fall in NYC'
            },
            {
                'title': 'Sunset in the Streets of Old San Juan',
                'thumb': 'assets/img/collection/sunset_thumb.jpg',
                'alt': 'San Juan, PR'
            },
            {
                'title': 'Darkness Shrouds Monument Valley',
                'thumb': 'assets/img/collection/night_thumb.jpg',
                'alt': 'Monument Valley'
            },
            {
                'title': 'Clouds Move Into El Yunque',
                'thumb': 'assets/img/collection/tropics_thumb.jpg',
                'alt': 'El Yunque National Forest'
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    HomeComponent.prototype.openDialog = function (index) {
        var img = this.images.slice()[index];
        img['url'] = img.thumb.replace('_thumb', '');
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__image_modal_image_modal_component__["a" /* ImageModalComponent */], {
            data: img
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-modal/image-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-modal/image-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-toolbar fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n    <h1 matDialogTitle fxFlex>\r\n      {{data.title ? data.title : data.header}}\r\n    </h1>\r\n    <button matDialogClose mat-button color=\"warn\" type=\"button\" aria-label=\"Close\" style=\"margin: auto\">\r\n      &times;\r\n    </button>\r\n  </mat-toolbar>\r\n  <hr>\r\n  <div matDialogContent fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\">\r\n    <div style=\"border-box\">\r\n      <img src=\"{{data.url}}\" alt=\"{{data.alt ? data.alt : data.title}}\" width=\"100%\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/image-modal/image-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImageModalComponent = /** @class */ (function () {
    function ImageModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ImageModalComponent.prototype.ngOnInit = function () {
    };
    ImageModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-modal',
            template: __webpack_require__("../../../../../src/app/image-modal/image-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-modal/image-modal.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object])
    ], ImageModalComponent);
    return ImageModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader {\r\n  position: relative;\r\n  /* top: 50%;\r\n  left: 50%; */\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  -webkit-perspective: 800px;\r\n          perspective: 800px;\r\n}\r\n\r\n.inner {\r\n  position: absolute;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.inner.one {\r\n  left: 0%;\r\n  top: 0%;\r\n  -webkit-animation: rotate-one 1s linear infinite;\r\n          animation: rotate-one 1s linear infinite;\r\n  border-bottom: 8px solid rgb(15, 59, 101);\r\n\r\n}\r\n\r\n.inner.two {\r\n  right: 0%;\r\n  top: 0%;\r\n  -webkit-animation: rotate-two 1s linear infinite;\r\n          animation: rotate-two 1s linear infinite;\r\n  border-right: 8px solid rgb(15, 59, 101);\r\n\r\n}\r\n\r\n.inner.three {\r\n  right: 0%;\r\n  bottom: 0%;\r\n  -webkit-animation: rotate-three 1s linear infinite;\r\n          animation: rotate-three 1s linear infinite;\r\n  border-top: 8px solid rgb(15, 59, 101);\r\n\r\n}\r\n\r\n@-webkit-keyframes rotate-one {\r\n  0% {\r\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\r\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\r\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-one {\r\n  0% {\r\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\r\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\r\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes rotate-two {\r\n  0% {\r\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\r\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\r\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-two {\r\n  0% {\r\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\r\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\r\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes rotate-three {\r\n  0% {\r\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\r\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\r\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate-three {\r\n  0% {\r\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\r\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\r\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\n  <div class=\"inner one\"></div>\n  <div class=\"inner two\"></div>\n  <div class=\"inner three\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("../../../../../src/app/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\r\n    height: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" *ngIf=\"american\">\n  <mat-card-header>\n    <mat-card-title>\n      {{ this.header }} Radar\n    </mat-card-title>\n  </mat-card-header>\n  <hr>\n  <mat-card-content>\n    <div leaflet #map\n         [leafletCenter]=\"center\"\n         [leafletOptions]=\"options\"\n         [leafletLayers]=\"layers\"\n         [leafletLayersControl]=\"layersControl\"\n         style=\"height: 500px;\"></div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_location_model__ = __webpack_require__("../../../../../src/app/models/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(locationService) {
        this.locationService = locationService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocation.subscribe(function (newLoc) {
            _this.location = newLoc;
            _this.header = _this.getHeader();
            _this.center = Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])(_this.location.lat, _this.location.lon);
            _this.american = _this.checkAmerican();
        });
        this.american = this.checkAmerican();
        this.mapboxToken = 'pk.eyJ1IjoibmF0aGFuaG5ldyIsImEiOiJjajYxZXJ2NHowdHk1MnFvZnFvcjE2aTZ3In0.uyW_Te8pYugmfTiKuVHvOA';
        this.layers = [
            Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
                    '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                subdomains: 'abcd',
                maxZoom: 18
            }),
            Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('https://api.mapbox.com/styles/v1/nathanhnew/cjctoyhyx19sc2rqzik284dqd/tiles/256/{z}/{x}/{y}?' +
                'access_token=pk.eyJ1IjoibmF0aGFuaG5ldyIsImEiOiJjajYxZXJ2NHowdHk1MnFvZnFvcjE2aTZ3In0.uyW_Te8pYugmfTiKuVHvOA', {
                attribution: '&copy; <a href="https://www.mapbox.com">Mapbox</a> ',
                maxZoom: 18
            }),
            __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"].wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
                layers: '1',
                format: 'image/png',
                transparent: true,
                opacity: 0.8,
                attribution: 'Radar Data &copy; National Weather Service nowCOAST'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"])('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png', {
                subdomains: 'abcd',
                maxZoom: 19
            })
        ];
        this.baseLayers = {
            'Satellite': this.layers[1],
            'Classic': this.layers[0]
        };
        this.overlays = {
            'Radar': this.layers[2],
            'Cities': this.layers[3]
        };
        this.constantLayers = [
            this.layers[2]
        ];
        this.layersControl = {
            'baseLayers': this.baseLayers,
            'overlays': this.overlays
        };
        this.options = {
            layers: this.layers,
            zoom: this.location ? 8 : 4,
            center: this.location ? Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])(this.location.lat, this.location.lon) : Object(__WEBPACK_IMPORTED_MODULE_1_leaflet__["latLng"])(39.8283, -98.5795)
        };
        this.header = this.getHeader();
    };
    MapComponent.prototype.getHeader = function () {
        return this.location ? "" + this.getPrintableName(this.location) : 'Currently Nationally';
    };
    MapComponent.prototype.getPrintableName = function (location) {
        if (location.state) {
            return location.city + ", " + location.state;
        }
        else if (location.country) {
            return location.city + ", " + location.country;
        }
        else if (location.city) {
            return this.location.city;
        }
        else {
            return 'Your Location';
        }
    };
    MapComponent.prototype.checkAmerican = function () {
        if (this.national || ['us', 'usa', 'united states', 'united states of america'].includes(this.location.country.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_location_model__["a" /* Location */])
    ], MapComponent.prototype, "location", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MapComponent.prototype, "national", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapComponent.prototype, "map", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_local_service__["d" /* LocationService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/location.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = /** @class */ (function () {
    function Location(lat, lon, city, state, country, postal, searchDate) {
        if (lat === void 0) { lat = undefined; }
        if (lon === void 0) { lon = undefined; }
        if (city === void 0) { city = undefined; }
        if (state === void 0) { state = undefined; }
        if (country === void 0) { country = undefined; }
        if (postal === void 0) { postal = undefined; }
        if (searchDate === void 0) { searchDate = undefined; }
        this.lat = lat;
        this.lon = lon;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postal = postal;
        this.searchDate = searchDate;
    }
    return Location;
}());



/***/ }),

/***/ "../../../../../src/app/search-location/search-location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\r\n    padding-bottom: 0px !important;\r\n}\r\n\r\nmat-card-content {\r\n    padding-top: 24px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-location/search-location.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <nav mat-tab-nav-bar fxLayout=\"row\" fxLayoutAlign.lt-md=\"center center\" fxFlex>\n      <a mat-tab-link *ngFor=\"let link of links\" [routerLink]=\"link.path\" routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\" fxFlex>\n        {{ link.label }}\n      </a>\n    </nav>\n  </mat-card-header>\n  <div *ngIf=\"currentRoute.toLowerCase() === 'local'\">\n    <mat-card-content fxLayout=\"column\" fxlayoutAlign=\"center stretch\" fxFlex.gt-md=\"60\" fxFlex=\"90\">\n      <mat-form-field fxLayout=\"column\" (click)='tidyForm(true, $event)'>\n        <input matInput placeholder=\"Search New Location\" [formControl]=\"locSearch\" [matAutocomplete]=\"auto\" #searchInput>\n        <mat-icon matSuffix fontSet=\"fontawesome\" fontIcon=\"fa-search\" (click)=\"searchCity()\"></mat-icon>\n        <mat-hint *ngIf=\"errorDisp\" style=\"color:red\">An error occurred finding this location.</mat-hint>\n      </mat-form-field>\n      <mat-autocomplete fxFlex #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions; let i = index;\" [value]=\"option\" (click)=\"searchCity()\">\n          <mat-icon *ngIf=\"i === 0\" fontSet=\"fontawesome\" fontIcon=\"fa-location-arrow\"></mat-icon>{{ option }}</mat-option>\n      </mat-autocomplete>\n      <a href=\"https://www.google.com\">\n        <img height=\"15px\" src=\"/assets/img/google_logo/desktop/powered_by_google_on_white_hdpi.png\" alt=\"Powered by Google\">\n      </a>\n    </mat-card-content>\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/search-location/search-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_service__ = __webpack_require__("../../../../../src/app/services/local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchLocationComponent = /** @class */ (function () {
    function SearchLocationComponent(locationService, router, route) {
        this.locationService = locationService;
        this.router = router;
        this.route = route;
    }
    SearchLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRoute = this.router.routerState.snapshot.url.split('/').slice(-1)[0];
        this.links = [{ 'label': 'Local', 'path': 'local' }, { 'label': 'National', 'path': 'national' }];
        this.location = this.locationService.location;
        this.locSub = this.locationService.getLocation.subscribe(function (city) {
            _this.location = _this.locationService.location;
        });
        this.locSearch = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.filteredOptions = this.options = ['Current Location'];
        this.locSearch.valueChanges
            .map(function (val) { return val ? _this.filterCities(val) : _this.filteredOptions.slice(); })
            .subscribe();
        this.errorSub = this.locationService.errorList.subscribe(function (error) {
            _this.errorDisp = typeof error !== 'undefined';
        });
        this.subs = [this.locSub, this.errorSub];
    };
    SearchLocationComponent.prototype.ngAfterContentChecked = function () {
        this.currentRoute = this.router.routerState.snapshot.url.split('/').slice(-1)[0];
    };
    SearchLocationComponent.prototype.tabClick = function (tab) {
        this.currentRoute = tab.toLowerCase();
    };
    SearchLocationComponent.prototype.filterCities = function (val) {
        var _this = this;
        if (val.length > 2 && val !== 'Current Location') {
            this.locationService.findLocationByInputStream(val).subscribe(function (data) {
                _this.filteredOptions = _this.options.concat(data);
            });
        }
        else {
            return this.options.slice();
        }
    };
    SearchLocationComponent.prototype.searchCity = function () {
        if (this.locSearch.value === 'Current Location') {
            this.locationService.getUserLocation();
        }
        else if (!this.locSearch.value) {
            return;
        }
        else {
            this.locationService.setLocationByInput(this.locSearch.value);
        }
        this.removeErrors();
        this.tidyForm();
    };
    SearchLocationComponent.prototype.tidyForm = function (fullClean, event) {
        if (fullClean === void 0) { fullClean = false; }
        if (event && event.target.nodeName.toLowerCase() === 'mat-icon') {
            return;
        }
        else {
            this.filteredOptions = this.options.slice();
            if (fullClean) {
                this.locSearch.patchValue('');
            }
        }
    };
    SearchLocationComponent.prototype.removeErrors = function () {
        this.locationService.removeError();
    };
    SearchLocationComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub) {
                sub.unsubscribe();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('host'),
        __metadata("design:type", String)
    ], SearchLocationComponent.prototype, "host", void 0);
    SearchLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-location',
            template: __webpack_require__("../../../../../src/app/search-location/search-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-location/search-location.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_local_service__["d" /* LocationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SearchLocationComponent);
    return SearchLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IpGeoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OSMGeocodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoogleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LocationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_location_model__ = __webpack_require__("../../../../../src/app/models/location.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_service__ = __webpack_require__("../../../../../src/app/services/web.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IpGeoService = /** @class */ (function () {
    function IpGeoService(http) {
        this.http = http;
        this.url = 'https://ipinfo.io/geo';
    }
    IpGeoService.prototype.ipLocation = function () {
        return this.http.get(this.url);
    };
    IpGeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IpGeoService);
    return IpGeoService;
}());

var OSMGeocodeService = /** @class */ (function () {
    function OSMGeocodeService(http) {
        this.http = http;
        this.reverseGeocodeBase = 'https://nominatim.openstreetmap.org/reverse?';
        this.geocodeBase = 'https://nominatim.openstreetmap.org/search?';
    }
    OSMGeocodeService.prototype.reverseGeocode = function (lat, lon) {
        var url = this.reverseGeocodeBase;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.set('format', 'json');
        params = params.append('lat', lat.toString());
        params = params.append('lon', lon.toString());
        params = params.append('addressdetail', '1');
        return this.http.get(url, {
            params: params
        });
    };
    OSMGeocodeService.prototype.geocode = function (city, state, country) {
        var url = this.geocodeBase;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.set('format', 'json');
        params = params.append('city', city);
        params = params.append('state', state);
        params = params.append('country', country);
        return this.http.get(url, {
            params: params
        });
    };
    OSMGeocodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OSMGeocodeService);
    return OSMGeocodeService;
}());

var GoogleService = /** @class */ (function () {
    function GoogleService(http) {
        this.http = http;
        this.key = 'AIzaSyCwPPZ5pogzC9vJm0gw4ISOHHXMAr-18dU';
    }
    GoogleService.prototype.getAutocomplete = function (input) {
        var autocompleteBaseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.set('key', this.key);
        params = params.append('input', input);
        params = params.append('types', '(cities)');
        return this.http.get(autocompleteBaseUrl, {
            params: params
        });
    };
    GoogleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GoogleService);
    return GoogleService;
}());

var LocationService = /** @class */ (function () {
    function LocationService(ipGeoService, geocoder, google) {
        this.ipGeoService = ipGeoService;
        this.geocoder = geocoder;
        this.google = google;
        this.location = new __WEBPACK_IMPORTED_MODULE_2__models_location_model__["a" /* Location */]();
        this.subs = [this.geoSub, this.ipSub];
        this.errorList = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.getLocation = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    LocationService.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (location) {
                _this.location.lat = location.coords.latitude;
                _this.location.lon = location.coords.longitude;
                _this.location.searchDate = new Date();
                _this.setCityInformation(_this.location.lat, _this.location.lon);
            }, function (error) {
                console.log('Unable to get location from navigator, looking through IP.');
                _this.ipSub = _this.ipGeoService.ipLocation().subscribe(function (data) {
                    _this.location.lat = data['loc'].split(',')[0];
                    _this.location.lon = data['loc'].split(',')[1];
                    _this.location.searchDate = new Date();
                    if (data['city']) {
                        _this.location.city = data['city'];
                    }
                    if (data['region']) {
                        _this.location.state = data['region'];
                    }
                    if (data['postal']) {
                        _this.location.postal = data['postal'];
                    }
                    if (data['country']) {
                        _this.location.country = data['country'];
                    }
                    _this.getLocation.next(_this.location);
                }, function (errors) {
                    _this.noData = true;
                    console.log(errors);
                });
                if (_this.noData) {
                    switch (error.code) {
                        case 1:
                            console.log('permission denied');
                            _this.errorList.next('Please share your location!');
                            break;
                        case 2:
                            console.log('Location Unavailable');
                            _this.errorList.next('Unable to find location, please try again.');
                            break;
                        case 3:
                            console.log('Timeout');
                            _this.errorList.next('An Unknown error occurred.');
                            break;
                    }
                }
            });
        }
    };
    LocationService.prototype.setCityInformation = function (lat, lon) {
        var _this = this;
        this.geoSub = this.geocoder.reverseGeocode(lat, lon).subscribe(function (data) {
            _this.location.city = data['address']['city'];
            _this.location.postal = data['address']['postcode'];
            _this.location.state = data['address']['state'];
            _this.location.country = data['address']['country_code'].toUpperCase();
            _this.getLocation.next(_this.location);
        });
    };
    LocationService.prototype.setLocation = function (location) {
        this.location = location;
        this.getLocation.next(this.location);
    };
    LocationService.prototype.findLocationByInputStream = function (input) {
        return this.google.getAutocomplete(input).map(function (data) {
            var optList = [];
            var predictions = data['predictions'];
            var i = 0;
            for (var _i = 0, predictions_1 = predictions; _i < predictions_1.length; _i++) {
                var prediction = predictions_1[_i];
                if (i >= 4) {
                    break;
                }
                var load = prediction['structured_formatting']['main_text'];
                load += ', ';
                load += prediction['structured_formatting']['secondary_text'];
                optList.push(load);
                i++;
            }
            return optList.slice();
        }, function (error) {
            return [error];
        });
    };
    LocationService.prototype.setLocationByInput = function (cityInput) {
        var _this = this;
        var address = cityInput.split(', ');
        var city;
        var state;
        var country;
        if (address.length < 3) {
            city = address[0];
            state = '';
            country = address[1];
        }
        else {
            city = address[0];
            state = address[1];
            country = address[2];
        }
        this.geoSub = this.geocoder.geocode(city, state, country).subscribe(function (data) {
            if (!data[0]) {
                _this.errorList.next('Unable to Find Requested Location');
                console.log("No data for: City: " + city + ", State: " + state + ", Country: " + country);
                return;
            }
            _this.location.lat = data[0]['lat'];
            _this.location.lon = data[0]['lon'];
            _this.location.city = city;
            _this.location.state = state.length > 0 ? state : undefined;
            _this.location.country = country;
            _this.location.searchDate = new Date();
            _this.location.postal = undefined;
            _this.getLocation.next(_this.location);
        }, function (error) {
            _this.errorList.next(error);
            console.log("Error for: City: " + city + ", State: " + state + ", Country: " + country);
        });
    };
    LocationService.prototype.removeError = function () {
        this.errorList.next();
    };
    LocationService.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (elem) { return elem.unsubscribe(); });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [IpGeoService, OSMGeocodeService, GoogleService])
    ], LocationService);
    return LocationService;
}());

var CurrentsService = /** @class */ (function () {
    function CurrentsService(darkSkyService, snackBar, locationService) {
        var _this = this;
        this.darkSkyService = darkSkyService;
        this.snackBar = snackBar;
        this.locationService = locationService;
        this.location = this.locationService.location;
        this.getCurrents = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.errors = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.locSub = this.locationService.getLocation.subscribe(function (newLoc) { return _this.location = newLoc; });
        this.units = 'imperial';
    }
    CurrentsService.prototype.queryDarkSky = function (lat, lon) {
        var _this = this;
        if (this.snackBarOpen) {
            this.snackBarRef.dismiss();
        }
        if (typeof lat === 'string') {
            lat = parseFloat(lat);
        }
        if (typeof lon === 'string') {
            lon = parseFloat(lon);
        }
        this.curSub = this.darkSkyService.getCurrents(lat, lon).subscribe(function (data) {
            if (typeof data === 'string') {
                _this.errors.next(data);
                return;
            }
            _this.currents = data;
            if ('alerts' in _this.currents) {
                var snackBarData = {
                    'alerts': _this.currents['alerts'],
                    'location': _this.location
                };
                var alertType = _this.currents['alerts'][0].severity + '-snackbar';
                _this.snackBarRef = _this.snackBar.openFromComponent(__WEBPACK_IMPORTED_MODULE_6__snackbar_snackbar_component__["a" /* AlertSnackBarComponent */], {
                    data: snackBarData,
                    panelClass: alertType,
                    duration: 20000
                });
                _this.snackBarOpen = true;
            }
            else {
                if (_this.snackBarOpen) {
                    _this.snackBarRef.dismiss();
                    _this.snackBarOpen = false;
                }
            }
            if (_this.units === 'metric') {
                _this.convertMetric();
            }
            else {
                _this.getCurrents.next(_this.currents);
            }
        }, function (errors) {
            _this.errors.next(errors);
        });
    };
    CurrentsService.prototype.castDeg = function (deg) {
        var dir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
        return dir[Math.floor((parseFloat(deg) / 45) + .5) % 8].toString();
    };
    CurrentsService.prototype.convertMetric = function () {
        for (var val in this.currents['currents']) {
            if (val.toLowerCase().includes('temperature') || val.toLowerCase().includes('dewpoint')) {
                this.currents['currents'][val] = this.unitEquation('temperature', this.currents['currents'][val], 'metric');
            }
            else if (val.toLowerCase().includes('wind') || val.toLowerCase().includes('visibility')) {
                this.currents['currents'][val] = this.unitEquation('wind', this.currents['currents'][val], 'metric');
            }
        }
        this.getCurrents.next(this.currents);
    };
    CurrentsService.prototype.castUnits = function (units) {
        if (units === this.units) {
            return;
        }
        else {
            this.units = units;
            for (var val in this.currents['currents']) {
                if (val.toLowerCase().includes('temperature') || val.toLowerCase().includes('dewpoint')) {
                    this.currents['currents'][val] = this.unitEquation('temperature', this.currents['currents'][val], units);
                }
                else if (val.toLowerCase().includes('wind') || val.toLowerCase().includes('visibility')) {
                    this.currents['currents'][val] = this.unitEquation('wind', this.currents['currents'][val], units);
                }
            }
            this.getCurrents.next(this.currents);
        }
    };
    CurrentsService.prototype.unitEquation = function (type, value, unitsToConvert) {
        if (unitsToConvert === 'metric') {
            if (type === 'temperature') {
                return Math.round((value - 32) * 5 / 9);
            }
            else if (type === 'wind') {
                return Math.round(value * 1.609344);
            }
        }
        else if (unitsToConvert === 'imperial') {
            if (type === 'temperature') {
                return Math.round((value * 9 / 5) + 32);
            }
            else if (type === 'wind') {
                return Math.round(value / 1.609344);
            }
        }
    };
    CurrentsService.prototype.ngOnDestroy = function () {
        this.locSub.unsubscribe();
        if (this.curSub) {
            this.curSub.unsubscribe();
        }
    };
    CurrentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__web_service__["a" /* DarkSkyService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatSnackBar */],
            LocationService])
    ], CurrentsService);
    return CurrentsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NavVisibilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavCanShowService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavLinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");

var NavVisibilityService = /** @class */ (function () {
    function NavVisibilityService() {
        var _this = this;
        this.sidebarIsVisible = false;
        this.sidebarVisibilityChange = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.sidebarVisibilityChange.subscribe(function (val) {
            _this.sidebarIsVisible = val;
        });
    }
    NavVisibilityService.prototype.toggleSidebar = function () {
        this.sidebarVisibilityChange.next(!this.sidebarIsVisible);
    };
    NavVisibilityService.prototype.showSidebar = function () {
        this.sidebarVisibilityChange.next(true);
    };
    NavVisibilityService.prototype.hideSidebar = function () {
        this.sidebarVisibilityChange.next(false);
    };
    return NavVisibilityService;
}());

var NavCanShowService = /** @class */ (function () {
    function NavCanShowService() {
        var _this = this;
        this.screenChange = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.windowSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
        this.screenChange.subscribe(function (val) {
            _this.canShow = _this.windowSizes.indexOf(val) > 2;
        });
    }
    NavCanShowService.prototype.sizeWindow = function (size) {
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
    };
    NavCanShowService.prototype.logVal = function (val, execute) {
        if (execute === void 0) { execute = false; }
        if (execute === true) {
            console.log(this.canShow);
        }
    };
    return NavCanShowService;
}());

var NavLinkService = /** @class */ (function () {
    function NavLinkService() {
        this.navLinks = [
            {
                'label': 'Home',
                'path': '/home',
            },
            {
                'label': 'Currents',
                'path': '/currents',
            },
            {
                'label': 'Forecast',
                'path': '/forecast',
            },
            {
                'label': 'Discussion',
                'path': '/discussion',
            },
            {
                'label': 'Severe',
                'path': '/severe',
            },
            {
                'label': 'Tropics',
                'path': '/tropics',
            },
            {
                'label': 'About',
                'path': '/about',
            },
        ];
    }
    return NavLinkService;
}());



/***/ }),

/***/ "../../../../../src/app/services/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkSkyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DarkSkyService = /** @class */ (function () {
    function DarkSkyService(http) {
        this.http = http;
        this.token = 'd064e87ad89527652940e04e8c65288a';
        this.urlBase = "https://api.darksky.net/forecast/" + this.token + "/";
        this.skycons = {
            'CLEAR-DAY': Skycons.CLEAR_DAY,
            'CLEAR-NIGHT': Skycons.CLEAR_NIGHT,
            'PARTLY-CLOUDY-DAY': Skycons.PARTLY_CLOUDY_DAY,
            'PARTLY-CLOUDY-NIGHT': Skycons.PARTLY_CLOUDY_NIGHT,
            'CLOUDY': Skycons.CLOUDY,
            'RAIN': Skycons.RAIN,
            'SLEET': Skycons.SLEET,
            'SNOW': Skycons.SNOW,
            'WIND': Skycons.WIND,
            'FOG': Skycons.FOG,
        };
    }
    DarkSkyService.prototype.getCurrents = function (lat, lon) {
        var url = this.urlBase + (lat + "," + lon + "?exclude=[minutely,hourly]");
        var returnable = { 'currents': {} };
        return this.http.jsonp(url, 'callback').map(function (data) {
            if ('darksky-unavailable' in data['flags']) {
                console.log('Darksky-unavailable');
                return 'A Temporary Error Occurred Retrieving Weather Data';
            }
            else if (Object.keys(data).length === 0) {
                console.log('Error loading Darksky');
                return 'An error occurred. Try again';
            }
            var dataset = data['currently'];
            for (var element in dataset) {
                if (typeof dataset[element] === 'number') {
                    if (element === 'humidity') {
                        returnable['currents'][element] = dataset[element] * 100;
                    }
                    else if (element === 'time') {
                        returnable['currents'][element] = new Date(dataset[element] * 1000);
                    }
                    else {
                        returnable['currents'][element] = Math.round(dataset[element]);
                    }
                }
                else {
                    returnable['currents'][element] = dataset[element];
                }
            }
            if ('alerts' in data) {
                if (data['alerts'].length === 1) {
                    returnable['alerts'] = data['alerts'];
                }
                else {
                    returnable['alerts'] = data['alerts'];
                    var typeHierarchy = ['tornado', 'hurricane',
                        'severe thunderstorm', 'tropical storm',
                        'blizzard', 'ice storm', 'winter storm',
                        'fire', 'wind chill', 'flood', 'flash flood', 'excessive heat',
                        'extreme wind', 'high wind', 'freeze', 'frost', 'red flag'];
                    var extreme = Infinity;
                    var mostExtreme = void 0;
                    for (var i = 0; i < data['alerts'].length; i++) {
                        var alertType = data['alerts'][i].title.toLowerCase().split(' ');
                        var intensity = typeHierarchy.indexOf(alertType.slice(0, -1).join(' '));
                        if (intensity < 0) {
                            console.log(data['alerts'][i].title + ' intensity not found');
                        }
                        if (alertType[-1] === 'watch') {
                            intensity += 20;
                        }
                        else if (alertType[-1] === 'advisory') {
                            intensity += 40;
                        }
                        if (intensity < extreme) {
                            extreme = intensity;
                            mostExtreme = i;
                        }
                    }
                    returnable['alerts'].unshift(data['alerts'].splice(mostExtreme, 1)[0]);
                }
            }
            return returnable;
        }, function (error) {
            console.log(error);
        });
    };
    DarkSkyService.prototype.getSkycon = function (cond) {
        return this.skycons[cond];
    };
    DarkSkyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DarkSkyService);
    return DarkSkyService;
}());



/***/ }),

/***/ "../../../../../src/app/snackbar/snackbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/snackbar/snackbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertSnackBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AlertSnackBarComponent = /** @class */ (function () {
    function AlertSnackBarComponent(data) {
        this.data = data;
    }
    AlertSnackBarComponent.prototype.ngOnInit = function () {
        this.expires = __WEBPACK_IMPORTED_MODULE_2_moment__(this.data.alerts[0].expires * 1000);
        this.cityString = this.data.location.state ? this.data.location.city + ", " + this.data.location.state : this.data.location.city;
        this.alertMessage = this.data.alerts[0].title + " for " + this.cityString + " Until " + this.expires.format('h:mma MMM Do');
    };
    AlertSnackBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert-snackbar',
            template: '{{ alertMessage }}',
            styles: [__webpack_require__("../../../../../src/app/snackbar/snackbar.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_SNACK_BAR_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], AlertSnackBarComponent);
    return AlertSnackBarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map