(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"]],
            exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"]]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, routedComponents, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_change_detector_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/change-detector-pipe */ "./src/app/pipes/change-detector-pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'home', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var routedComponents = [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _pipes_change_detector_pipe__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorPipe"]];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\r\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <span class=\"mdl-layout-title\">{{ title }}</span>\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n        <a class=\"mdl-navigation__link\" [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">Home</a>\r\n        <a class=\"mdl-navigation__link\" [routerLink]=\"['/searchNewRoutes']\" routerLinkActive=\"active-link\">NRE Ocean\r\n          Routes</a>\r\n        <a class=\"mdl-navigation__link\" [routerLink]=\"['/searchIntermodal']\" routerLinkActive=\"active-link\">Intermodal\r\n          Key Figures</a>\r\n        <a class=\"mdl-navigation__link\" [routerLink]=\"['/searchRoutes']\" routerLinkActive=\"active-link\">COQU Missing\r\n          Routings\r\n        </a>\r\n\r\n      </nav>\r\n    </div>\r\n  </header>\r\n  <main class=\"mdl-layout__content\" style=\"padding: 20px;\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product Catalogue Analyzer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _intermodal_im_routes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intermodal/im.routes.module */ "./src/app/intermodal/im.routes.module.ts");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _missingRoutes_missing_routes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./missingRoutes/missing-routes.module */ "./src/app/missingRoutes/missing-routes.module.ts");
/* harmony import */ var _newRoutingEngine_new_routing_engine_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newRoutingEngine/new-routing-engine.module */ "./src/app/newRoutingEngine/new-routing-engine.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["routedComponents"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _missingRoutes_missing_routes_module__WEBPACK_IMPORTED_MODULE_7__["MissingRoutingsModule"],
                _intermodal_im_routes_module__WEBPACK_IMPORTED_MODULE_5__["IntermodalRoutesModule"],
                _newRoutingEngine_new_routing_engine_module__WEBPACK_IMPORTED_MODULE_8__["NewRoutingEngineModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
            ],
            providers: [_services_enum_service__WEBPACK_IMPORTED_MODULE_6__["EnumService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: window['_app_base'] || '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enums/app-enum.ts":
/*!***********************************!*\
  !*** ./src/app/enums/app-enum.ts ***!
  \***********************************/
/*! exports provided: EntityEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityEnum", function() { return EntityEnum; });
var EntityEnum;
(function (EntityEnum) {
    EntityEnum["COUNTRY"] = "country";
    EntityEnum["CONTRACT"] = "contract";
    EntityEnum["CONTRACT_GROUP"] = "contractgroup";
    EntityEnum["GEOSCOPE"] = "geoscope";
    EntityEnum["INTERMODAL_RESULT"] = "keyfigure";
    EntityEnum["LOCATIONS"] = "locations";
    EntityEnum["MEMBER"] = "member";
    EntityEnum["MISSING_ROUTINGS"] = "missingroutings";
    EntityEnum["PORTS"] = "ports";
    EntityEnum["PREFERRED_PORTS"] = "preferredPort";
    EntityEnum["ROUTING_RESULT"] = "oceanroutings";
    EntityEnum["TRADE"] = "trade";
    EntityEnum["VESSEL_SYSTEMS"] = "vesselsystems";
})(EntityEnum || (EntityEnum = {}));


/***/ }),

/***/ "./src/app/enums/cargo.type.ts":
/*!*************************************!*\
  !*** ./src/app/enums/cargo.type.ts ***!
  \*************************************/
/*! exports provided: CargoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargoType", function() { return CargoType; });
var CargoType;
(function (CargoType) {
    CargoType["GENERAL"] = "G";
    CargoType["REEFER"] = "R";
    CargoType["DG"] = "D";
    CargoType["REEFER_DG"] = "RD";
    CargoType["OOG"] = "O";
    CargoType["OOG_DG"] = "OD";
    CargoType["NOR"] = "NR";
    CargoType["NOR_DG"] = "ND";
    CargoType["LOST_SLOT"] = "LS";
})(CargoType || (CargoType = {}));


/***/ }),

/***/ "./src/app/enums/enum.index.ts":
/*!*************************************!*\
  !*** ./src/app/enums/enum.index.ts ***!
  \*************************************/
/*! exports provided: IntermodalMode, ServiceType, ServiceTypeIntermodal, CargoType, EquipmentSize, EquipmentType, GeoScopeType, EquipmentGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _intermodal_transport_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intermodal.transport.mode */ "./src/app/enums/intermodal.transport.mode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntermodalMode", function() { return _intermodal_transport_mode__WEBPACK_IMPORTED_MODULE_0__["IntermodalMode"]; });

/* harmony import */ var _serviceType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceType */ "./src/app/enums/serviceType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return _serviceType__WEBPACK_IMPORTED_MODULE_1__["ServiceType"]; });

/* harmony import */ var _service_type_intermodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.type.intermodal */ "./src/app/enums/service.type.intermodal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeIntermodal", function() { return _service_type_intermodal__WEBPACK_IMPORTED_MODULE_2__["ServiceTypeIntermodal"]; });

/* harmony import */ var _cargo_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cargo.type */ "./src/app/enums/cargo.type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CargoType", function() { return _cargo_type__WEBPACK_IMPORTED_MODULE_3__["CargoType"]; });

/* harmony import */ var _equipment_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipment.size */ "./src/app/enums/equipment.size.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EquipmentSize", function() { return _equipment_size__WEBPACK_IMPORTED_MODULE_4__["EquipmentSize"]; });

/* harmony import */ var _equipment_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipment.type */ "./src/app/enums/equipment.type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EquipmentType", function() { return _equipment_type__WEBPACK_IMPORTED_MODULE_5__["EquipmentType"]; });

/* harmony import */ var _geoscope_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geoscope.type */ "./src/app/enums/geoscope.type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoScopeType", function() { return _geoscope_type__WEBPACK_IMPORTED_MODULE_6__["GeoScopeType"]; });

/* harmony import */ var _equipment_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./equipment.group */ "./src/app/enums/equipment.group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EquipmentGroup", function() { return _equipment_group__WEBPACK_IMPORTED_MODULE_7__["EquipmentGroup"]; });

/**
 * Created by ekirschning on 04.02.2018.
 */










/***/ }),

/***/ "./src/app/enums/equipment.group.ts":
/*!******************************************!*\
  !*** ./src/app/enums/equipment.group.ts ***!
  \******************************************/
/*! exports provided: EquipmentGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentGroup", function() { return EquipmentGroup; });
var EquipmentGroup;
(function (EquipmentGroup) {
    EquipmentGroup["GENERAL"] = "G";
    EquipmentGroup["REEFER"] = "R";
    EquipmentGroup["SPECIAL"] = "S";
})(EquipmentGroup || (EquipmentGroup = {}));


/***/ }),

/***/ "./src/app/enums/equipment.size.ts":
/*!*****************************************!*\
  !*** ./src/app/enums/equipment.size.ts ***!
  \*****************************************/
/*! exports provided: EquipmentSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentSize", function() { return EquipmentSize; });
var EquipmentSize;
(function (EquipmentSize) {
    EquipmentSize["_20"] = "20";
    EquipmentSize["_40"] = "40";
})(EquipmentSize || (EquipmentSize = {}));


/***/ }),

/***/ "./src/app/enums/equipment.type.ts":
/*!*****************************************!*\
  !*** ./src/app/enums/equipment.type.ts ***!
  \*****************************************/
/*! exports provided: EquipmentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentType", function() { return EquipmentType; });
var EquipmentType;
(function (EquipmentType) {
    EquipmentType["GP"] = "GENERAL PURPOSE";
    EquipmentType["HC"] = "GENERAL PURPOSE HIGH CUBE";
    EquipmentType["RH"] = "REEFER HIGH CUBE";
    EquipmentType["RF"] = "REEFER";
    EquipmentType["FR"] = "FLATRACK";
    EquipmentType["FH"] = "FLATRACK HIGH CUBE";
    EquipmentType["OH"] = "OPENTOP HIGH CUBE";
    EquipmentType["PL"] = "PLATFORM";
    EquipmentType["TK"] = "TANK";
    EquipmentType["BK"] = "BULK CONTAINER";
    EquipmentType["VE"] = "VENTILATED";
    EquipmentType["GN"] = "GENSET NOSE MOUNT";
    EquipmentType["GU"] = "GENSET UNDERSLUNG";
    EquipmentType["CH"] = "CHASSIS";
    EquipmentType["DF"] = "DEFAULT";
})(EquipmentType || (EquipmentType = {}));


/***/ }),

/***/ "./src/app/enums/geoscope.type.ts":
/*!****************************************!*\
  !*** ./src/app/enums/geoscope.type.ts ***!
  \****************************************/
/*! exports provided: GeoScopeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoScopeType", function() { return GeoScopeType; });
var GeoScopeType;
(function (GeoScopeType) {
    GeoScopeType["LOCATION"] = "L";
    GeoScopeType["CITY"] = "T";
    GeoScopeType["FACILITY"] = "F";
    GeoScopeType["POSTAL_CODE"] = "P";
})(GeoScopeType || (GeoScopeType = {}));


/***/ }),

/***/ "./src/app/enums/intermodal.transport.mode.ts":
/*!****************************************************!*\
  !*** ./src/app/enums/intermodal.transport.mode.ts ***!
  \****************************************************/
/*! exports provided: IntermodalMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermodalMode", function() { return IntermodalMode; });
var IntermodalMode;
(function (IntermodalMode) {
    IntermodalMode["ALL"] = "ALL";
    IntermodalMode["TRUCK"] = "TRUCK";
    IntermodalMode["RAIL"] = "RAIL";
    IntermodalMode["BARGE"] = "BARGE";
    IntermodalMode["RAIL_ROAD"] = "RAIL/ROAD";
    IntermodalMode["BARGE_ROAD"] = "BARGE/ROAD";
})(IntermodalMode || (IntermodalMode = {}));


/***/ }),

/***/ "./src/app/enums/service.type.intermodal.ts":
/*!**************************************************!*\
  !*** ./src/app/enums/service.type.intermodal.ts ***!
  \**************************************************/
/*! exports provided: ServiceTypeIntermodal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypeIntermodal", function() { return ServiceTypeIntermodal; });
var ServiceTypeIntermodal;
(function (ServiceTypeIntermodal) {
    ServiceTypeIntermodal["INLAND"] = "I";
    ServiceTypeIntermodal["DOOR"] = "D";
})(ServiceTypeIntermodal || (ServiceTypeIntermodal = {}));


/***/ }),

/***/ "./src/app/enums/serviceType.ts":
/*!**************************************!*\
  !*** ./src/app/enums/serviceType.ts ***!
  \**************************************/
/*! exports provided: ServiceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
var ServiceType;
(function (ServiceType) {
    ServiceType["PORT"] = "P";
    ServiceType["INLAND"] = "I";
    ServiceType["DOOR"] = "D";
})(ServiceType || (ServiceType = {}));


/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\r\n\r\n  <div class=\"mdl-cell mdl-cell--3-col\">\r\n    Home\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/intermodal/im.result/result-intermodal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/intermodal/im.result/result-intermodal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-header-cell.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\nmat-row:nth-child(even) {\r\n  background-color: #ecf4ff;;\r\n}\r\n\r\nmat-row:nth-child(odd) {\r\n  background-color: #ecf4dd;;\r\n}\r\n"

/***/ }),

/***/ "./src/app/intermodal/im.result/result-intermodal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/intermodal/im.result/result-intermodal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort matSort matSortDirection=\"asc\">\r\n\r\n    <!-- Inland Column -->\r\n    <ng-container matColumnDef=\"inland\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Inland</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.from.locationCode}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Via Column -->\r\n    <ng-container matColumnDef=\"via\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Via</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.via ? element.via.locationCode : \"\"}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Port Column -->\r\n    <ng-container matColumnDef=\"port\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Port</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element \"> {{element.to.locationCode}}</mat-cell>\r\n    </ng-container>\r\n    <!-- Transport Mode Column -->\r\n    <ng-container matColumnDef=\"transportmode\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>TransportMode</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.transportMode}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Rate Column -->\r\n    <ng-container matColumnDef=\"rate\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Rate</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.rate }} {{ element.currency }}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- EQSize Column -->\r\n    <ng-container matColumnDef=\"eqsize\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>EQSize</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.equipmentSize}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- EQType -->\r\n    <ng-container matColumnDef=\"eqgroup\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>EQGroup</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.equipmentGroup}}</mat-cell>\r\n    </ng-container>\r\n    <!-- IsPrferred Column -->\r\n    <ng-container matColumnDef=\"preferred\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Preferred</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.isPreferred}}</mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n                 [pageSize]=\"5\"\r\n                 [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/intermodal/im.result/result-intermodal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/intermodal/im.result/result-intermodal.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResultIntermodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultIntermodalComponent", function() { return ResultIntermodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultIntermodalComponent = /** @class */ (function () {
    function ResultIntermodalComponent() {
        this.keyFigures = [];
        this.displayedColumns = ['inland', 'via', 'port', 'transportmode', 'rate', 'eqsize', 'eqgroup', 'preferred'];
    }
    ResultIntermodalComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    ResultIntermodalComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ResultIntermodalComponent.prototype.ngOnChanges = function (changes) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.keyFigures);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ResultIntermodalComponent.prototype, "keyFigures", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ResultIntermodalComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ResultIntermodalComponent.prototype, "paginator", void 0);
    ResultIntermodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-intermodal',
            template: __webpack_require__(/*! ./result-intermodal.component.html */ "./src/app/intermodal/im.result/result-intermodal.component.html"),
            styles: [__webpack_require__(/*! ./result-intermodal.component.css */ "./src/app/intermodal/im.result/result-intermodal.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], ResultIntermodalComponent);
    return ResultIntermodalComponent;
}());



/***/ }),

/***/ "./src/app/intermodal/im.routes-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/intermodal/im.routes-routing.module.ts ***!
  \********************************************************/
/*! exports provided: intermodalRoutes, routedComponents, IntermodalRoutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intermodalRoutes", function() { return intermodalRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermodalRoutesRoutingModule", function() { return IntermodalRoutesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _im_search_search_intermodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./im.search/search-intermodal.component */ "./src/app/intermodal/im.search/search-intermodal.component.ts");
/* harmony import */ var _im_result_result_intermodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./im.result/result-intermodal.component */ "./src/app/intermodal/im.result/result-intermodal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var intermodalRoutes = [
    { path: 'searchIntermodal', component: _im_search_search_intermodal_component__WEBPACK_IMPORTED_MODULE_2__["SearchIntermodalComponent"] }
];
var routedComponents = [_im_search_search_intermodal_component__WEBPACK_IMPORTED_MODULE_2__["SearchIntermodalComponent"], _im_result_result_intermodal_component__WEBPACK_IMPORTED_MODULE_3__["ResultIntermodalComponent"]];
var IntermodalRoutesRoutingModule = /** @class */ (function () {
    function IntermodalRoutesRoutingModule() {
    }
    IntermodalRoutesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(intermodalRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IntermodalRoutesRoutingModule);
    return IntermodalRoutesRoutingModule;
}());



/***/ }),

/***/ "./src/app/intermodal/im.routes.module.ts":
/*!************************************************!*\
  !*** ./src/app/intermodal/im.routes.module.ts ***!
  \************************************************/
/*! exports provided: IntermodalRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermodalRoutesModule", function() { return IntermodalRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _im_routes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./im.routes-routing.module */ "./src/app/intermodal/im.routes-routing.module.ts");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_date_utils_date_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/date.utils/date.adapter */ "./src/app/services/date.utils/date.adapter.ts");
/* harmony import */ var _services_date_utils_date_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/date.utils/date.format */ "./src/app/services/date.utils/date.format.ts");
/* harmony import */ var _services_geoscope_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/geoscope.service */ "./src/app/services/geoscope.service.ts");
/* harmony import */ var _services_im_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/im.search.service */ "./src/app/intermodal/services/im.search.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var IntermodalRoutesModule = /** @class */ (function () {
    function IntermodalRoutesModule() {
    }
    IntermodalRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_im_routes_routing_module__WEBPACK_IMPORTED_MODULE_1__["routedComponents"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _im_routes_routing_module__WEBPACK_IMPORTED_MODULE_1__["IntermodalRoutesRoutingModule"]],
            providers: [_services_country_service__WEBPACK_IMPORTED_MODULE_9__["CountryService"], _services_geoscope_service__WEBPACK_IMPORTED_MODULE_6__["GeoScopeService"], _services_im_search_service__WEBPACK_IMPORTED_MODULE_7__["IntermodalSearchService"], _services_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _services_date_utils_date_adapter__WEBPACK_IMPORTED_MODULE_4__["AppDateAdapter"] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _services_date_utils_date_format__WEBPACK_IMPORTED_MODULE_5__["APP_DATE_FORMATS"] }
            ]
        })
    ], IntermodalRoutesModule);
    return IntermodalRoutesModule;
}());



/***/ }),

/***/ "./src/app/intermodal/im.search/search-intermodal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/intermodal/im.search/search-intermodal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-style-9 {\r\n  max-width: 400px;\r\n  background: #FAFAFA;\r\n  padding: 10px;\r\n  margin: 20px auto;\r\n  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\r\n  border-radius: 10px;\r\n  border: 2px solid #305A72;\r\n}\r\n\r\n.smallFont {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.serviceType {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 5px 0px 10px 15px;\r\n}\r\n\r\n.floatLeft {\r\n  float: left;\r\n  padding: 1px 1px 1px 1px;\r\n  margin: 1px 1px 1px 1px;\r\n  font-weight: bold;\r\n  color: #13557b;\r\n  height: 4px;\r\n  line-height: 0px;\r\n}\r\n\r\n/* ml */\r\n\r\n.stopFloat {\r\n  display: block;\r\n  float: none;\r\n  clear: both;\r\n  height: 0px; /* 1px, wenn kleine Linie bleiben soll */\r\n  font-size: 0px;\r\n  line-height: 0px;\r\n  background: #ffffff;\r\n}\r\n\r\nselect:hover {\r\n  background: rgba(0, 0, 0, 0);\r\n  color: #3a7999;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 5px 0;\r\n  border-radius: 6px;\r\n  z-index: 1;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover {\r\n  visibility: visible;\r\n}\r\n\r\n.isHidden {\r\n  display: none;\r\n}\r\n\r\n.isShown {\r\n  display: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/intermodal/im.search/search-intermodal.component.form.ts":
/*!**************************************************************************!*\
  !*** ./src/app/intermodal/im.search/search-intermodal.component.form.ts ***!
  \**************************************************************************/
/*! exports provided: IntermodalSearchReactiveForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermodalSearchReactiveForm", function() { return IntermodalSearchReactiveForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var IntermodalSearchReactiveForm = /** @class */ (function () {
    function IntermodalSearchReactiveForm() {
        this._searchIntermodalForm = this.createForm();
    }
    IntermodalSearchReactiveForm.prototype.createForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            includeKeyFigure: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            includeImTariff: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            includeImSchedule: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            preOnCarriage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('true', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            inlandLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            inlandGeoScopeType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            transportMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            prefPort: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            includeAllPreferredPorts: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true),
            equipmentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](new Date().toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](new Date().toISOString()),
            eq20: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true),
            eq40: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true),
            eqHC: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true),
            weight20: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            weight40: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            weightBasedOnly: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]()
        });
    };
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "searchIntermodalForm", {
        get: function () {
            return this._searchIntermodalForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "includeKeyFigure", {
        get: function () {
            return this._searchIntermodalForm.get('includeKeyFigure');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "includeImTariff", {
        get: function () {
            return this._searchIntermodalForm.get('includeImTariff');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "includeImSchdeule", {
        get: function () {
            return this._searchIntermodalForm.get('includeImSchedule');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "preOnCarriage", {
        get: function () {
            return this._searchIntermodalForm.get('preOnCarriage');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "inlandLocation", {
        get: function () {
            return this._searchIntermodalForm.get('inlandLocation');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "countryCode", {
        get: function () {
            return this._searchIntermodalForm.get('countryCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "prefPort", {
        get: function () {
            return this._searchIntermodalForm.get('prefPort');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "inlandGeoScopeType", {
        get: function () {
            return this._searchIntermodalForm.get('inlandGeoScopeType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "includeAllPreferredPorts", {
        get: function () {
            return this._searchIntermodalForm.get('includeAllPreferredPorts');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "eqType", {
        get: function () {
            return this._searchIntermodalForm.get('equipmentType');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "transportMode", {
        get: function () {
            return this._searchIntermodalForm.get('transportMode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "startDate", {
        get: function () {
            return this._searchIntermodalForm.get('startDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "endDate", {
        get: function () {
            return this._searchIntermodalForm.get('endDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "eqSize20", {
        get: function () {
            return this._searchIntermodalForm.get('eq20');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "eqSize40", {
        get: function () {
            return this._searchIntermodalForm.get('eq40');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "weight20", {
        get: function () {
            return this._searchIntermodalForm.get('weight20');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "weight40", {
        get: function () {
            return this._searchIntermodalForm.get('weight40');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntermodalSearchReactiveForm.prototype, "weigthBasedOnly", {
        get: function () {
            return this._searchIntermodalForm.get('weightBasedOnly');
        },
        enumerable: true,
        configurable: true
    });
    return IntermodalSearchReactiveForm;
}());



/***/ }),

/***/ "./src/app/intermodal/im.search/search-intermodal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/intermodal/im.search/search-intermodal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>Form value: {{ form.value | json }}</p>\r\n<p>Form status: {{ form.status | json }}</p>\r\n<p>PrefPorts: {{ filteredPortGeoScopes | json }}</p>\r\n-->\r\n<form class=\"form-style-9 mdl-color-text--light-blue-900\" style=\"background: #ecf4ff;\"\r\n      [formGroup]=\"form\"\r\n      novalidate (ngSubmit)=\"filterKeyFigures()\">\r\n  <div id=\"im-search-form-title\" style=\"text-align: center;font-weight: bold;\">\r\n    {{ title }}\r\n  </div>\r\n  <div>\r\n\r\n    <mat-spinner [style.display]=\"showSpinner ? 'block' :'none'\"></mat-spinner>\r\n  </div>\r\n\r\n  <!--  Service, Pre-OnCarriage -->\r\n  <div *ngIf=\"isCollapsed\">\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <span>Include Validator for:</span>\r\n\r\n      <mat-grid-list cols=\"5\" style=\"  margin: 10px;\" rowHeight=\"65px;\">\r\n        <mat-grid-tile colspan=\"3\">\r\n\r\n          <div>\r\n            <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"includeKF\">\r\n              <input type=\"checkbox\" id=\"includeKF\" class=\"mdl-checkbox__input\" formControlName=\"includeKeyFigure\">\r\n              <span class=\"mat-small\">Key Figures</span>\r\n            </label>\r\n            <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"includeTariff\">\r\n              <input type=\"checkbox\" id=\"includeTariff\" class=\"mdl-checkbox__input\" formControlName=\"includeImTariff\">\r\n              <span class=\"mat-small\">Im Tariffs</span>\r\n            </label>\r\n            <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"includeSchedule\">\r\n              <input type=\"checkbox\" id=\"includeSchedule\" class=\"mdl-checkbox__input\"\r\n                     formControlName=\"includeImSchedule\">\r\n              <span class=\"mat-small\">Im Schedules</span>\r\n            </label>\r\n          </div>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile colspan=\"2\">\r\n          <div>\r\n            <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"preCarriage\">\r\n              <input type=\"radio\" id=\"preCarriage\" class=\"mdl-radio__button\" formControlName=\"preOnCarriage\"\r\n                     value=\"true\">\r\n              <span class=\"mat-small\">PreCarriage</span>\r\n            </label>\r\n            <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"onCarriage\">\r\n              <input type=\"radio\" id=\"onCarriage\" class=\"mdl-radio__button\" formControlName=\"preOnCarriage\"\r\n                     value=\"false\">\r\n              <span class=\"mat-small\">OnCarriage</span>\r\n            </label>\r\n          </div>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </div>\r\n\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <!--- Inland Location, Country Code, Geo Scope Type Transport Mode -->\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;  margin-bottom: 10px;\">\r\n        <input matInput placeholder=\"Inland Location\" formControlName=\"inlandLocation\" [matAutocomplete]=\"autoFrom\">\r\n        <mat-hint align=\"start\">e.g. DEDUS</mat-hint>\r\n        <mat-error>\r\n        <span\r\n          *ngIf=\"!form.get('inlandLocation').valid && form.get('inlandLocation').touched\">Please enter Inland Location !</span>\r\n        </mat-error>\r\n        <mat-autocomplete #autoFrom=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of filteredInlandGeoScopes\" [value]=\"item.locationCode\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 120px; margin-left: 20px; margin-right: 20px;\"\r\n                      [ngClass]=\"{'isHidden': ! isCountryDisplayed()}\">\r\n        <input id=\"countryCodeControl\" matInput placeholder=\"Country Code\" formControlName=\"countryCode\"\r\n               [matAutocomplete]=\"autoCountry\">\r\n        <mat-error>\r\n          <span *ngIf=\"!form.get('countryCode').valid && form.get('countryCode').touched\">Enter e.g. DE, BR !</span>\r\n        </mat-error>\r\n        <mat-autocomplete #autoCountry=\"matAutocomplete\">\r\n          <mat-option id=\"countryCodeOption\" *ngFor=\"let country of filteredCountries\" [value]=\"country.code\"\r\n                      style=\"height: 30px; line-height: 20px;\">\r\n            <span class=\"smallFont\"> {{ country.code }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <div style=\"margin-bottom: 15px; margin-left: 20px; margin-right: 10px;\"> Type:\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-1\">\r\n          <input type=\"radio\" id=\"option-1\" class=\"mdl-radio__button\" formControlName=\"inlandGeoScopeType\" value=\"L\">\r\n          <span class=\"mat-small\">Location</span>\r\n        </label>\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-2\">\r\n          <input type=\"radio\" id=\"option-2\" class=\"mdl-radio__button\" formControlName=\"inlandGeoScopeType\" value=\"T\">\r\n          <span class=\"mat-small\">City</span>\r\n        </label>\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-3\">\r\n          <input type=\"radio\" id=\"option-3\" class=\"mdl-radio__button\" formControlName=\"inlandGeoScopeType\" value=\"F\">\r\n          <span class=\"mat-small\">Facility</span>\r\n        </label>\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-4\">\r\n          <input type=\"radio\" id=\"option-4\" class=\"mdl-radio__button\" formControlName=\"inlandGeoScopeType\" value=\"P\">\r\n          <span class=\"mat-small\">Postal Code</span>\r\n        </label>\r\n      </div>\r\n      <div style=\"margin-top: 5px;  margin-left: 20px;\">TP Mode:\r\n        <select placeholder=\"transport mode\" formControlName=\"transportMode\"\r\n                class=\"mdl-color-text--light-blue-900\">\r\n          <option *ngFor=\"let t of transportModes\" [value]=\"t\">{{t}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <!--- Preferred Port: Location, GeoSocope Types -->\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <div *ngIf=\"allPortsSelected()\">\r\n        <span style=\"margin-top: 5px;  margin-left: 20px;\">Preferred Ports: </span>\r\n\r\n        <span class=\"mat-small\" *ngFor=\"let item of filteredPortGeoScopes; let isLast =last\"\r\n              style=\"margin-top: 5px;  margin-left: 20px;\">\r\n          {{ item.locationCode}} {{isLast ? '' : ', '}}\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"! allPortsSelected()\">\r\n\r\n        <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n          <mat-select placeholder=\"Preferred Ports\" formControlName=\"prefPort\">\r\n            <mat-option *ngFor=\"let port of filteredPortGeoScopes\" [value]=\"port.locationCode\">\r\n              {{port.locationCode}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div style=\" padding:5px; margin: 5px;\">\r\n        <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"includeAll\">\r\n          <input type=\"checkbox\" id=\"includeAll\" class=\"mdl-checkbox__input\" formControlName=\"includeAllPreferredPorts\">\r\n          <span class=\"mat-small\">Include All Preferred Ports</span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <!--- Start and End Date -->\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px; \">\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"start date\"\r\n               formControlName=\"startDate\">\r\n        <mat-error>\r\n          <span *ngIf=\"!form.get('startDate').valid && form.get('startDate').touched\">Please enter Start Date!</span>\r\n        </mat-error>\r\n\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 150px;\">\r\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"end date\"\r\n               formControlName=\"endDate\" readonly>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <!--- Equipment -->\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <mat-error>\r\n        <span *ngIf=\"! eqSizeSelected()\">Please enter an EQ Size!</span>\r\n      </mat-error>\r\n      <mat-grid-list cols=\"7\">\r\n        <mat-grid-tile colspan=\"3\">\r\n          <span class=\"mat-small\" style=\"margin-left: 15px; margin-right: 10px;\">EQ Size:</span>\r\n          <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"checkbox-1\">\r\n            <input type=\"checkbox\" id=\"checkbox-1\" class=\"mdl-checkbox__input\" formControlName=\"eq20\">\r\n            <span class=\"mat-small\">20'</span>\r\n          </label>\r\n          <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"checkbox-2\">\r\n            <input type=\"checkbox\" id=\"checkbox-2\" class=\"mdl-checkbox__input\" formControlName=\"eq40\">\r\n            <span class=\"mat-small\">40'</span>\r\n          </label>\r\n        </mat-grid-tile>\r\n\r\n        <mat-grid-tile colspan=\"4\">\r\n          <div class=\"mat-small\" style=\"margin-bottom: 10px; margin-top: 11px; \"> EQ Group:\r\n            <select formControlName=\"equipmentType\" class=\"mdl-color-text--light-blue-900\"\r\n                    style=\"width: 100px; \">\r\n              <option class=\"mdl-color-text--light-blue-900\" *ngFor=\"let e of equipmentTypes\" [value]=\"e\">{{e}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </mat-grid-tile>\r\n\r\n      </mat-grid-list>\r\n    </div>\r\n\r\n    <!--- Weight Class -->\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid;  margin: 5px; \">\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px; \">\r\n        <input matInput placeholder=\"Gross Weight 20' (Tons)\"\r\n               formControlName=\"weight20\">\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px;\">\r\n        <input matInput placeholder=\"Gross Weight 40' (Tons)\"\r\n               formControlName=\"weight40\">\r\n      </mat-form-field>\r\n      <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" style=\"margin-left: 20px;\"\r\n             for=\"weigh-based-only\">\r\n        <input type=\"checkbox\" id=\"weigh-based-only\" class=\"mdl-checkbox__input\" formControlName=\"weightBasedOnly\">\r\n        <span class=\"mat-small\">Weight Based Only</span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid;  margin: 5px; padding: 10px; \">\r\n    <button type=\"button\" mat-raised-button (click)=\"toggle()\">{{button_name}}</button>\r\n    <button type=\"button\" mat-raised-button (click)=\"reset()\">Reset</button>\r\n    <button mat-raised-button type=”submit” [disabled]=\"isInvalid()\">\r\n      <mat-icon>search</mat-icon>\r\n    </button>\r\n  </div>\r\n</form>\r\n<div *ngIf=\"keyFigures.length > 0\">\r\n  <app-result-intermodal [keyFigures]=\"keyFigures\"></app-result-intermodal>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/intermodal/im.search/search-intermodal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/intermodal/im.search/search-intermodal.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchIntermodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIntermodalComponent", function() { return SearchIntermodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_enum_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/enum.index */ "./src/app/enums/enum.index.ts");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_geoscope_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/geoscope.service */ "./src/app/services/geoscope.service.ts");
/* harmony import */ var _services_im_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/im.search.service */ "./src/app/intermodal/services/im.search.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
/* harmony import */ var _search_intermodal_component_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-intermodal.component.form */ "./src/app/intermodal/im.search/search-intermodal.component.form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchIntermodalComponent = /** @class */ (function () {
    function SearchIntermodalComponent(enumService, countryService, masterDataService, searchService) {
        this.enumService = enumService;
        this.countryService = countryService;
        this.masterDataService = masterDataService;
        this.searchService = searchService;
        this.title = 'Search Key Figures';
        this.isCollapsed = true;
        this.button_name = 'Hide Form';
        this.showSpinner = false;
        this.isActive = false;
        this.filteredInlandGeoScopes = [];
        this.filteredPortGeoScopes = [];
        this.filteredCountries = [];
        this.keyFigures = [];
        this.equipmentSizes = this.enumService.getEnumValues(_enums_enum_index__WEBPACK_IMPORTED_MODULE_1__["EquipmentSize"]);
        this.equipmentTypes = this.enumService.getEnumKeys(_enums_enum_index__WEBPACK_IMPORTED_MODULE_1__["EquipmentGroup"]);
        this.geoScopeTypes = this.enumService.getEnumValues(_enums_enum_index__WEBPACK_IMPORTED_MODULE_1__["GeoScopeType"]);
        this.transportModes = this.enumService.getEnumValues(_enums_enum_index__WEBPACK_IMPORTED_MODULE_1__["IntermodalMode"]);
        this.formClass = new _search_intermodal_component_form__WEBPACK_IMPORTED_MODULE_8__["IntermodalSearchReactiveForm"]();
        // set default values in form
        this.patchDefaultValues();
        // event handler
        this.onInlandLocationChanges(this.formClass.inlandLocation);
        this.onCountryCodeChanges(this.formClass.countryCode);
        this.onPortLocationChanges(this.formClass.prefPort);
        this.onStartDateChanges(this.formClass.startDate);
        this.onInlandGeoScopeChanges(this.formClass.inlandGeoScopeType);
        this.onIncludeAllPreferredPorts(this.formClass.includeAllPreferredPorts);
    }
    Object.defineProperty(SearchIntermodalComponent.prototype, "form", {
        get: function () {
            return this.formClass.searchIntermodalForm;
        },
        enumerable: true,
        configurable: true
    });
    SearchIntermodalComponent.prototype.isCountryDisplayed = function () {
        return this.formClass.inlandGeoScopeType.value === 'T' || this.formClass.inlandGeoScopeType.value === 'P';
    };
    SearchIntermodalComponent.prototype.eqSizeSelected = function () {
        return this.formClass.eqSize20.value === true || this.formClass.eqSize40.value === true;
    };
    SearchIntermodalComponent.prototype.allPortsSelected = function () {
        return this.formClass.includeAllPreferredPorts.value === true;
    };
    SearchIntermodalComponent.prototype.toggle = function () {
        this.isCollapsed = !this.isCollapsed;
        // CHANGE THE TEXT OF THE BUTTON.
        if (this.isCollapsed) {
            this.button_name = 'Hide Form';
        }
        else {
            this.button_name = 'Show Form';
        }
    };
    SearchIntermodalComponent.prototype.isInvalid = function () {
        return this.form.invalid;
    };
    SearchIntermodalComponent.prototype.filterKeyFigures = function () {
        var _this = this;
        this.searchService.getKeyFigures(this.form.value).subscribe(function (result) {
            if (result && result.length > 0) {
                _this.keyFigures = result;
                _this.toggle();
            }
        });
    };
    SearchIntermodalComponent.prototype.reset = function () {
        this.patchDefaultValues();
        this.setEndDate(this.formClass.startDate.value);
        this.filteredPortGeoScopes = [];
        this.filteredInlandGeoScopes = [];
    };
    /**
     *
     * @param {AbstractControl} control
     */
    SearchIntermodalComponent.prototype.onInlandLocationChanges = function (control) {
        var _this = this;
        console.log('onInlandLocationChanges:' + control.value);
        var locationObserver = {
            next: function (data) {
                var theLength = data.toString().trim().length;
                if (theLength === 0) {
                    _this.filteredInlandGeoScopes = [];
                    _this.filteredPortGeoScopes = [];
                    _this.formClass.inlandLocation.markAsPristine();
                    return;
                }
                if (theLength <= _this.determineMinInputLength()) {
                    _this.filteredInlandGeoScopes = [];
                    _this.filteredPortGeoScopes = [];
                    return;
                }
                _this.filterLocations(data, _this.formClass.inlandGeoScopeType.value, _this.formClass.countryCode.value);
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
        };
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(locationObserver);
    };
    /**
     *
     * @param {string} location
     * @param {string} type
     * @param {string} country
     * @returns {any}
     */
    SearchIntermodalComponent.prototype.filterLocations = function (location, type, country) {
        var _this = this;
        this.masterDataService.filterImLocations(location, type, country).subscribe(function (result) {
            console.log('result:' + JSON.stringify(result));
            if (result.length === 1) {
                var singleRow = result[0].locationCode;
                _this.formClass.inlandLocation.patchValue(singleRow.toUpperCase());
                _this.filteredInlandGeoScopes = [];
                _this.filteredPortGeoScopes = [];
                console.log('single:' + JSON.stringify(_this.formClass.inlandLocation.value));
                _this.retrievePreferredPorts();
            }
            else if (result.length <= 1) {
                _this.retrievePreferredPorts();
            }
            else {
                _this.filteredInlandGeoScopes = result;
            }
            return result;
        });
    };
    /**
     *
     * @param {AbstractControl} control
     */
    SearchIntermodalComponent.prototype.onCountryCodeChanges = function (control) {
        var _this = this;
        console.log('onCountryCodeChanges for value:', control.value);
        control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) { return data.toString().length > 0; }))
            .subscribe(function (data) { return _this.filterCountries(data); });
    };
    SearchIntermodalComponent.prototype.filterCountries = function (countryCode) {
        var _this = this;
        console.log('filterCountries for:', countryCode);
        var countryObserver = {
            next: function (result) {
                if (result.length === 1) {
                    _this.formClass.countryCode.patchValue(result[0].code);
                    _this.filteredCountries = [];
                }
                else {
                    _this.filteredCountries = result;
                }
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('finished'); },
        };
        this.countryService.filterCountryCode(countryCode).subscribe(countryObserver);
    };
    /**
     *
     * @param {AbstractControl} control
     */
    SearchIntermodalComponent.prototype.onInlandGeoScopeChanges = function (control) {
        var _this = this;
        console.log('onInlandGeoScopeChanges:' + control.value);
        var geoScopeObserver = {
            next: function (data) {
                if (data === 'T' || data === 'P') {
                    _this.formClass.countryCode.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                    _this.formClass.countryCode.markAsTouched({ onlySelf: true });
                }
                else {
                    _this.formClass.countryCode.patchValue('');
                    _this.formClass.countryCode.setValidators([]);
                }
                _this.formClass.countryCode.updateValueAndValidity({ onlySelf: true, emitEvent: true });
                _this.formClass.inlandLocation.patchValue('');
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
        };
        console.log('onInlandGeoScopeChanges: before ');
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(geoScopeObserver);
    };
    /**
     *
     * @param {AbstractControl} control
     */
    SearchIntermodalComponent.prototype.onPortLocationChanges = function (control) {
        var _this = this;
        control.valueChanges
            .subscribe(function (data) {
            _this.filteredPortGeoScopes = [];
            _this.retrievePreferredPorts();
        });
    };
    /**
     *
     */
    SearchIntermodalComponent.prototype.retrievePreferredPorts = function () {
        var _this = this;
        this.masterDataService.filterPortLocations(this.formClass.inlandLocation.value).subscribe(function (result) {
            console.log('result:' + JSON.stringify(result));
            if (result.length === 1) {
                var singleRow = result[0].locationCode;
                _this.formClass.prefPort.patchValue(singleRow.toUpperCase());
                _this.filteredPortGeoScopes = [];
            }
            else {
                _this.filteredPortGeoScopes = result;
            }
        });
    };
    /**
     *
     * @param {AbstractControl} control
     */
    SearchIntermodalComponent.prototype.onIncludeAllPreferredPorts = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            if (data) {
                _this.retrievePreferredPorts();
            }
        });
    };
    SearchIntermodalComponent.prototype.onStartDateChanges = function (control) {
        var _this = this;
        control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (data) {
            _this.formClass.startDate.patchValue(new Date(data).toISOString());
            _this.setEndDate(new Date(data));
        });
    };
    SearchIntermodalComponent.prototype.setEndDate = function (date) {
        var newDay = (date.getDate() + 14);
        var newDate = new Date();
        newDate.setDate(newDay);
        this.formClass.endDate.patchValue(newDate.toISOString());
    };
    SearchIntermodalComponent.prototype.patchDefaultValues = function () {
        this.formClass.includeKeyFigure.patchValue(true);
        this.formClass.includeImTariff.patchValue(false);
        this.formClass.includeImSchdeule.patchValue(false);
        this.formClass.eqSize20.patchValue(true);
        this.formClass.eqSize40.patchValue(true);
        this.formClass.preOnCarriage.patchValue('true');
        this.formClass.eqType.patchValue('GENERAL');
        this.formClass.transportMode.patchValue('ALL');
        this.formClass.inlandLocation.patchValue('');
        this.formClass.prefPort.patchValue('');
        this.formClass.inlandGeoScopeType.patchValue('L');
        this.formClass.includeAllPreferredPorts.patchValue(true);
        this.formClass.startDate.patchValue(new Date().toISOString());
        this.setEndDate(new Date(this.formClass.startDate.value));
        this.formClass.includeKeyFigure.disable({ onlySelf: true, emitEvent: false });
        this.formClass.weight20.patchValue('');
        this.formClass.weight40.patchValue('');
        this.formClass.weigthBasedOnly.patchValue(false);
    };
    SearchIntermodalComponent.prototype.determineMinInputLength = function () {
        var length = 1;
        var type;
        type = this.enumService.getKeyByValue(_enums_enum_index__WEBPACK_IMPORTED_MODULE_1__["GeoScopeType"], this.formClass.inlandGeoScopeType.value);
        switch (type) {
            case 'LOCATION':
                length = 2;
                break;
            case 'CITY':
                length = 2;
                break;
            case 'FACILITY':
                length = 4;
                break;
            case 'POSTAL_CODE':
                length = 3;
                break;
            default:
        }
        return length;
    };
    SearchIntermodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-intermodal',
            template: __webpack_require__(/*! ./search-intermodal.component.html */ "./src/app/intermodal/im.search/search-intermodal.component.html"),
            styles: [__webpack_require__(/*! ./search-intermodal.component.css */ "./src/app/intermodal/im.search/search-intermodal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_enum_service__WEBPACK_IMPORTED_MODULE_2__["EnumService"], _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            _services_geoscope_service__WEBPACK_IMPORTED_MODULE_5__["GeoScopeService"], _services_im_search_service__WEBPACK_IMPORTED_MODULE_6__["IntermodalSearchService"]])
    ], SearchIntermodalComponent);
    return SearchIntermodalComponent;
}());



/***/ }),

/***/ "./src/app/intermodal/services/im.search.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/intermodal/services/im.search.service.ts ***!
  \**********************************************************/
/*! exports provided: IntermodalSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermodalSearchService", function() { return IntermodalSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _enums_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/app-enum */ "./src/app/enums/app-enum.ts");
/**
 * Created by ekirschning on 10.04.2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntermodalSearchService = /** @class */ (function () {
    function IntermodalSearchService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:8080/nre';
        this.resource = '/';
        this.objectType = _enums_app_enum__WEBPACK_IMPORTED_MODULE_2__["EntityEnum"].INTERMODAL_RESULT;
    }
    IntermodalSearchService.getHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    };
    IntermodalSearchService.prototype.getUrl = function () {
        return this.serverApi + this.resource + this.objectType + this.resource;
    };
    IntermodalSearchService.prototype.getKeyFigures = function (imSearchModel) {
        console.log('#filter key figures in service');
        var search_params = this.prepareSearchParams(imSearchModel);
        console.log('#search params' + JSON.stringify(search_params));
        var URI = this.getUrl() + 'filter/';
        return this.http.get(URI, { params: search_params });
    };
    IntermodalSearchService.prototype.prepareSearchParams = function (imSearchModel) {
        console.log('startDate...');
        console.log('#: ' + JSON.stringify(imSearchModel['startDate']));
        console.log('.....startDate');
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('isPreCarriage', imSearchModel['preOnCarriage'])
            .set('includeImTariff', imSearchModel['includeImTariff'])
            .set('includeImSchedule', imSearchModel['includeImSchedule'])
            .set('inlandLocation', imSearchModel['inlandLocation'])
            .set('inlandGeoScopeType', imSearchModel['inlandGeoScopeType'])
            .set('countryCode', imSearchModel['countryCode'])
            .set('portLocation', imSearchModel['prefPort'])
            .set('includeAllPrefPorts', imSearchModel['includeAllPreferredPorts'])
            .set('transportMode', imSearchModel['transportMode'])
            .set('equipmentType', imSearchModel['equipmentType'])
            .set('eq20', imSearchModel['eq20'])
            .set('eq40', imSearchModel['eq40'])
            .set('eqHC', imSearchModel['eqHC'])
            .set('weight20', imSearchModel['weight20'])
            .set('weight40', imSearchModel['weight40'])
            .set('weightBasedOnly', imSearchModel['weightBasedOnly'])
            .set('startDate', imSearchModel['startDate'].toString().substring(0, 10))
            .set('endDate', imSearchModel['endDate'].toString().substring(0, 10));
        return search_params;
    };
    IntermodalSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IntermodalSearchService);
    return IntermodalSearchService;
}());



/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.module.ts":
/*!********************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.module.ts ***!
  \********************************************************/
/*! exports provided: MissingRoutingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingRoutingsModule", function() { return MissingRoutingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _missing_routes_search_component_search_routes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./missing-routes.search.component/search-routes.component */ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.ts");
/* harmony import */ var _missing_routes_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./missing-routes.routing.module */ "./src/app/missingRoutes/missing-routes.routing.module.ts");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _missing_routes_result_component_masterdata_routes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./missing-routes.result.component/masterdata-routes.component */ "./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.ts");
/* harmony import */ var _services_routes_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/routes.search.service */ "./src/app/missingRoutes/services/routes.search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MissingRoutingsModule = /** @class */ (function () {
    function MissingRoutingsModule() {
    }
    MissingRoutingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_missing_routes_result_component_masterdata_routes_component__WEBPACK_IMPORTED_MODULE_8__["MissingRoutesResultComponent"], _missing_routes_search_component_search_routes_component__WEBPACK_IMPORTED_MODULE_5__["SearchRoutesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _missing_routes_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutesRoutingModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"]
            ],
            providers: [_services_routes_search_service__WEBPACK_IMPORTED_MODULE_9__["RoutesSearchService"], _services_enum_service__WEBPACK_IMPORTED_MODULE_7__["EnumService"]],
        })
    ], MissingRoutingsModule);
    return MissingRoutingsModule;
}());



/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-header-cell.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\nmat-row:nth-child(even) {\r\n  background-color: #ecf4ff;;\r\n}\r\n\r\nmat-row:nth-child(odd) {\r\n  background-color: #ecf4dd;;\r\n}\r\n"

/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort matSort matSortDirection=\"asc\">\r\n    <!--    displayedColumns = ['trade', 'pol', 'pod', 'ts1', 'ts2', 'ts3', '_contractno', '_productno', '_reasoncode'];\r\n    -->\r\n    <!-- Trade Column -->\r\n    <ng-container matColumnDef=\"trade\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>trade</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.trade}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- POL Column -->\r\n    <ng-container matColumnDef=\"pol\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>POL</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.pol}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- POD Column -->\r\n    <ng-container matColumnDef=\"pod\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>POD</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element \"> {{element.pod}}</mat-cell>\r\n    </ng-container>\r\n    <!-- ts1 Column -->\r\n    <ng-container matColumnDef=\"ts1\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>T/S 1</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ts1}}</mat-cell>\r\n    </ng-container>\r\n    <!-- ts2 Column -->\r\n    <ng-container matColumnDef=\"ts2\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>T/S 2</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ts2}}</mat-cell>\r\n    </ng-container>\r\n    <!-- ts3 Column -->\r\n    <ng-container matColumnDef=\"ts3\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>T/S 3</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ts3}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Contract Column -->\r\n    <ng-container matColumnDef=\"contractno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Contract</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.contractno }}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Product no Column -->\r\n    <ng-container matColumnDef=\"productno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Product No</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.productno}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Partner code Column -->\r\n    <ng-container matColumnDef=\"partnercode\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Partner Code</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.partnercode}}</mat-cell>\r\n    </ng-container>\r\n    <!-- Reson code -->\r\n    <ng-container matColumnDef=\"reasoncode\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Error Code</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.reasoncode}}</mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n                 [pageSize]=\"5\"\r\n                 [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MissingRoutesResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingRoutesResultComponent", function() { return MissingRoutesResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MissingRoutesResultComponent = /** @class */ (function () {
    function MissingRoutesResultComponent() {
        this.routings = [];
        this.displayedColumns = ['trade', 'pol', 'pod', 'ts1', 'ts2', 'ts3', 'contractno', 'productno', 'partnercode', 'reasoncode'];
    }
    MissingRoutesResultComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    MissingRoutesResultComponent.prototype.ngAfterViewInit = function () {
        console.log('after view init');
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    MissingRoutesResultComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    MissingRoutesResultComponent.prototype.ngOnChanges = function (changes) {
        console.log('on changes' + JSON.stringify(changes));
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.routings);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MissingRoutesResultComponent.prototype, "routings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MissingRoutesResultComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], MissingRoutesResultComponent.prototype, "paginator", void 0);
    MissingRoutesResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-routes',
            template: __webpack_require__(/*! ./masterdata-routes.component.html */ "./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.html"),
            styles: [__webpack_require__(/*! ./masterdata-routes.component.css */ "./src/app/missingRoutes/missing-routes.result.component/masterdata-routes.component.css")]
        })
    ], MissingRoutesResultComponent);
    return MissingRoutesResultComponent;
}());



/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.routing.module.ts ***!
  \****************************************************************/
/*! exports provided: routes, RoutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRoutingModule", function() { return RoutesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _missing_routes_search_component_search_routes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missing-routes.search.component/search-routes.component */ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'searchRoutes', component: _missing_routes_search_component_search_routes_component__WEBPACK_IMPORTED_MODULE_2__["SearchRoutesComponent"] }
];
var RoutesRoutingModule = /** @class */ (function () {
    function RoutesRoutingModule() {
    }
    RoutesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutesRoutingModule);
    return RoutesRoutingModule;
}());



/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.search.component/search-routes.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-style-9 {\r\n  max-width: 400px;\r\n  background: #FAFAFA;\r\n  padding: 10px;\r\n  margin: 20px auto;\r\n  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\r\n  border-radius: 10px;\r\n  border: 2px solid #305A72;\r\n}\r\n\r\n.smallFont {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.serviceType {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 5px 0px 10px 15px;\r\n}\r\n\r\n.floatLeft {\r\n  float: left;\r\n  padding: 1px 1px 1px 1px;\r\n  margin: 1px 1px 1px 1px;\r\n  font-weight: bold;\r\n  color: #13557b;\r\n  height: 4px;\r\n  line-height: 0px;\r\n}\r\n\r\n/* ml */\r\n\r\n.stopFloat {\r\n  display: block;\r\n  float: none;\r\n  clear: both;\r\n  height: 0px; /* 1px, wenn kleine Linie bleiben soll */\r\n  font-size: 0px;\r\n  line-height: 0px;\r\n  background: #ffffff;\r\n}\r\n\r\nselect:hover {\r\n  background: rgba(0, 0, 0, 0);\r\n  color: #3a7999;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 5px 0;\r\n  border-radius: 6px;\r\n  z-index: 1;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover {\r\n  visibility: visible;\r\n}\r\n\r\n.isHidden {\r\n  display: none;\r\n}\r\n\r\n.isShown {\r\n  display: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.search.component/search-routes.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Form value: {{ form.value | json }}</p>\r\n<p>Form status: {{ form.status | json }}</p>\r\n\r\n<form class=\"form-style-9 mdl-color-text--light-blue-900\" style=\"background: #ecf4ff;\"\r\n      [formGroup]=\"form\"\r\n      novalidate (ngSubmit)=\"filterMissingRoutes()\">\r\n  <div id=\"im-search-form\" style=\"text-align: center;font-weight: bold;\">\r\n    {{ title }}\r\n\r\n    <ng-template #noResult>\r\n      No results found.\r\n    </ng-template>\r\n    <div>\r\n\r\n    </div>\r\n\r\n    <mat-spinner [style.display]=\"showSpinner ? 'block' :'none'\"></mat-spinner>\r\n  </div>\r\n\r\n  <!--  Rules -->\r\n  <div *ngIf=\"isCollapsed\">\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <!--- Trade -->\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput #tradeMessage maxlength=\"5\" placeholder=\"Trade\" formControlName=\"trade\"\r\n               [matAutocomplete]=\"trade\">\r\n        <mat-hint align=\"start\"> e.g. EANEU, EACCA</mat-hint>\r\n        <mat-hint align=\"end\">{{tradeMessage.value.length}} / 5</mat-hint>\r\n\r\n        <mat-autocomplete #trade=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleTrades\" [value]=\"item.trade_code\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.trade_code }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <!--- Contract -->\r\n    </div>\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <div *ngIf=\" searchSingleContract()\">\r\n        <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n          <input matInput placeholder=\"Agreement No\" formControlName=\"contract\" [matAutocomplete]=\"contract\">\r\n          <mat-autocomplete #contract=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let contract of possibleContracts\" [value]=\"contract.no\"\r\n                        style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n              <span class=\"smallFont\"> {{ contract.no }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div *ngIf=\"! searchSingleContract()\">\r\n        <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n          <input matInput formControlName=\"contractGroup\" #message maxlength=\"5\" placeholder=\"Agreement No Group\"\r\n                 [matAutocomplete]=\"contractGroup\">\r\n          <mat-hint align=\"start\"> e.g. ANCC5, ANCC7</mat-hint>\r\n          <mat-hint align=\"end\">{{message.value.length}} / 5</mat-hint>\r\n          <mat-autocomplete #contractGroup=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let contractGroup of possibleContractGroups\" [value]=\"contractGroup.no\"\r\n                        style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n              <span class=\"smallFont\"> {{ contractGroup.no }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div style=\" padding:5px; margin: 5px;\">\r\n        <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"includeAll\">\r\n          <input type=\"checkbox\" id=\"includeAll\" class=\"mdl-checkbox__input\" formControlName=\"singleContractOnly\">\r\n          <span class=\"mat-small\">One Single Contract Only</span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <!--- Port of Loading -->\r\n      <div *ngIf=\"! byCountry()\">\r\n\r\n        <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n          <input matInput #polMessage maxlength=\"3\" placeholder=\"Port of Loading\" formControlName=\"portOfLoading\"\r\n                 [matAutocomplete]=\"autoFrom\">\r\n          <mat-hint align=\"start\">starts with: e.g. CNC</mat-hint>\r\n          <mat-hint align=\"end\">{{polMessage.value.length}} / 3</mat-hint>\r\n\r\n          <mat-autocomplete #autoFrom=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let item of possiblePOLs\" [value]=\"item.locationCode\"\r\n                        style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n              <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <!--- Port of Destination -->\r\n      <div *ngIf=\" byCountry()\">\r\n\r\n        <mat-form-field style=\"width: 100px; margin-left: 20px; margin-right: 20px;\">\r\n          <input matInput placeholder=\"POL-Country\" formControlName=\"countryCode\" [matAutocomplete]=\"autoCountry\">\r\n          <mat-hint align=\"start\">e.g. DE, CN</mat-hint>\r\n\r\n          <mat-autocomplete #autoCountry=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let country of possibleCountries\" [value]=\"country.country_code\"\r\n                        style=\"height: 30px; line-height: 20px;\">\r\n              <span class=\"smallFont\"> {{ country.country_code }}</span>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div style=\" padding:5px; margin: 5px;\">\r\n        <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"byCountryCode\">\r\n          <input type=\"checkbox\" id=\"byCountryCode\" class=\"mdl-checkbox__input\" formControlName=\"byCountryCode\">\r\n          <span class=\"mat-small\">POL by Country Code</span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid;  margin: 5px; padding: 10px; \">\r\n    <button type=\"button\" mat-raised-button (click)=\"toggle()\">{{button_name}}</button>\r\n    <button type=\"button\" mat-raised-button (click)=\"reset()\">Reset</button>\r\n    <button mat-raised-button type=submit [disabled]=\"isInvalid()\">\r\n      <mat-icon>search</mat-icon>\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<div *ngIf=\"routes.length > 0; else noResult\">\r\n  <app-result-routes [routings]=\"routes\"></app-result-routes>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/missingRoutes/missing-routes.search.component/search-routes.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SearchRoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutesComponent", function() { return SearchRoutesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_geoscope_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/geoscope.service */ "./src/app/services/geoscope.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_routes_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/routes.search.service */ "./src/app/missingRoutes/services/routes.search.service.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchRoutesComponent = /** @class */ (function () {
    function SearchRoutesComponent(enumService, countryService, masterDataService, searchService) {
        this.enumService = enumService;
        this.countryService = countryService;
        this.masterDataService = masterDataService;
        this.searchService = searchService;
        this.title = 'COQU Missing Routes';
        this.isCollapsed = true;
        this.button_name = 'Hide Form';
        this.showSpinner = false;
        this.isActive = false;
        this.routes = [];
        this.possiblePOLs = [];
        this.possibleTrades = [];
        this.possibleContracts = [];
        this.possibleContractGroups = [];
        this.possibleCountries = [];
        console.log('constructor');
        this.searchFormOceanRoutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            trade: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            contract: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            singleContractOnly: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            contractGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            portOfLoading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            countryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            byCountryCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
        // set default values in form
        this.patchDefaultValues();
        // event handler
        this.onTradeChanges(this.trade);
        this.onContractChanges(this.contract);
        this.onContractGroupChanges(this.contractGroup);
        this.onSingleContractOnly(this.singleContractOnly);
        this.onPortOfLoadingChanges(this.portOfLoading);
        this.onCountryCodeChanges(this.countryCode);
    }
    Object.defineProperty(SearchRoutesComponent.prototype, "form", {
        get: function () {
            return this.searchFormOceanRoutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "trade", {
        get: function () {
            return this.form.get('trade');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "contract", {
        get: function () {
            return this.form.get('contract');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "contractGroup", {
        get: function () {
            return this.form.get('contractGroup');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "portOfLoading", {
        get: function () {
            return this.form.get('portOfLoading');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "singleContractOnly", {
        get: function () {
            return this.form.get('singleContractOnly');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "countryCode", {
        get: function () {
            return this.form.get('countryCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchRoutesComponent.prototype, "byCountryCode", {
        get: function () {
            return this.form.get('byCountryCode');
        },
        enumerable: true,
        configurable: true
    });
    SearchRoutesComponent.prototype.toggle = function () {
        this.isCollapsed = !this.isCollapsed;
        // CHANGE THE TEXT OF THE BUTTON.
        if (this.isCollapsed) {
            this.button_name = 'Hide Form';
        }
        else {
            this.button_name = 'Show Form';
        }
    };
    SearchRoutesComponent.prototype.isInvalid = function () {
        return this.form.invalid;
    };
    SearchRoutesComponent.prototype.filterMissingRoutes = function () {
        var _this = this;
        console.log('filter ocean routes');
        this.showSpinner = false;
        this.routes = [];
        this.searchService.getRoutings(this.form.value).subscribe(function (result) {
            console.log('routings: ' + JSON.stringify(result));
            if (result && result.length > 0) {
                _this.routes = result;
                _this.toggle();
            }
        });
    };
    SearchRoutesComponent.prototype.reset = function () {
        this.patchDefaultValues();
        this.possiblePOLs = [];
        this.possibleContracts = [];
        this.possibleContractGroups = [];
        this.possibleTrades = [];
    };
    SearchRoutesComponent.prototype.onTradeChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possibleTrades = [];
                _this.trade.markAsDirty();
                return;
            }
            if (theLength < 2) {
                _this.possibleTrades = [];
                return;
            }
            _this.masterDataService.filterTrades(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].trade_code;
                    _this.trade.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.trade.value));
                    _this.trade.markAsUntouched();
                }
                else {
                    _this.possibleTrades = result;
                }
            });
        });
    };
    SearchRoutesComponent.prototype.onPortOfLoadingChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possiblePOLs = [];
                _this.portOfLoading.markAsDirty();
                return;
            }
            if (theLength < 2) {
                _this.possiblePOLs = [];
                return;
            }
            _this.masterDataService.filterPorts(data).subscribe(function (result) {
                if (result.length === 0) {
                    _this.portOfLoading.markAsTouched();
                }
                else if (result.length === 1) {
                    var singleRow = result[0].locationCode;
                    _this.portOfLoading.patchValue(singleRow.toUpperCase().substr(0, 3));
                    console.log('single:' + JSON.stringify(_this.portOfLoading.value));
                    _this.portOfLoading.markAsUntouched();
                }
                else {
                    _this.portOfLoading.markAsUntouched();
                    _this.possiblePOLs = result;
                }
            });
        });
    };
    SearchRoutesComponent.prototype.onCountryCodeChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            if (data.toString().trim().length === 0) {
                _this.possibleCountries = [];
                _this.countryCode.markAsPristine();
                return;
            }
            _this.countryService.filterCountries(data).subscribe(function (result) {
                if (result.length === 1) {
                    _this.countryCode.patchValue(result[0].code);
                    _this.possibleCountries = [];
                }
                else {
                    _this.possibleCountries = result;
                }
            });
        });
    };
    SearchRoutesComponent.prototype.onContractChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possibleContracts = [];
                _this.contract.markAsDirty();
                return;
            }
            if (theLength < 4) {
                _this.possibleContracts = [];
                return;
            }
            _this.masterDataService.filterContracts(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].no;
                    _this.contract.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.contract.value));
                    _this.possibleContracts = [];
                    _this.contract.markAsUntouched();
                }
                else {
                    _this.possibleContracts = result;
                }
            });
        });
    };
    SearchRoutesComponent.prototype.onContractGroupChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possibleContractGroups = [];
                _this.contractGroup.markAsDirty();
                return;
            }
            if (theLength < 4) {
                _this.possibleContractGroups = [];
                return;
            }
            _this.masterDataService.filterContractGroups(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].no;
                    _this.contractGroup.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.contract.value));
                    _this.possibleContractGroups = [];
                    _this.contractGroup.markAsUntouched();
                }
                else {
                    _this.possibleContractGroups = result;
                }
            });
        });
    };
    SearchRoutesComponent.prototype.onSingleContractOnly = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (data) {
            if (data) {
                console.log('single contract only');
                _this.contractGroup.setValidators([]);
                _this.contract.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                _this.contract.patchValue('');
                _this.contract.markAsDirty({ onlySelf: true });
                _this.possibleContracts = [];
            }
            else {
                console.log('contract group');
                _this.contract.setValidators([]);
                _this.contractGroup.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                _this.contractGroup.patchValue('');
                _this.contractGroup.markAsDirty({ onlySelf: true });
                _this.possibleContractGroups = [];
            }
        });
    };
    SearchRoutesComponent.prototype.searchSingleContract = function () {
        return this.singleContractOnly.value === true;
    };
    SearchRoutesComponent.prototype.byCountry = function () {
        return this.byCountryCode.value === true;
    };
    SearchRoutesComponent.prototype.patchDefaultValues = function () {
        this.trade.patchValue('');
        this.portOfLoading.patchValue('');
        this.contract.patchValue('');
        this.contractGroup.patchValue('');
        this.singleContractOnly.patchValue(false);
        this.byCountryCode.patchValue(true);
    };
    SearchRoutesComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    SearchRoutesComponent.prototype.ngOnChanges = function (changes) {
        console.log('on changes' + JSON.stringify(changes));
    };
    SearchRoutesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-ocean-routes',
            template: __webpack_require__(/*! ./search-routes.component.html */ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.html"),
            styles: [__webpack_require__(/*! ./search-routes.component.css */ "./src/app/missingRoutes/missing-routes.search.component/search-routes.component.css")]
        }),
        __metadata("design:paramtypes", [_services_enum_service__WEBPACK_IMPORTED_MODULE_1__["EnumService"], _services_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"],
            _services_geoscope_service__WEBPACK_IMPORTED_MODULE_3__["GeoScopeService"], _services_routes_search_service__WEBPACK_IMPORTED_MODULE_5__["RoutesSearchService"]])
    ], SearchRoutesComponent);
    return SearchRoutesComponent;
}());



/***/ }),

/***/ "./src/app/missingRoutes/services/routes.search.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/missingRoutes/services/routes.search.service.ts ***!
  \*****************************************************************/
/*! exports provided: RoutesSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesSearchService", function() { return RoutesSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _enums_app_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/app-enum */ "./src/app/enums/app-enum.ts");
/**
 * Created by ekirschning on 10.04.2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoutesSearchService = /** @class */ (function () {
    function RoutesSearchService(http) {
        this.http = http;
        this.serverApi = _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"].get('tomcat');
        this.resource = '/';
        this.objectType = _enums_app_enum__WEBPACK_IMPORTED_MODULE_3__["EntityEnum"].MISSING_ROUTINGS;
    }
    RoutesSearchService.getHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    };
    RoutesSearchService.prototype.getUrl = function () {
        return this.serverApi + this.resource + this.objectType + this.resource;
    };
    RoutesSearchService.prototype.getRoutings = function (imSearchModel) {
        console.log('search model:' + JSON.stringify(imSearchModel));
        console.log('typeof:' + typeof imSearchModel);
        var search_params = this.prepareSearchParams(imSearchModel);
        var URI = this.getUrl() + 'filter/';
        return this.http.get(URI, { params: search_params });
    };
    RoutesSearchService.prototype.prepareSearchParams = function (imSearchModel) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pol', imSearchModel['portOfLoading'])
            .set('trade', imSearchModel['trade'])
            .set('contract', imSearchModel['contract'])
            .set('contractgroup', imSearchModel['contractGroup'])
            .set('country', imSearchModel['countryCode']);
        return search_params;
    };
    RoutesSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoutesSearchService);
    return RoutesSearchService;
}());



/***/ }),

/***/ "./src/app/model/country.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/country.model.ts ***!
  \****************************************/
/*! exports provided: CountryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryModel", function() { return CountryModel; });
var CountryModel = /** @class */ (function () {
    function CountryModel(id, name, code) {
        this._id = id;
        this._name = name;
        this._code = code;
    }
    Object.defineProperty(CountryModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountryModel.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    return CountryModel;
}());



/***/ }),

/***/ "./src/app/model/geoscope.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/geoscope.model.ts ***!
  \*****************************************/
/*! exports provided: GeoScopeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoScopeModel", function() { return GeoScopeModel; });
/**
 * Created by ekirschning on 27.01.2018.
 */
var GeoScopeModel = /** @class */ (function () {
    function GeoScopeModel(location_id, locationCode, geoscopeType, countryCode) {
        this._locationCode = locationCode;
        this._geoScopeType = geoscopeType;
        this._countryCode = countryCode;
    }
    Object.defineProperty(GeoScopeModel.prototype, "locationCode", {
        get: function () {
            return this._locationCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoScopeModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoScopeModel.prototype, "geoScopeType", {
        get: function () {
            return this._geoScopeType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoScopeModel.prototype, "countryCode", {
        get: function () {
            return this._countryCode;
        },
        enumerable: true,
        configurable: true
    });
    return GeoScopeModel;
}());



/***/ }),

/***/ "./src/app/newRoutingEngine/new-routing-engine.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/newRoutingEngine/new-routing-engine.module.ts ***!
  \***************************************************************/
/*! exports provided: NewRoutingEngineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoutingEngineModule", function() { return NewRoutingEngineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nre_search_component_nre_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nre.search.component/nre-search.component */ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.ts");
/* harmony import */ var _new_routing_engine_routes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-routing-engine.routes.module */ "./src/app/newRoutingEngine/new-routing-engine.routes.module.ts");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _nre_result_component_nre_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nre.result.component/nre-result.component */ "./src/app/newRoutingEngine/nre.result.component/nre-result.component.ts");
/* harmony import */ var _services_new_routing_engine_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/new-routing-engine.search.service */ "./src/app/newRoutingEngine/services/new-routing-engine.search.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NewRoutingEngineModule = /** @class */ (function () {
    function NewRoutingEngineModule() {
    }
    NewRoutingEngineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_nre_result_component_nre_result_component__WEBPACK_IMPORTED_MODULE_4__["NewRoutingeEngineResultComponent"], _nre_search_component_nre_search_component__WEBPACK_IMPORTED_MODULE_1__["NewRoutingEngineComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _new_routing_engine_routes_module__WEBPACK_IMPORTED_MODULE_2__["RoutesRoutingModule"]],
            providers: [_services_new_routing_engine_search_service__WEBPACK_IMPORTED_MODULE_5__["NewRoutesSearchService"], _services_enum_service__WEBPACK_IMPORTED_MODULE_3__["EnumService"]],
        })
    ], NewRoutingEngineModule);
    return NewRoutingEngineModule;
}());



/***/ }),

/***/ "./src/app/newRoutingEngine/new-routing-engine.routes.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/newRoutingEngine/new-routing-engine.routes.module.ts ***!
  \**********************************************************************/
/*! exports provided: routes, RoutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRoutingModule", function() { return RoutesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nre_search_component_nre_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nre.search.component/nre-search.component */ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'searchNewRoutes', component: _nre_search_component_nre_search_component__WEBPACK_IMPORTED_MODULE_2__["NewRoutingEngineComponent"] }
];
var RoutesRoutingModule = /** @class */ (function () {
    function RoutesRoutingModule() {
    }
    RoutesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutesRoutingModule);
    return RoutesRoutingModule;
}());



/***/ }),

/***/ "./src/app/newRoutingEngine/nre.result.component/nre-result.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/newRoutingEngine/nre.result.component/nre-result.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-header-cell.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n\r\nmat-row:nth-child(even) {\r\n  background-color: #ecf4ff;;\r\n}\r\n\r\nmat-row:nth-child(odd) {\r\n  background-color: #ecf4dd;;\r\n}\r\n"

/***/ }),

/***/ "./src/app/newRoutingEngine/nre.result.component/nre-result.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/newRoutingEngine/nre.result.component/nre-result.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort matSort matSortDirection=\"asc\">\r\n    <!--     displayedColumns = ['TT (days)', 'pol', 'pod', 'ts1', 'ts2', 'ts3', 'prof-1', 'prof-2', 'prof-3', 'errorcode'];\r\n\r\n    <!-- Transit time Column -->\r\n    <ng-container matColumnDef=\"tt\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>TT (days)</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.tt}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- POL Column -->\r\n    <ng-container matColumnDef=\"pol\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>POL</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.pol}}</mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- ts1 Column -->\r\n    <ng-container matColumnDef=\"ts1\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>T/S 1</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ts1}}</mat-cell>\r\n    </ng-container>\r\n    <!-- ts2 Column -->\r\n    <ng-container matColumnDef=\"ts2\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>T/S 2</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ts2}}</mat-cell>\r\n    </ng-container>\r\n    <!-- ts3 Column -->\r\n    <ng-container matColumnDef=\"ts3\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>T/S 3</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ts3}}</mat-cell>\r\n    </ng-container>\r\n    <!-- POD Column -->\r\n    <ng-container matColumnDef=\"pod\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>POD</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element \"> {{element.pod}}</mat-cell>\r\n    </ng-container>\r\n    <!-- Proforma 1 -->\r\n    <ng-container matColumnDef=\"prof-1\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Proforma 1</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.prof1 }}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Proforma 2 -->\r\n    <ng-container matColumnDef=\"prof-2\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Proforma 2</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.prof2}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Proforma 3 -->\r\n    <ng-container matColumnDef=\"prof-3\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Proforma 3</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.prof3}}</mat-cell>\r\n    </ng-container>\r\n    <!-- Reson code -->\r\n    <ng-container matColumnDef=\"errorcode\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Error Code</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.errors}}</mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator #paginator\r\n                 [pageSize]=\"10\"\r\n                 [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/newRoutingEngine/nre.result.component/nre-result.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/newRoutingEngine/nre.result.component/nre-result.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewRoutingeEngineResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoutingeEngineResultComponent", function() { return NewRoutingeEngineResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewRoutingeEngineResultComponent = /** @class */ (function () {
    function NewRoutingeEngineResultComponent() {
        this.routings = [];
        this.displayedColumns = ['tt', 'pol', 'ts1', 'ts2', 'ts3', 'pod', 'prof-1', 'prof-2', 'prof-3', 'errorcode'];
    }
    NewRoutingeEngineResultComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    NewRoutingeEngineResultComponent.prototype.ngAfterViewInit = function () {
        console.log('after view init');
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    NewRoutingeEngineResultComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    NewRoutingeEngineResultComponent.prototype.ngOnChanges = function (changes) {
        console.log('on changes' + JSON.stringify(changes));
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.routings);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NewRoutingeEngineResultComponent.prototype, "routings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], NewRoutingeEngineResultComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], NewRoutingeEngineResultComponent.prototype, "paginator", void 0);
    NewRoutingeEngineResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nre-result',
            template: __webpack_require__(/*! ./nre-result.component.html */ "./src/app/newRoutingEngine/nre.result.component/nre-result.component.html"),
            styles: [__webpack_require__(/*! ./nre-result.component.css */ "./src/app/newRoutingEngine/nre.result.component/nre-result.component.css")]
        })
    ], NewRoutingeEngineResultComponent);
    return NewRoutingeEngineResultComponent;
}());



/***/ }),

/***/ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/newRoutingEngine/nre.search.component/nre-search.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-style-9 {\r\n  max-width: 400px;\r\n  background: #FAFAFA;\r\n  padding: 10px;\r\n  margin: 20px auto;\r\n  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\r\n  border-radius: 10px;\r\n  border: 2px solid #305A72;\r\n}\r\n\r\n.smallFont {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.serviceType {\r\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n  margin: 5px 0px 10px 15px;\r\n}\r\n\r\n.floatLeft {\r\n  float: left;\r\n  padding: 1px 1px 1px 1px;\r\n  margin: 1px 1px 1px 1px;\r\n  font-weight: bold;\r\n  color: #13557b;\r\n  height: 4px;\r\n  line-height: 0px;\r\n}\r\n\r\n/* ml */\r\n\r\n.stopFloat {\r\n  display: block;\r\n  float: none;\r\n  clear: both;\r\n  height: 0px; /* 1px, wenn kleine Linie bleiben soll */\r\n  font-size: 0px;\r\n  line-height: 0px;\r\n  background: #ffffff;\r\n}\r\n\r\nselect:hover {\r\n  background: rgba(0, 0, 0, 0);\r\n  color: #3a7999;\r\n}\r\n\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 5px 0;\r\n  border-radius: 6px;\r\n  z-index: 1;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n\r\n.tooltip:hover {\r\n  visibility: visible;\r\n}\r\n\r\n.isHidden {\r\n  display: none;\r\n}\r\n\r\n.isShown {\r\n  display: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/newRoutingEngine/nre.search.component/nre-search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<\r\n<form class=\"form-style-9 mdl-color-text--light-blue-900\" style=\"background: #ecf4ff;\"\r\n      [formGroup]=\"form\"\r\n      novalidate (ngSubmit)=\"filterOceanRoutes()\">\r\n  <div id=\"im-search-form\" style=\"text-align: center;font-weight: bold;\">\r\n    {{ title }}\r\n\r\n    <ng-template #noResult>\r\n      No results found.\r\n    </ng-template>\r\n    <div>\r\n\r\n    </div>\r\n\r\n    <mat-spinner [style.display]=\"showSpinner ? 'block' :'none'\"></mat-spinner>\r\n  </div>\r\n\r\n  <!--  Rules -->\r\n  <div *ngIf=\"isCollapsed\">\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <!--- Port of Loading -->\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"Port of Loading\" formControlName=\"portOfLoading\" [matAutocomplete]=\"autoFrom\">\r\n        <mat-hint align=\"start\"> e.g. BRSSZ, HKHKG</mat-hint>\r\n        <mat-error>\r\n        <span\r\n          *ngIf=\"!portOfLoading.valid && portOfLoading.touched\">Invalid entry !</span>\r\n        </mat-error>\r\n        <mat-autocomplete #autoFrom=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possiblePOLs\" [value]=\"item.locationCode\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <!--- Port of Destination -->\r\n      <mat-form-field style=\"width: 150px;\">\r\n        <input matInput placeholder=\"Port of Destination\" formControlName=\"portOfDestination\"\r\n               [matAutocomplete]=\"autoTo\">\r\n        <mat-error>\r\n        <span\r\n          *ngIf=\"!portOfDestination.valid && portOfDestination.touched\">Invalid entry !</span>\r\n        </mat-error>\r\n        <mat-autocomplete #autoTo=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possiblePODs\" [value]=\"item.locationCode\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </div>\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n      <!---Vessel System 1 -->\r\n      <mat-form-field style=\"width: 120px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"Vessel System 1\" formControlName=\"vesselsystem_1\" [matAutocomplete]=\"autoVS1\">\r\n        <mat-hint align=\"start\"> e.g. Brazil Express</mat-hint>\r\n\r\n        <mat-autocomplete #autoVS1=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleVS_1s\" [value]=\"item.vs_name\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.vs_name }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n\r\n      <!--- TS 1 -->\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"T/S-Port 1\" formControlName=\"ts_1\" [matAutocomplete]=\"ts1\">\r\n        <mat-autocomplete #ts1=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleTS_1s\" [value]=\"item.locationCode\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <!---Vessel System 2 -->\r\n\r\n      <mat-form-field style=\"width: 120px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"Vessel System 2\" formControlName=\"vesselsystem_2\" [matAutocomplete]=\"autoVS2\">\r\n        <mat-autocomplete #autoVS2=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleVS_2s\" [value]=\"item.vs_name\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.vs_name }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"T/S-Port 2\" formControlName=\"ts_2\" [matAutocomplete]=\"ts2\">\r\n        <mat-autocomplete #ts2=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleTS_2s\" [value]=\"item.locationCode\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <!---Vessel System 3 -->\r\n\r\n      <mat-form-field style=\"width: 120px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"Vessel System 3\" formControlName=\"vesselsystem_3\" [matAutocomplete]=\"autoVS3\">\r\n        <mat-autocomplete #autoVS3=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleVS_3s\" [value]=\"item.vs_name\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.vs_name }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px;\">\r\n        <input matInput placeholder=\"T/S-Port 3\" formControlName=\"ts_3\" [matAutocomplete]=\"ts3\">\r\n        <mat-autocomplete #ts3=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let item of possibleTS_3s\" [value]=\"item.locationCode\"\r\n                      style=\"height: 30px; line-height: 20px; background-color: #ecf4ff;\">\r\n            <span class=\"smallFont\"> {{ item.locationCode }}</span>\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </div>\r\n    <!--- Start and End Date -->\r\n    <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n\r\n      <mat-form-field style=\"width: 150px; margin-left: 20px; margin-right: 20px; \">\r\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"start date\"\r\n               formControlName=\"startDate\">\r\n        <mat-error>\r\n          <span *ngIf=\"!form.get('startDate').valid && form.get('startDate').touched\">Please enter Start Date!</span>\r\n        </mat-error>\r\n\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker1></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field style=\"width: 150px;\">\r\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"end date\"\r\n               formControlName=\"endDate\" readonly>\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker2 disabled=\"true\"></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <!--- # tsPorts invalid included -->\r\n  <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid; padding:5px; margin: 5px; \">\r\n    <span>Include:</span>\r\n    <mat-grid-list cols=\"7\">\r\n      <mat-grid-tile colspan=\"4\">\r\n        <div>\r\n          <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"checkbox-invalid\">\r\n            <input type=\"checkbox\" id=\"checkbox-invalid\" class=\"mdl-checkbox__input\" formControlName=\"includeInvalid\">\r\n            <span class=\"mat-small\">Invalid Routings</span>\r\n          </label>\r\n          <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect \" for=\"checkbox-shunting\">\r\n            <input type=\"checkbox\" id=\"checkbox-shunting\" class=\"mdl-checkbox__input\" formControlName=\"includeShunting\">\r\n            <span class=\"mat-small\">Shunting</span>\r\n          </label>\r\n        </div>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile colspan=\"3\">\r\n        <div class=\"mat-small\" style=\"margin-bottom: 10px; margin-top: 11px; \"># of T/S Ports:\r\n          <select formControlName=\"numberTs\" class=\"mdl-color-text--light-blue-900\"\r\n                  style=\"width: 57px; \">\r\n            <option class=\"mdl-color-text--light-blue-900\" *ngFor=\"let e of numberTsPorts\" [value]=\"e\">{{e}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n  </div>\r\n\r\n  <div style=\"border-width: 2px; border-color: #337DA8; border-style: solid;  margin: 5px; padding: 10px; \">\r\n    <button type=\"button\" mat-raised-button (click)=\"toggle()\">{{button_name}}</button>\r\n    <button type=\"button\" mat-raised-button (click)=\"reset()\">Reset</button>\r\n    <button mat-raised-button type=”submit” [disabled]=\"isInvalid()\">\r\n      <mat-icon>search</mat-icon>\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<div *ngIf=\"routes.length > 0; else noResult\">\r\n  <app-nre-result [routings]=\"routes\"></app-nre-result>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/newRoutingEngine/nre.search.component/nre-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewRoutingEngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoutingEngineComponent", function() { return NewRoutingEngineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_enum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/enum.service */ "./src/app/services/enum.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_geoscope_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/geoscope.service */ "./src/app/services/geoscope.service.ts");
/* harmony import */ var _services_new_routing_engine_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/new-routing-engine.search.service */ "./src/app/newRoutingEngine/services/new-routing-engine.search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewRoutingEngineComponent = /** @class */ (function () {
    function NewRoutingEngineComponent(enumService, masterDataService, searchService) {
        this.enumService = enumService;
        this.masterDataService = masterDataService;
        this.searchService = searchService;
        this.title = 'Search Ocean Routes (NRE)';
        this.isCollapsed = true;
        this.button_name = 'Hide Form';
        this.showSpinner = false;
        this.isActive = false;
        this.routes = [];
        this.possiblePOLs = [];
        this.possiblePODs = [];
        this.possibleVS_1s = [];
        this.possibleVS_2s = [];
        this.possibleVS_3s = [];
        this.possibleTS_1s = [];
        this.possibleTS_2s = [];
        this.possibleTS_3s = [];
        this.numberTsPorts = [0, 1, 2, 3];
        console.log('constructor');
        this.searchFormOceanRoutes = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            portOfLoading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            portOfDestination: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            vesselsystem_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            vesselsystem_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            vesselsystem_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            ts_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            ts_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            ts_3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            includeInvalid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            includeShunting: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            numberTs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().toISOString())
        });
        console.log('constructor middle');
        // set default values in form
        this.patchDefaultValues();
        this.setEndDate(new Date(this.startDate.value));
        // event handler
        this.onPortOfLoadingChanges(this.portOfLoading);
        console.log('constructor pol');
        this.onPortOfDestinationChanges(this.portOfDestination);
        this.onStartDateChanges(this.startDate);
        console.log('constructor startdate ready');
        this.onVS1Changes(this.vesselsystem_1);
        this.onVS2Changes(this.vesselsystem_2);
        this.onVS3Changes(this.vesselsystem_3);
        console.log('constructor vs ready');
        this.onTsPortChanges(this.ts_1, 1);
        this.onTsPortChanges(this.ts_2, 2);
        this.onTsPortChanges(this.ts_3, 3);
        console.log('constructor end');
    }
    Object.defineProperty(NewRoutingEngineComponent.prototype, "form", {
        get: function () {
            return this.searchFormOceanRoutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "trade", {
        get: function () {
            return this.form.get('trade');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "portOfLoading", {
        get: function () {
            return this.form.get('portOfLoading');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "portOfDestination", {
        get: function () {
            return this.form.get('portOfDestination');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "vesselsystem_1", {
        get: function () {
            return this.form.get('vesselsystem_1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "vesselsystem_2", {
        get: function () {
            return this.form.get('vesselsystem_2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "vesselsystem_3", {
        get: function () {
            return this.form.get('vesselsystem_3');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "ts_1", {
        get: function () {
            return this.form.get('ts_1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "ts_2", {
        get: function () {
            return this.form.get('ts_2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "ts_3", {
        get: function () {
            return this.form.get('ts_3');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "startDate", {
        get: function () {
            return this.form.get('startDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "endDate", {
        get: function () {
            return this.form.get('endDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "numberTs", {
        get: function () {
            return this.form.get('numberTs');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "includeInvalid", {
        get: function () {
            return this.form.get('includeInvalid');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoutingEngineComponent.prototype, "includeShunting", {
        get: function () {
            return this.form.get('includeShunting');
        },
        enumerable: true,
        configurable: true
    });
    NewRoutingEngineComponent.prototype.toggle = function () {
        this.isCollapsed = !this.isCollapsed;
        // CHANGE THE TEXT OF THE BUTTON.
        if (this.isCollapsed) {
            this.button_name = 'Hide Form';
        }
        else {
            this.button_name = 'Show Form';
        }
    };
    NewRoutingEngineComponent.prototype.isInvalid = function () {
        return this.form.invalid;
    };
    NewRoutingEngineComponent.prototype.filterOceanRoutes = function () {
        var _this = this;
        console.log('filter ocean routes');
        this.showSpinner = false;
        this.routes = [];
        this.searchService.getRoutings(this.form.value).subscribe(function (result) {
            console.log('ocean routings: ' + JSON.stringify(result));
            if (result && result.length > 0) {
                _this.routes = result;
                _this.toggle();
            }
        });
    };
    NewRoutingEngineComponent.prototype.reset = function () {
        this.patchDefaultValues();
        this.setEndDate(this.startDate.value);
        this.possiblePODs = [];
        this.possiblePOLs = [];
        this.possibleVS_1s = [];
        this.possibleVS_2s = [];
        this.possibleVS_3s = [];
        this.numberTsPorts = [];
        this.possibleTS_1s = [];
        this.possibleTS_2s = [];
        this.possibleTS_3s = [];
    };
    NewRoutingEngineComponent.prototype.onPortOfLoadingChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possiblePOLs = [];
                _this.portOfLoading.markAsDirty();
                return;
            }
            if (theLength < 3) {
                _this.possiblePOLs = [];
                return;
            }
            _this.masterDataService.filterPortLocations(data).subscribe(function (result) {
                if (result.length === 0) {
                    _this.portOfLoading.markAsTouched();
                }
                else if (result.length === 1) {
                    var singleRow = result[0].locationCode;
                    _this.portOfLoading.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.portOfLoading.value));
                    _this.portOfLoading.markAsUntouched();
                }
                else {
                    _this.portOfLoading.markAsUntouched();
                    _this.possiblePOLs = result;
                }
            });
        });
    };
    NewRoutingEngineComponent.prototype.onPortOfDestinationChanges = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possiblePODs = [];
                _this.portOfDestination.markAsDirty();
                return;
            }
            if (theLength < 3) {
                _this.possiblePODs = [];
                return;
            }
            _this.masterDataService.filterPodLocations(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 0) {
                    _this.portOfDestination.markAsTouched();
                }
                else if (result.length === 1) {
                    var singleRow = result[0].locationCode;
                    _this.portOfDestination.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.portOfLoading.value));
                    _this.portOfDestination.markAsUntouched();
                }
                else {
                    _this.portOfDestination.markAsUntouched();
                    _this.possiblePODs = result;
                }
            });
        });
    };
    NewRoutingEngineComponent.prototype.onTsPortChanges = function (control, num) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength < 3) {
                switch (num) {
                    case 1: {
                        _this.possibleTS_1s = [];
                        break;
                    }
                    case 2: {
                        _this.possibleTS_2s = [];
                        break;
                    }
                    case 3: {
                        _this.possibleTS_3s = [];
                        break;
                    }
                    default: {
                        break;
                    }
                }
                return;
            }
            _this.masterDataService.filterPodLocations(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].locationCode;
                    switch (num) {
                        case 1: {
                            _this.ts_1.patchValue(singleRow.toUpperCase());
                            break;
                        }
                        case 2: {
                            _this.ts_2.patchValue(singleRow.toUpperCase());
                            break;
                        }
                        case 3: {
                            _this.ts_3.patchValue(singleRow.toUpperCase());
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
                else {
                    switch (num) {
                        case 1: {
                            _this.possibleTS_1s = result;
                            break;
                        }
                        case 2: {
                            _this.possibleTS_2s = result;
                            break;
                        }
                        case 3: {
                            _this.possibleTS_3s = result;
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            });
        });
    };
    NewRoutingEngineComponent.prototype.onVS1Changes = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possibleVS_1s = [];
                _this.vesselsystem_1.markAsDirty();
                return;
            }
            if (theLength < 3) {
                _this.possibleVS_1s = [];
                return;
            }
            _this.masterDataService.filterVS(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].vs_name;
                    _this.vesselsystem_1.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.vesselsystem_1.value));
                    _this.vesselsystem_1.markAsUntouched();
                }
                else {
                    _this.possibleVS_1s = result;
                }
            });
        });
    };
    NewRoutingEngineComponent.prototype.onVS2Changes = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possibleVS_2s = [];
                _this.vesselsystem_2.markAsDirty();
                return;
            }
            if (theLength < 3) {
                _this.possibleVS_2s = [];
                return;
            }
            _this.masterDataService.filterVS(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].vs_name;
                    _this.vesselsystem_2.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.vesselsystem_1.value));
                    _this.vesselsystem_2.markAsUntouched();
                }
                else {
                    _this.possibleVS_2s = result;
                }
            });
        });
    };
    NewRoutingEngineComponent.prototype.onVS3Changes = function (control) {
        var _this = this;
        control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var theLength = data.toString().trim().length;
            if (theLength === 0) {
                _this.possibleVS_3s = [];
                _this.vesselsystem_3.markAsDirty();
                return;
            }
            if (theLength < 3) {
                _this.possibleVS_3s = [];
                return;
            }
            _this.masterDataService.filterVS(data).subscribe(function (result) {
                console.log('result:' + JSON.stringify(result));
                if (result.length === 1) {
                    var singleRow = result[0].vs_name;
                    _this.vesselsystem_3.patchValue(singleRow.toUpperCase());
                    console.log('single:' + JSON.stringify(_this.vesselsystem_1.value));
                    _this.vesselsystem_3.markAsUntouched();
                }
                else {
                    _this.possibleVS_3s = result;
                }
            });
        });
    };
    NewRoutingEngineComponent.prototype.onStartDateChanges = function (control) {
        var _this = this;
        console.log('onStartDateChanges start');
        control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (data) {
            _this.startDate.patchValue(new Date(data).toISOString());
            console.log('onStartDateChanges middle');
            _this.setEndDate(new Date(data));
        });
        console.log('onStartDateChanges end');
    };
    NewRoutingEngineComponent.prototype.setEndDate = function (date) {
        var newDay = (date.getDate() + 14);
        var newDate = new Date();
        newDate.setDate(newDay);
        this.endDate.patchValue(newDate.toISOString());
    };
    NewRoutingEngineComponent.prototype.patchDefaultValues = function () {
        this.includeInvalid.patchValue(false);
        this.includeShunting.patchValue(true);
        this.numberTs.patchValue('1');
        this.portOfLoading.patchValue('');
        this.portOfDestination.patchValue('');
        this.vesselsystem_1.patchValue('');
        this.vesselsystem_2.patchValue('');
        this.vesselsystem_3.patchValue('');
        this.ts_1.patchValue('');
        this.ts_2.patchValue('');
        this.ts_3.patchValue('');
        this.startDate.patchValue(new Date().toISOString());
    };
    NewRoutingEngineComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    NewRoutingEngineComponent.prototype.ngOnChanges = function (changes) {
        console.log('on changes' + JSON.stringify(changes));
    };
    NewRoutingEngineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nre-search-routes',
            template: __webpack_require__(/*! ./nre-search.component.html */ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.html"),
            styles: [__webpack_require__(/*! ./nre-search.component.css */ "./src/app/newRoutingEngine/nre.search.component/nre-search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_enum_service__WEBPACK_IMPORTED_MODULE_1__["EnumService"], _services_geoscope_service__WEBPACK_IMPORTED_MODULE_4__["GeoScopeService"],
            _services_new_routing_engine_search_service__WEBPACK_IMPORTED_MODULE_5__["NewRoutesSearchService"]])
    ], NewRoutingEngineComponent);
    return NewRoutingEngineComponent;
}());



/***/ }),

/***/ "./src/app/newRoutingEngine/services/new-routing-engine.search.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/newRoutingEngine/services/new-routing-engine.search.service.ts ***!
  \********************************************************************************/
/*! exports provided: NewRoutesSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoutesSearchService", function() { return NewRoutesSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _enums_app_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/app-enum */ "./src/app/enums/app-enum.ts");
/**
 * Created by ekirschning on 10.04.2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewRoutesSearchService = /** @class */ (function () {
    function NewRoutesSearchService(http) {
        this.http = http;
        this.serverApi = _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"].get('tomcat');
        this.resource = '/';
        this.objectType = _enums_app_enum__WEBPACK_IMPORTED_MODULE_3__["EntityEnum"].ROUTING_RESULT;
    }
    NewRoutesSearchService.getHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    };
    NewRoutesSearchService.prototype.getUrl = function () {
        return this.serverApi + this.resource + this.objectType + this.resource;
    };
    NewRoutesSearchService.prototype.getRoutings = function (imSearchModel) {
        console.log('search model:' + JSON.stringify(imSearchModel));
        console.log('typeof:' + typeof imSearchModel);
        var search_params = this.prepareSearchParams(imSearchModel);
        var URI = this.getUrl() + 'filter/';
        return this.http.get(URI, { params: search_params });
    };
    NewRoutesSearchService.prototype.prepareSearchParams = function (imSearchModel) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('includeInvalid', imSearchModel['includeInvalid'])
            .set('includeShunting', imSearchModel['includeShunting'])
            .set('numberTs', imSearchModel['numberTs'])
            .set('pol', imSearchModel['portOfLoading'])
            .set('pod', imSearchModel['portOfDestination'])
            .set('trade', imSearchModel['trade'])
            .set('ts1', imSearchModel['ts_1'])
            .set('ts2', imSearchModel['ts_2'])
            .set('ts3', imSearchModel['ts_3'])
            .set('startDate', imSearchModel['startDate'].toString().substring(0, 10))
            .set('endDate', imSearchModel['endDate'].toString().substring(0, 10));
        return search_params;
    };
    NewRoutesSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewRoutesSearchService);
    return NewRoutesSearchService;
}());



/***/ }),

/***/ "./src/app/pipes/change-detector-pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/pipes/change-detector-pipe.ts ***!
  \***********************************************/
/*! exports provided: ChangeDetectorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorPipe", function() { return ChangeDetectorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChangeDetectorPipe = /** @class */ (function () {
    function ChangeDetectorPipe() {
        this.count = 0;
    }
    ChangeDetectorPipe.prototype.transform = function (value, args) {
        this.count++;
        //  console.log(`Component change detection executed ${this.count} times`);
        return value;
    };
    ChangeDetectorPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'changeDetector',
            pure: false
        })
    ], ChangeDetectorPipe);
    return ChangeDetectorPipe;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.set = function (property, value) {
        this['_' + property] = value;
    };
    ConfigService.get = function (property) {
        return this['_' + property];
    };
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _enums_app_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/app-enum */ "./src/app/enums/app-enum.ts");
/* harmony import */ var _model_country_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/country.model */ "./src/app/model/country.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.countryCodes = [];
        this.serverApi = 'http://localhost:8080/nre';
        this.resource = '/';
    }
    CountryService.getHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    };
    CountryService.prototype.getUrl = function (objectType) {
        return this.serverApi + this.resource + objectType + this.resource;
    };
    CountryService.prototype.filterCountries = function (query) {
        console.error('service:filter countries:', query);
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country_code', query.toUpperCase());
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_3__["EntityEnum"].COUNTRY) + 'filter/';
        var result;
        result = this.http
            .get(URI, { params: search_params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this._handleError));
        console.log('find Countries Result:');
        return result;
    };
    CountryService.prototype._handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        var errorMsg = error.message || 'Error: Unable to complete request.';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMsg);
    };
    CountryService.prototype.log = function (message) {
        console.log('CountryService: ' + message);
    };
    CountryService.prototype.filterCountryCode = function (query) {
        this.log('filter country code:' + query);
        this.countryCodes = [];
        this.countryCodes.push(new _model_country_model__WEBPACK_IMPORTED_MODULE_4__["CountryModel"](1, 'DK', 'DK'));
        this.countryCodes.push(new _model_country_model__WEBPACK_IMPORTED_MODULE_4__["CountryModel"](1, 'DE', 'DE'));
        this.countryCodes.push(new _model_country_model__WEBPACK_IMPORTED_MODULE_4__["CountryModel"](1, 'FR', 'FR'));
        this.countryCodes.push(new _model_country_model__WEBPACK_IMPORTED_MODULE_4__["CountryModel"](1, 'NL', 'NL'));
        this.countryCodes.push(new _model_country_model__WEBPACK_IMPORTED_MODULE_4__["CountryModel"](1, 'SE', 'SE'));
        this.countryCodes.push(new _model_country_model__WEBPACK_IMPORTED_MODULE_4__["CountryModel"](1, 'NO', 'NO'));
        var result = this.countryCodes.filter(function (countryCode) { return countryCode.code.toLowerCase().startsWith(query.toLowerCase()); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
    };
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/services/date.utils/date.adapter.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/date.utils/date.adapter.ts ***!
  \*****************************************************/
/*! exports provided: AppDateAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppDateAdapter = /** @class */ (function (_super) {
    __extends(AppDateAdapter, _super);
    function AppDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "-" + month + "-" + year;
        }
        else {
            return date.toDateString();
        }
    };
    return AppDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"]));



/***/ }),

/***/ "./src/app/services/date.utils/date.format.ts":
/*!****************************************************!*\
  !*** ./src/app/services/date.utils/date.format.ts ***!
  \****************************************************/
/*! exports provided: APP_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
var APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};


/***/ }),

/***/ "./src/app/services/enum.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/enum.service.ts ***!
  \******************************************/
/*! exports provided: EnumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumService", function() { return EnumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnumService = /** @class */ (function () {
    function EnumService() {
    }
    EnumService.prototype.getEnumKeys = function (_enum) {
        return Object.keys(_enum);
    };
    EnumService.prototype.getEnumValues = function (_enum) {
        return Object.values(_enum);
    };
    EnumService.prototype.getKeyByValue = function (object, value) {
        return Object.keys(object).find(function (key) { return object[key] === value; });
    };
    EnumService.prototype.getValueByKey = function (object, key) {
        return Object.values(object).find(function (value) { return value === object[key]; });
    };
    EnumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EnumService);
    return EnumService;
}());



/***/ }),

/***/ "./src/app/services/geoscope.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/geoscope.service.ts ***!
  \**********************************************/
/*! exports provided: GeoScopeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoScopeService", function() { return GeoScopeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _enums_app_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/app-enum */ "./src/app/enums/app-enum.ts");
/* harmony import */ var _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/geoscope.model */ "./src/app/model/geoscope.model.ts");
/**
 * Created by ekirschning on 28.03.2017.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeoScopeService = /** @class */ (function () {
    function GeoScopeService(http) {
        this.http = http;
        this.locations = [];
        this.prefPorts = [];
        this.serverApi = 'http://localhost:8080/nre';
        this.resource = '/';
    }
    GeoScopeService.getHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
    };
    GeoScopeService.prototype.getUrl = function (objectType) {
        return this.serverApi + this.resource + objectType + this.resource;
    };
    GeoScopeService.prototype.filterVesselSystems = function (query) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('vs_code', query.toUpperCase());
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].VESSEL_SYSTEMS) + 'filter/';
        return this.http
            .get(URI, { params: search_params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype.filterLocations = function (query, geoScopeType, countryCode) {
        var search_params = this.prepareGeoScopeSearchParams(query, geoScopeType, countryCode);
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].GEOSCOPE) + 'filter/';
        console.log('uri:' + URI);
        console.log('params:' + search_params);
        return this.http
            .get(URI, { params: search_params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype.filterPreferredPorts = function (query, geoScopeType, countryCode) {
        var search_params = this.prepareGeoScopeSearchParams(query, geoScopeType, countryCode);
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].PREFERRED_PORTS) + 'filter/';
        console.log('uri:' + URI);
        console.log('params:' + search_params);
        return this.http
            .get(URI, { params: search_params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype.filterPorts = function (query) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('location_code', query.toUpperCase());
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].PORTS) + 'filter/';
        console.log('uri:' + URI);
        console.log('params:' + search_params);
        return this.http
            .get(URI, { params: search_params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype.prepareGeoScopeSearchParams = function (query, geoScopeType, countryCode) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('location_code', query.toUpperCase())
            .set('geo_scope_type', geoScopeType.toUpperCase())
            .set('country_code', countryCode);
        return search_params;
    };
    GeoScopeService.prototype.filterContracts = function (query) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('contract_no', query.toUpperCase());
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].CONTRACT) + 'filter/';
        return this.http
            .get(URI, { params: search_params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype.filterContractGroups = function (query) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('contract_no', query.toUpperCase());
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].CONTRACT_GROUP) + 'filter/';
        return this.http
            .get(URI, { params: search_params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype.filterTrades = function (query) {
        var search_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('trade_code', query.toUpperCase());
        var URI = this.getUrl(_enums_app_enum__WEBPACK_IMPORTED_MODULE_4__["EntityEnum"].TRADE) + 'filter/';
        return this.http
            .get(URI, { params: search_params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    };
    GeoScopeService.prototype._handleError = function (err) {
        console.log('_handleError:' + err);
        var errorMsg = err.message || 'Error: Unable to complete request.';
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMsg);
    };
    // dummy methods
    GeoScopeService.prototype.filterPortLocations = function (query) {
        console.log('service: filter port locations:' + query);
        this.prefPorts = [];
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](1, 'DEHAM', '', ''));
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](2, 'DEBRV', '', ''));
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](3, 'NLRTM', '', ''));
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](4, 'BEANR', '', ''));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.prefPorts);
    };
    GeoScopeService.prototype.filterPodLocations = function (query) {
        console.log('service: filter port locations:' + query);
        this.prefPorts = [];
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](1, 'BRSSZ', '', ''));
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](2, 'BRMAO', '', ''));
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](3, 'BRSUA', '', ''));
        this.prefPorts.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](4, 'BRITA', '', ''));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.prefPorts);
    };
    GeoScopeService.prototype.filterImLocations = function (code, geoScopeType, countryCode) {
        console.log('service: filter im locations:' + geoScopeType);
        this.locations = [];
        this.locations.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](1, 'DUSSELDORF', 'T', 'D'));
        this.locations.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](2, 'DUSHEIM', 'T', 'D'));
        this.locations.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](3, 'DUSENHAUSEN', 'T', 'D'));
        this.locations.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](4, 'DEDUS', '', ''));
        this.locations.push(new _model_geoscope_model__WEBPACK_IMPORTED_MODULE_5__["GeoScopeModel"](5, 'DEDUI', '', ''));
        var result = this.locations.filter(function (imLocation) { return imLocation.locationCode.toLowerCase().startsWith(code.toLowerCase()); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
    };
    GeoScopeService.prototype.filterVS = function (query) {
        var vs = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(vs);
    };
    GeoScopeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GeoScopeService);
    return GeoScopeService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-material.module */ "./src/app/app-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"],
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\WebstormProjects\Angular6Docker\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map