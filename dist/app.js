webpackJsonp([1],{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(14);
var PurchaseOrders_service_1 = __webpack_require__(639);
__webpack_require__(121);
var PurchaseOrdersComponent = (function () {
    function PurchaseOrdersComponent(poSrvc) {
        this.poSrvc = poSrvc;
        this.purchaseOrder = null;
        this.poReposted = false;
        this.additionalDetails = false;
    }
    PurchaseOrdersComponent.prototype.trackPurchaseOrder = function (id) {
        var _this = this;
        this.poReposted = false;
        this.additionalDetails = false;
        this.poSrvc.getPurchaseOrderById(id)
            .subscribe(function (po) {
            _this.purchaseOrder = po;
        });
    };
    PurchaseOrdersComponent.prototype.repostPO = function (id) {
        this.additionalDetails = false;
        this.poReposted = true;
    };
    PurchaseOrdersComponent.prototype.getAdditionalDetails = function () {
        this.poReposted = false;
        this.additionalDetails = true;
    };
    PurchaseOrdersComponent.prototype.setStatusColor = function (stepID) {
        return {
            complete: this.purchaseOrder.Status.ApplicationStep > stepID,
            upcoming: this.purchaseOrder.Status.ApplicationStep < stepID,
            success: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'Success',
            inProgress: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'In Progress',
            failed: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'Failure'
        };
    };
    return PurchaseOrdersComponent;
}());
PurchaseOrdersComponent = __decorate([
    core_1.Component({
        selector: 'purchase-orders',
        template: __webpack_require__(640),
        providers: [PurchaseOrders_service_1.PurchaseOrdersService]
    }),
    __metadata("design:paramtypes", [PurchaseOrders_service_1.PurchaseOrdersService])
], PurchaseOrdersComponent);
exports.PurchaseOrdersComponent = PurchaseOrdersComponent;


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(14);
var CustomersComponent = (function () {
    function CustomersComponent() {
    }
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        selector: 'customers',
        template: 'This is a placeholder for Customer Search',
    }),
    __metadata("design:paramtypes", [])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(14);
var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
    }
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    core_1.Component({
        selector: 'analytics',
        template: 'This is a placeholder for Analytics',
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);
exports.AnalyticsComponent = AnalyticsComponent;


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(163);
var app_module_1 = __webpack_require__(637);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(14);
var platform_browser_1 = __webpack_require__(56);
var forms_1 = __webpack_require__(164);
var http_1 = __webpack_require__(66);
var app_component_1 = __webpack_require__(638);
var PurchaseOrders_component_1 = __webpack_require__(200);
var Customers_component_1 = __webpack_require__(201);
var Analytics_component_1 = __webpack_require__(202);
var NavBar_component_1 = __webpack_require__(641);
var app_routes_1 = __webpack_require__(643);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, PurchaseOrders_component_1.PurchaseOrdersComponent, Customers_component_1.CustomersComponent, Analytics_component_1.AnalyticsComponent, NavBar_component_1.NavBarComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(14);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<my-nav></my-nav>\n                <router-outlet></router-outlet>"
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(14);
var http_1 = __webpack_require__(66);
__webpack_require__(121);
var PurchaseOrdersService = (function () {
    function PurchaseOrdersService(_http) {
        this._http = _http;
        // private _purchaseOrderUrl='app/purchaseOrders.json';
        this._purchaseOrderUrl = 'http://p1vmb2bls01.olqa.preol.dell.com:4000/api/purchaseorder';
    }
    PurchaseOrdersService.prototype.getPurchaseOrderById = function (id) {
        return this._http.get(this._purchaseOrderUrl + '?Id=' + id)
            .map(function (response) { return response.json(); });
    };
    return PurchaseOrdersService;
}());
PurchaseOrdersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PurchaseOrdersService);
exports.PurchaseOrdersService = PurchaseOrdersService;


/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1>B2B Unified Action Center</h1>      \r\n        <p>Track and sync your Purchase Order. Deep dive and know Customer Order trends</p>\r\n        <button type=\"button\" class=\"btn btn-primary\">Learn more >></button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\" col-sm-3\">\r\n                    <label for=\"ordNo\">PO Number:</label>\r\n                    <input id=\"ordNo\" class=\"form-control\" [(ngModel)]=\"purchaseOrderNum\"><br/><br/>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"trackPurchaseOrder(purchaseOrderNum)\">Track Order</button>\r\n        </div>\r\n        <br/><br/>\r\n        <div *ngIf=\"purchaseOrder\">\r\n            <div class=\"row applicationStep\">\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(1)\">B2B Direct</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(2)\">B2B Service</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(3)\">GCMP</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(4)\">OFS</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(5)\">Shipping</div>\r\n                </div>\r\n            </div>\r\n            <br/><br/><br/><br/>\r\n            <div *ngIf=\"purchaseOrder.Status.FailureText\">\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"repostPO(purchaseOrderNum)\">Repost PO</button>\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"getAdditionalDetails()\">Find Additional Details</button>\r\n            </div>\r\n            <br/><br/>\r\n            <div class=\"row\">\r\n                <div class=\" col-sm-2\">\r\n                    <div class=\"alert alert-success\" *ngIf=\"poReposted\">PO {{purchaseOrder.PurchaseOrderNo}} Reposted</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\" col-sm-6\">\r\n                    <div class=\"alert alert-info\" *ngIf=\"additionalDetails\">\r\n                        <div>PurchaseOrderNo: {{purchaseOrder.PurchaseOrderNo}}</div>\r\n                        <div>OrderAmount: {{purchaseOrder.OrderAmount | currency}}</div>\r\n                        <div>OrderDate: {{purchaseOrder.OrderDate}}</div>\r\n                        <div>CustomerNo: {{purchaseOrder.CustomerNo}}</div>\r\n                        <div>Status Details -</div>\r\n                        <div style=\"text-indent:40px\">LastUpdateTS: {{purchaseOrder.Status.LastUpdateTS}}</div>\r\n                        <div style=\"text-indent:40px\">ApplicationStep: {{purchaseOrder.Status.ApplicationStep}}</div>\r\n                        <div style=\"text-indent:40px\">ApplicationStatus: {{purchaseOrder.Status.ApplicationStatus}}</div>\r\n                        <div *ngIf=\"purchaseOrder.Status.FailureText\" style=\"text-indent:40px\">FailureText: {{purchaseOrder.Status.FailureText}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(14);
var NavBarComponent = (function () {
    function NavBarComponent() {
        this.headerLinks = [{
                Id: 'po-search-link',
                Text: "By PO",
                Href: '/purchase-orders'
            },
            {
                Id: 'customer-search-link',
                Text: "By Customer",
                Href: '/customers'
            },
            {
                Id: 'analytics-link',
                Text: "Analytics",
                Href: '/analytics'
            }];
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'my-nav',
        template: __webpack_require__(642)
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;


/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<header class=\"uif_mastHead_standard clearfix\" id=\"revidHeader\">\r\n    <nav dell-modal-popup-triggers class=\"mh dell-blue-background dell-layout-row\">\r\n        <div class=\"dell-layout-row-content clearfix topNav\">\r\n            <div class=\"mhNav\">\r\n                <a title=\"Dell\" class=\"mhLogo\" href=\"//www.dell.com/account/\">\r\n                    <img id=\"imgmhbluelogo\" alt=\"Dell Logo\" src=\"//i.dell.com/images/global/brand/ui/logo-wt-bl.png\">\r\n                </a>\r\n                <div class=\"tierNav\">\r\n                    <ul class=\"t1Nav horizontal-list\">\r\n                        <li id=\"{{link.Id}}\" class=\"primaryLevelMenu\" *ngFor=\"let link of headerLinks\">\r\n                            <div class=\"primaryLink\">\r\n                                <a class=\"mNav\" routerLink=\"{{link.Href}}\" target=\"_self\">{{link.Text}}</a>\r\n                                <span></span>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>";

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(167);
var PurchaseOrders_component_1 = __webpack_require__(200);
var Customers_component_1 = __webpack_require__(201);
var Analytics_component_1 = __webpack_require__(202);
var routes = [
    { path: '', redirectTo: 'purchase-orders', pathMatch: 'full' },
    { path: 'purchase-orders', component: PurchaseOrders_component_1.PurchaseOrdersComponent },
    { path: 'customers', component: Customers_component_1.CustomersComponent },
    { path: 'analytics', component: Analytics_component_1.AnalyticsComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });


/***/ })

},[636]);
//# sourceMappingURL=app.js.map