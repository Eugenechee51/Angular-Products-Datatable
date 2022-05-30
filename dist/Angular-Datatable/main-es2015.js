(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Products-DataTable';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-products");
    } }, directives: [_products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _services_in_memory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/in-memory.service */ "./src/app/services/in-memory.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
            src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].inMemoryDatabase ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["InMemoryWebApiModule"].forRoot(_services_in_memory_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"]) : [],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"].forRoot({}),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
                    src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__["environment"].inMemoryDatabase ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["InMemoryWebApiModule"].forRoot(_services_in_memory_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"]) : [],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    ngx_loading__WEBPACK_IMPORTED_MODULE_14__["NgxLoadingModule"].forRoot({}),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/datatable/dataTable.service.ts":
/*!************************************************!*\
  !*** ./src/app/datatable/dataTable.service.ts ***!
  \************************************************/
/*! exports provided: DataTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableService", function() { return DataTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataTableService {
    constructor(http) {
        this.http = http;
    }
    getData(route) {
        return this.http.get(this.baseApiUrl + '/' + route, { responseType: 'text' });
    }
    editData(route, data) {
        return this.http.put(`${this.baseApiUrl}/${route}`, data, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    deleteData(route, paramValue) {
        const endPoint = route.split(':')[0];
        return this.http.delete(`${this.baseApiUrl}/${endPoint}${paramValue}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    deleteDataByMeasure(route, paramValue) {
        const endPoint = route.split(':')[0];
        return this.http.delete(`${this.baseApiUrl}/${endPoint}?unit=${paramValue}`, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    createData(route, data) {
        return this.http.post(`${this.baseApiUrl}/${route}`, data, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(errorRes => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    getCountByManufacturer(route, manufacturerId) {
        const endPoint = route.split(':')[0];
        return this.http.get(`${this.baseApiUrl}/${endPoint}?manufactureId=${manufacturerId}`, { responseType: 'text' });
    }
    getUniqueManufactureCosts(route) {
        const endPoint = route.split(':')[0];
        return this.http.get(`${this.baseApiUrl}/${endPoint}`, { responseType: 'text' });
    }
}
DataTableService.ɵfac = function DataTableService_Factory(t) { return new (t || DataTableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataTableService, factory: DataTableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/datatable/datatable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/datatable/datatable.component.ts ***!
  \**************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _dataTable_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTable.service */ "./src/app/datatable/dataTable.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");














const _c0 = ["addEditModal"];
function DataTableComponent_ng_template_56_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PCS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GRAMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "CENTIMETERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "MILLILITERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "COMMERCIAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PUBLIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "PRIVATE_LIMITED_COMPANY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.currentRecord[col_r5.data])("name", col_r5.data);
} }
function DataTableComponent_ng_template_56_div_9_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataTableComponent_ng_template_56_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableComponent_ng_template_56_div_9_div_3_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableComponent_ng_template_56_div_9_div_4_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataTableComponent_ng_template_56_div_9_div_5_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DataTableComponent_ng_template_56_div_9_div_6_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTableComponent_ng_template_56_div_9_div_7_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DataTableComponent_ng_template_56_div_9_div_8_Template, 10, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DataTableComponent_ng_template_56_div_9_div_9_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DataTableComponent_ng_template_56_div_9_div_10_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DataTableComponent_ng_template_56_div_9_div_11_Template, 2, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DataTableComponent_ng_template_56_div_9_div_12_Template, 8, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DataTableComponent_ng_template_56_div_9_span_14_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u041A\u043E\u043E\u0440\u0434. \u0445");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u041A\u043E\u043E\u0440\u0434. \u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u0426\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u0415\u0434. \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u0418\u043C\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u0427\u0438\u0441\u043B\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r5.title === "\u0422\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r3.form.controls[col_r5.data] == null ? null : _r3.form.controls[col_r5.data].touched) && (_r3.form.controls[col_r5.data] == null ? null : _r3.form.controls[col_r5.data].errors));
} }
function DataTableComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_template_56_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DataTableComponent_ng_template_56_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.onAddEditFormSubmit(_r3.form.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DataTableComponent_ng_template_56_div_9_Template, 15, 12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_ng_template_56_Template_button_click_11_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.currentOperation, " \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.addColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r3.invalid);
} }
function parseXml(xmlData) {
    let result;
    xml2js__WEBPACK_IMPORTED_MODULE_5___default.a.Parser().parseString(xmlData, (e, r) => { result = r; });
    return result;
}
class DataTableComponent {
    constructor(dataTableService, modalService, decimalPipe, toastr) {
        this.dataTableService = dataTableService;
        this.modalService = modalService;
        this.decimalPipe = decimalPipe;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showLoader = false;
    }
    ngOnInit() {
        // welcome
        const scope = this;
        this.showLoader = true;
        const columns = [...this.customDtOptions.dataTableOptions.columns];
        this.addColumns = Object.assign({}, this.customDtOptions.dataTableOptions.columns);
        this.addColumns = [
            { title: 'Название', data: 'name', format: 'text' },
            { title: 'Коорд. х', data: 'coordinates.0.x' },
            { title: 'Коорд. у', data: 'coordinates.0.y' },
            { title: 'Цена', data: 'price', format: 'text' },
            { title: 'Стоимость', data: 'manufactureCost' },
            { title: 'Ед. измерения', data: 'unitOfMeasure', format: 'text' },
            { title: 'Имя производ.', data: 'manufacturer.0.name' },
            { title: 'Полное имя производ.', data: 'manufacturer.0.fullName' },
            { title: 'Число сотрудников', data: 'manufacturer.0.employeesCount' },
            { title: 'Тип компании', data: 'manufacturer.0.type' }
        ];
        // this.addColumns = [...this.addColumns];
        this.primaryColumns = columns;
        console.log(this.addColumns);
        console.log(this.primaryColumns);
        const columnDefs = this.customDtOptions.dataTableOptions.columns.map((col, index) => ({
            targets: index,
            className: 'dt-center',
            render: (cellData, type, row) => col.format === 'text' ? cellData :
                col.format === 'number' && !isNaN(cellData) ? this.decimalPipe.transform(cellData, '2.') :
                    col.format === 'amount' && !isNaN(cellData) ? '$' + this.decimalPipe.transform(cellData / 1000, '2.') + 'K' : cellData
        }));
        columnDefs.push({
            targets: columnDefs.length,
            className: 'dt-center',
            render: (data, type, row) => `<div class="d-flex justify-content-around">
                  <img id="editRecordBtn" class="editButton"  style="width: 1.3rem; height: auto"  src="../../assets/edit_512px.png">
                  <img id="deleteRecordBtn" class="deleteButton" style="width: 1.3rem; height: auto" src="../../assets/delete_bin_512px.png">
             </div>`,
            fnCreatedCell: (nTd, sData, oData, iRow, iCol) => {
                $(nTd).find('#editRecordBtn').on('click', () => this.openAddEditModal(iRow));
                $(nTd).find('#deleteRecordBtn').on('click', () => this.removeRecord(iRow));
            }
        });
        this.customDtOptions.dataTableOptions.columns.push({ title: 'Actions', data: null });
        const language = {
            processing: 'Подождите...',
            search: 'Поиск:',
            lengthMenu: 'Показать _MENU_ записей',
            info: 'Записи с _START_ до _END_ из _TOTAL_ записей',
            infoEmpty: 'Записи с 0 до 0 из 0 записей',
            infoFiltered: '(отфильтровано из _MAX_ записей)',
            loadingRecords: 'Загрузка записей...',
            zeroRecords: 'Записи отсутствуют.',
            emptyTable: 'В таблице отсутствуют данные',
            paginate: {
                first: 'Первая',
                previous: 'Предыдущая',
                next: 'Следующая',
                last: 'Последняя'
            }
        };
        this.dtOptions = Object.assign(Object.assign({ dom: 'lfr<"toolbar">tip', lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'Все']], responsive: false, autoWidth: false, language, initComplete: () => {
                console.log('InitComplete');
                $('div.toolbar').html(`<button type="button" id="addRecordBtn" class="btn btn-primary float-right px-2 py-1  mr-3" >Добавить новый продукт</button>`);
                $('div.toolbar').find('#addRecordBtn').on('click', () => scope.openAddEditModal(-1));
            } }, this.customDtOptions.dataTableOptions), { columnDefs });
        this.dataTableService.baseApiUrl = this.customDtOptions.baseApiUrl;
        const measure = document.getElementById('measureField');
        console.log(measure.value);
        $('div.container').find('#delByMeasureBtn').on('click', () => scope.removeByMeasure(measure.value));
        const manufacturerId = document.getElementById('manufacturerIdField');
        $('div.container').find('#countByManufacturerIdBtn').on('click', () => scope.getCountByManufacturer(manufacturerId.value));
        $('div.container').find('#getUniqueManufactureCostBtn').on('click', () => scope.getUniqueManufactureCost());
        this.getData(false);
    }
    ngAfterViewInit() {
        this.dtTrigger.subscribe(() => {
            this.dtElement.dtInstance.then((dtInstance) => {
                dtInstance.columns().every(function () {
                    const that = this;
                    $('input', this.footer()).on('keyup change', function () {
                        if (that.search() !== this['value']) {
                            that
                                .search(this['value'])
                                .draw();
                        }
                    });
                });
            });
        });
    }
    getData(flag) {
        this.dataTableService.getData(this.customDtOptions.get).subscribe((res) => {
            if (res === null) {
                console.log('null');
                // this.rerender();
                if (flag) {
                    this.rerender();
                }
                else {
                    this.dtTrigger.next();
                    this.showLoader = false;
                }
                return;
            }
            this.data = res;
            // console.log(this.data);
            this.data = parseXml(this.data);
            this.data = this.data.ArrayList.item;
            // console.log(this.data);
            this.dtOptions.data = this.data;
            this.templateDataObject ? '' : this.templateDataObject = Object.fromEntries(Object.keys(this.data[0]).map(key => [key, '']));
            // this.templateDataObject = 0;
            // console.log("templateDataObject: " + this.templateDataObject);
            if (flag) {
                this.rerender();
            }
            else {
                this.dtTrigger.next();
                this.showLoader = false;
            }
        }, (err) => {
            console.log('Ошибка получения продуктов', err.message);
            this.toastr.error(err.message, 'Ошибка получения продуктов');
        });
    }
    require(elem, check) {
        elem.prop('required', check);
    }
    manufactureRequire() {
        // tslint:disable-next-line:variable-name
        const m_name = $('#input_m_name');
        const full_name = $('#input_m_fullName');
        const employees_count = $('#input_m_employeesCount');
        const m_type = $('#input_m_type');
        this.require(m_name, true);
        this.require(full_name, true);
        this.require(employees_count, true);
        this.require(m_type, true);
    }
    openAddEditModal(iRow) {
        this.currentOperation = (iRow === -1) ? 'Добавление' : 'Изменение';
        // if (iRow === -1)
        // iRow = 0;
        this.templateDataObject = [];
        console.log(this.data[0]);
        this.currentRecord = (iRow === -1) ? this.templateDataObject : this.data[iRow];
        console.log('Current record: ' + this.currentRecord);
        this.modalService.open(this.addEditModalRef).result
            .then((result) => console.log('Modal closed'))
            .catch(err => '');
        // delete this.currentRecord.creationDate;
        $('#input_m_name').on('click', () => {
            this.manufactureRequire();
        });
    }
    onAddEditFormSubmit(formValue) {
        this.showLoader = true;
        this.modalService.dismissAll();
        const prop = this.customDtOptions.param;
        if (this.currentOperation === 'Добавление') {
            const json = {
                name: formValue.name,
                coordinates: {
                    x: formValue['coordinates.0.x'],
                    y: formValue['coordinates.0.y']
                },
                price: formValue.price,
                manufactureCost: formValue.manufactureCost,
                unitOfMeasure: formValue.unitOfMeasure,
                manufacturer: {
                    name: formValue['manufacturer.0.name'],
                    fullName: formValue['manufacturer.0.fullName'],
                    employeesCount: formValue['manufacturer.0.employeesCount'],
                    type: formValue['manufacturer.0.type']
                }, id: undefined
            };
            this.dataTableService.createData(this.customDtOptions.add, json).subscribe((res) => {
                console.log(res);
                this.currentRecord = null;
                this.currentOperation = '';
                this.toastr.success('Продукт добавлен успешно!', 'Успех');
                this.customDtOptions.eventCallbacks.added();
                this.getData(true);
            }, (err) => {
                console.log('Error Adding Record', err.message);
                this.toastr.error(err.message, 'Ошибка добавления продукта!');
                this.currentRecord = null;
                this.currentOperation = '';
                this.showLoader = false;
            });
        }
        else {
            const json = {
                id: this.currentRecord[prop][0],
                name: formValue.name[0],
                coordinates: {
                    x: formValue['coordinates.0.x'],
                    y: formValue['coordinates.0.y']
                },
                price: formValue.price[0],
                manufactureCost: formValue.manufactureCost[0],
                unitOfMeasure: formValue.unitOfMeasure[0],
                manufacturer: {
                    name: formValue['manufacturer.0.name'][0],
                    fullName: formValue['manufacturer.0.fullName'][0],
                    employeesCount: formValue['manufacturer.0.employeesCount'][0],
                    type: formValue['manufacturer.0.type']
                }
            };
            this.dataTableService.editData(this.customDtOptions.edit, json).subscribe((res) => {
                console.log(res);
                this.currentRecord = null;
                this.currentOperation = '';
                this.toastr.success('Продукт успешно изменен!', 'Успех');
                this.customDtOptions.eventCallbacks.edited();
                this.getData(true);
            }, (err) => {
                console.log('Error Editing Record', err.message);
                this.toastr.error(err.message, 'Ошибка изменения продукта!');
                this.currentRecord = null;
                this.currentOperation = '';
                this.showLoader = false;
            });
        }
    }
    removeRecord(iRow) {
        this.showLoader = true;
        this.currentRecord = this.data[iRow];
        const paramValue = this.currentRecord[this.customDtOptions.param];
        this.dataTableService.deleteData(this.customDtOptions.delete, paramValue).subscribe((res) => {
            console.log(res);
            this.currentRecord = null;
            this.currentOperation = '';
            this.toastr.success('Продукты удалены успешно', 'Успех');
            this.customDtOptions.eventCallbacks.deleted();
            this.getData(true);
            // this.rerender();
        }, (err) => {
            console.log('Ошибка удаления продуктов', err.message);
            this.toastr.error(err.message, 'Ошибка удаления продуктов');
            this.currentRecord = null;
            this.currentOperation = '';
            this.showLoader = false;
        });
    }
    removeByMeasure(measureType) {
        this.showLoader = true;
        this.dataTableService.deleteDataByMeasure(this.customDtOptions.deleteByMeasure, measureType).subscribe((res) => {
            console.log(res);
            this.currentRecord = null;
            this.currentOperation = '';
            this.toastr.success('Продукты удалены успешно', 'Успех');
            this.customDtOptions.eventCallbacks.deleted();
            this.getData(true);
        }, (err) => {
            console.log('Ошибка удаления продуктов', err.message);
            this.toastr.error(err.message, 'Ошибка удаления продуктов');
            this.currentRecord = null;
            this.currentOperation = '';
            this.showLoader = false;
        });
    }
    getCountByManufacturer(manufacturerId) {
        this.showLoader = true;
        this.dataTableService.getCountByManufacturer(this.customDtOptions.getByManufacturer, manufacturerId).subscribe((res) => {
            console.log(res);
            this.data = res;
            this.data = parseXml(this.data);
            this.data = this.data.Count.count;
            console.log(this.data);
            this.currentRecord = null;
            this.currentOperation = '';
            this.toastr.success('Продуктов подсчитано: ' + this.data, 'Успех');
            document.getElementById('p1').textContent = 'Продуктов подсчитано: ' + this.data;
            this.customDtOptions.eventCallbacks.countedByManufacturer();
            this.getData(true);
        }, (err) => {
            console.log('Ошибка подсчета продуктов', err.message);
            this.toastr.error(err.message, 'Ошибка подсчета продуктов');
            document.getElementById('p1').textContent = 'Продукты не подсчитаны';
            this.currentRecord = null;
            this.currentOperation = '';
            this.showLoader = false;
        });
    }
    getUniqueManufactureCost() {
        this.showLoader = true;
        this.dataTableService.getUniqueManufactureCosts(this.customDtOptions.getUniqueManufactureCosts).subscribe((res) => {
            console.log(res);
            this.data = res;
            this.data = parseXml(this.data);
            // this.data = this.data['Count']['count'];
            this.currentRecord = null;
            this.currentOperation = '';
            this.toastr.success('Продукты успешно найдены', 'Успех');
            // document.getElementById("p1").textContent = 'Products counted: '+ this.data;
            this.customDtOptions.eventCallbacks.countedByManufacturer();
            this.data = this.data.ArrayList.item;
            console.log(this.data);
            this.dtOptions.data = this.data;
            this.rerender();
        }, (err) => {
            console.log('Ошибка удаления записи', err.message);
            this.toastr.error(err.message, 'Ошибка удаления записи');
            this.currentRecord = null;
            this.currentOperation = '';
            this.showLoader = false;
        });
    }
    rerender() {
        this.dtElement.dtInstance.then((dtInstance) => {
            dtInstance.destroy();
            this.dtTrigger.next();
            this.showLoader = false;
        }); /*
        this.dtTrigger.next();
        this.showLoader = false;*/
        console.log('Rerendered');
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["data-table"]], viewQuery: function DataTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addEditModalRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { customDtOptions: "customDtOptions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]])], decls: 59, vars: 3, consts: [["datatable", "", 1, "table", 3, "dtOptions", "dtTrigger"], [1, "thead"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-id", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-name", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-coord-x", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-coord-y", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-creation-date", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-price", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-manufactureCost", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-unitOfMeasure", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-manu-id", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-manu-name", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-manu-fullName", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-manu_employeesCount", 1, "searchInput"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-manu_type", 1, "searchInput"], ["type", "hidden", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "name", "search-act", 1, "searchInput"], [1, "subDiv"], [1, "measureArea"], ["id", "delByMeasureBtn", "tabindex", "2", 1, "btn", "btn-primary", "px-2", "py-1", "mr-3"], [1, "inputDiv"], ["id", "measureField", 1, "select"], [1, "countArea"], ["id", "countByManufacturerIdBtn", "tabindex", "2", 1, "btn", "btn-primary", "px-2", "py-1", "mr-3"], ["type", "text", "id", "manufacturerIdField", "placeholder", "\u0418\u0414 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F", "tabindex", "1"], ["id", "count", 1, "paragraph"], ["id", "p1"], [1, "uniqueArea"], ["id", "getUniqueManufactureCostBtn", "tabindex", "2", 1, "btn", "btn-primary", "px-2", "py-1", "mr-3"], ["addEditModal", ""], [3, "show"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["f", "ngForm"], ["class", "form-group row", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "ml-2", 3, "disabled"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], ["class", "col-sm-10", 4, "ngIf"], [1, "col-sm-10"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "required", "", 1, "form-control", 3, "ngModel", "name"], ["type", "text", 1, "form-control", 3, "ngModel", "name"], [1, "form-control", 3, "ngModel", "name"], ["id", "input_m_name", "type", "text", 1, "form-control", 3, "ngModel", "name"], ["id", "input_m_fullName", "type", "text", 1, "form-control", 3, "ngModel", "name"], ["id", "input_m_employeesCount", "type", "text", 1, "form-control", 3, "ngModel", "name"], [1, "text-danger"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043F\u043E \u0442\u0438\u043F\u0443 \u0435\u0434. \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "PCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "GRAMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "CENTIMETERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "MILLILITERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u041F\u043E\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043A\u043E\u043B-\u0432\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u041E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044F\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, DataTableComponent_ng_template_56_Template, 15, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "ngx-loading", 29);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.showLoader);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"]], styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n  \n}\n\n.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n\n.table[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  font-size: 8pt;\n}\n\n.thead[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.raw[_ngcontent-%COMP%] {\n  width: 14vw;\n  height: 5vh;\n  max-height: 5vh;\n}\n\n.dt-center1[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 1px;\n  max-width: 4vw;\n  white-space: nowrap;\n}\n\n.dt-center2[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 1px;\n  max-width: 4vw;\n  white-space: nowrap;\n}\n\n.measureArea[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-block: 20px;\n}\n\n.countArea[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-block: 20px;\n}\n\n.uniqueArea[_ngcontent-%COMP%] {\n  width: 60%;\n  padding-block: 40px;\n}\n\n.measureArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n  height: 32px;\n  box-sizing: border-box;\n}\n\n.measureArea[_ngcontent-%COMP%]   .inputDiv[_ngcontent-%COMP%], .countArea[_ngcontent-%COMP%]   .inputDiv[_ngcontent-%COMP%], .countArea[_ngcontent-%COMP%]   .inputDiv[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.measureArea[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 32px;\n  margin-left: auto;\n  float: right;\n}\n\n.countArea[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n  display: inline;\n}\n\n.countArea[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  float: right;\n  width: 150px;\n  height: 32px;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  max-width: 4vw;\n  font-size: 8pt;\n  font-style: italic;\n  background-color: #ffffff;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n  max-width: 3vh;\n}\n\n.editButton[_ngcontent-%COMP%] {\n  width: 50px;\n  height: auto;\n  max-width: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJrZ3Jla292L0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyLVByb2R1Y3RzLURhdGF0YWJsZS9zcmMvYXBwL2RhdGF0YWJsZS9kYXRhdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RhdGF0YWJsZS9kYXRhdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsOEJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FER0E7RUFDRSw4QkFBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDTUY7O0FESEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLHNCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ09GOztBREpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFHQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNRRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1FGOztBRExBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDUUY7O0FETEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2RhdGF0YWJsZS9kYXRhdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdLFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuXG5cbi5uZy10b3VjaGVkLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLnRhYmxle1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDhwdDtcbn1cbi50aGVhZHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yYXcge1xuXG4gIHdpZHRoOiAxNHZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgbWF4LWhlaWdodDogNXZoO1xufVxuLmR0LWNlbnRlcjF7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDFweDtcbiAgbWF4LXdpZHRoOiA0dnc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHQtY2VudGVyMntcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMXB4O1xuICBtYXgtd2lkdGg6IDR2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tZWFzdXJlQXJlYXtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbn1cbi5jb3VudEFyZWF7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG59XG4udW5pcXVlQXJlYXtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1ibG9jazogNDBweDtcbn1cblxuLm1lYXN1cmVBcmVhIGJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDMycHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1lYXN1cmVBcmVhIC5pbnB1dERpdiwgLmNvdW50QXJlYSAuaW5wdXREaXYsIC5jb3VudEFyZWEgLmlucHV0RGl2e1xuICBmbG9hdDogcmlnaHQ7XG59XG4ubWVhc3VyZUFyZWEgc2VsZWN0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICAvL3BhZGRpbmc6IDAgM3B4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb3VudEFyZWEgYnV0dG9ue1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOjA7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jb3VudEFyZWEgaW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uc2VhcmNoSW5wdXR7XG4gIG1heC13aWR0aDogNHZ3O1xuICBmb250LXNpemU6IDhwdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGVsZXRlQnV0dG9ue1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDN2aDtcbn1cblxuLmVkaXRCdXR0b257XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogM3ZoO1xufVxuIiwiLm5nLXZhbGlkW3JlcXVpcmVkXSxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcbiAgLyogZ3JlZW4gKi9cbn1cblxuLm5nLXRvdWNoZWQubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7XG4gIC8qIHJlZCAqL1xufVxuXG4udGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDhwdDtcbn1cblxuLnRoZWFkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJhdyB7XG4gIHdpZHRoOiAxNHZ3O1xuICBoZWlnaHQ6IDV2aDtcbiAgbWF4LWhlaWdodDogNXZoO1xufVxuXG4uZHQtY2VudGVyMSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDFweDtcbiAgbWF4LXdpZHRoOiA0dnc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kdC1jZW50ZXIyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMXB4O1xuICBtYXgtd2lkdGg6IDR2dztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1lYXN1cmVBcmVhIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy1ibG9jazogMjBweDtcbn1cblxuLmNvdW50QXJlYSB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmctYmxvY2s6IDIwcHg7XG59XG5cbi51bmlxdWVBcmVhIHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1ibG9jazogNDBweDtcbn1cblxuLm1lYXN1cmVBcmVhIGJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDMycHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWVhc3VyZUFyZWEgLmlucHV0RGl2LCAuY291bnRBcmVhIC5pbnB1dERpdiwgLmNvdW50QXJlYSAuaW5wdXREaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZWFzdXJlQXJlYSBzZWxlY3Qge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNvdW50QXJlYSBidXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5jb3VudEFyZWEgaW5wdXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uc2VhcmNoSW5wdXQge1xuICBtYXgtd2lkdGg6IDR2dztcbiAgZm9udC1zaXplOiA4cHQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRlbGV0ZUJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogM3ZoO1xufVxuXG4uZWRpdEJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogM3ZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'data-table',
                styleUrls: ['./datatable.component.scss'],
                templateUrl: './datatable.component.html',
                providers: [_dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _dataTable_service__WEBPACK_IMPORTED_MODULE_0__["DataTableService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { customDtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addEditModalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['addEditModal']
        }], dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datatable/datatable.component */ "./src/app/datatable/datatable.component.ts");



class ProductsComponent {
    constructor() { }
    ngOnInit() {
        this.customDtOptions = {
            // baseApiUrl: "http://labvm-42-05.itmo-lab.cosm-lab.science:8080",
            baseApiUrl: "http://localhost:8080",
            get: "products",
            edit: "products",
            add: "products",
            delete: "products/:id",
            deleteByMeasure: "products/measure",
            getByManufacturer: "products/measure",
            getUniqueManufactureCosts: "products/distinct",
            param: "id",
            generateParamOnAdd: true,
            dataTableOptions: {
                columns: [
                    { title: "ИД", data: "id" },
                    { title: "Название", data: "name", format: "text" },
                    { title: "Коорд. х", data: "coordinates.0.x" },
                    { title: "Коорд. у", data: "coordinates.0.y" },
                    { title: "Дата создания", data: "creationDate" },
                    { title: "Цена", data: "price", format: "text" },
                    { title: "Стоимость", data: "manufactureCost" },
                    { title: "Ед. измерения", data: "unitOfMeasure", format: "text" },
                    { title: "Производ. ИД", data: "manufacturer.0.id" },
                    { title: "Имя производ.", data: "manufacturer.0.name" },
                    { title: "Полное имя производ.", data: "manufacturer.0.fullName" },
                    { title: "Число сотрудников", data: "manufacturer.0.employeesCount" },
                    { title: "Тип компании", data: "manufacturer.0.type" }
                ]
            },
            eventCallbacks: {
                edited: function () {
                    console.log("Product Edited");
                },
                added: function () {
                    console.log("Product Added");
                },
                deleted: function () {
                    console.log('Products Deleted');
                },
                countedByManufacturer: function () {
                    console.log('Products counted by manufacturer');
                },
            }
        };
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 8, vars: 1, consts: [[1, "container", "container-fluid"], [1, "text-center"], [1, "data-table-div"], [3, "customDtOptions"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u2116 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "data-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("customDtOptions", ctx.customDtOptions);
    } }, directives: [_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_1__["DataTableComponent"]], styles: [".products[_ngcontent-%COMP%] {\n  height: calc(100vh);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJrZ3Jla292L0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyLVByb2R1Y3RzLURhdGF0YWJsZS9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHN7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsIi5wcm9kdWN0cyB7XG4gIGhlaWdodDogY2FsYygxMDB2aCk7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/in-memory.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/in-memory.service.ts ***!
  \***********************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InMemoryDataService {
    constructor() { }
    createDb() {
        let products = [{ "id": "1", "employee_name": "Tiger Nixon", "employee_salary": "320800", "employee_age": "61", "profile_image": "" }, { "id": "2", "employee_name": "Garrett Winters", "employee_salary": "170750", "employee_age": "63", "profile_image": "" }, { "id": "3", "employee_name": "Ashton Cox", "employee_salary": "86000", "employee_age": "66", "profile_image": "" }, { "id": "4", "employee_name": "Cedric Kelly", "employee_salary": "433060", "employee_age": "22", "profile_image": "" }, { "id": "5", "employee_name": "Airi Satou", "employee_salary": "162700", "employee_age": "33", "profile_image": "" }, { "id": "6", "employee_name": "Brielle Williamson", "employee_salary": "372000", "employee_age": "61", "profile_image": "" }, { "id": "7", "employee_name": "Herrod Chandler", "employee_salary": "137500", "employee_age": "59", "profile_image": "" }, { "id": "8", "employee_name": "Rhona Davidson", "employee_salary": "327900", "employee_age": "55", "profile_image": "" }, { "id": "9", "employee_name": "Colleen Hurst", "employee_salary": "205500", "employee_age": "39", "profile_image": "" }, { "id": "10", "employee_name": "Sonya Frost", "employee_salary": "103600", "employee_age": "23", "profile_image": "" }, { "id": "11", "employee_name": "Jena Gaines", "employee_salary": "90560", "employee_age": "30", "profile_image": "" }, { "id": "12", "employee_name": "Quinn Flynn", "employee_salary": "342000", "employee_age": "22", "profile_image": "" }, { "id": "13", "employee_name": "Charde Marshall", "employee_salary": "470600", "employee_age": "36", "profile_image": "" }, { "id": "14", "employee_name": "Haley Kennedy", "employee_salary": "313500", "employee_age": "43", "profile_image": "" }, { "id": "15", "employee_name": "Tatyana Fitzpatrick", "employee_salary": "385750", "employee_age": "19", "profile_image": "" }, { "id": "16", "employee_name": "Michael Silva", "employee_salary": "198500", "employee_age": "66", "profile_image": "" }, { "id": "17", "employee_name": "Paul Byrd", "employee_salary": "725000", "employee_age": "64", "profile_image": "" }, { "id": "18", "employee_name": "Gloria Little", "employee_salary": "237500", "employee_age": "59", "profile_image": "" }, { "id": "19", "employee_name": "Bradley Greer", "employee_salary": "132000", "employee_age": "41", "profile_image": "" }, { "id": "20", "employee_name": "Dai Rios", "employee_salary": "217500", "employee_age": "35", "profile_image": "" }, { "id": "21", "employee_name": "Jenette Caldwell", "employee_salary": "345000", "employee_age": "30", "profile_image": "" }, { "id": "22", "employee_name": "Yuri Berry", "employee_salary": "675000", "employee_age": "40", "profile_image": "" }, { "id": "23", "employee_name": "Caesar Vance", "employee_salary": "106450", "employee_age": "21", "profile_image": "" }, { "id": "24", "employee_name": "Doris Wilder", "employee_salary": "85600", "employee_age": "23", "profile_image": "" }];
        return { products };
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    inMemoryDatabase: false
};


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
const environment = {
    production: true,
    inMemoryDatabase: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markgrekov/Documents/Projects/Angular-Products-Datatable/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map