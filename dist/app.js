webpackJsonp([1],{

/***/ 123:
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
var core_1 = __webpack_require__(11);
var http_1 = __webpack_require__(66);
__webpack_require__(89);
var PurchaseOrdersService = (function () {
    function PurchaseOrdersService(_http) {
        this._http = _http;
        //private _purchaseOrderUrl='app/purchaseOrders.json';
        this._purchaseOrderUrl = 'http://p1vmb2bls01.olqa.preol.dell.com:4000/api/purchaseorder';
    }
    PurchaseOrdersService.prototype.getPurchaseOrderById = function (id) {
        return this._http.get(this._purchaseOrderUrl + '?Id=' + id)
            .map(function (response) { return response.json(); });
    };
    PurchaseOrdersService.prototype.getPurchaseOrders = function () {
        return this._http.get('app/purchaseOrders.json')
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
var core_1 = __webpack_require__(11);
var PurchaseOrders_service_1 = __webpack_require__(123);
var CommonData_service_1 = __webpack_require__(71);
__webpack_require__(89);
var PurchaseOrdersSearchComponent = (function () {
    function PurchaseOrdersSearchComponent(poSrvc, commonDataService) {
        this.poSrvc = poSrvc;
        this.commonDataService = commonDataService;
        this.purchaseOrder = null;
        this.purchaseOrderNum = '';
        this.poReposted = false;
        this.additionalDetails = false;
        this.showResults = false;
        this.previousPage = '';
    }
    PurchaseOrdersSearchComponent.prototype.ngOnInit = function () {
        var selectedPo = this.commonDataService.getSelectedPO();
        if (selectedPo) {
            this.purchaseOrder = selectedPo;
            this.purchaseOrderNum = this.purchaseOrder.PurchaseOrderNo;
            this.showResults = true;
        }
        var previousPage = this.commonDataService.getPreviousPage();
        if (previousPage) {
            this.previousPage = previousPage;
        }
    };
    PurchaseOrdersSearchComponent.prototype.trackPurchaseOrder = function (id) {
        var _this = this;
        this.showResults = false;
        this.poReposted = false;
        this.additionalDetails = false;
        this.poSrvc.getPurchaseOrderById(id)
            .subscribe(function (po) {
            _this.showResults = true;
            _this.purchaseOrder = po;
            _this.commonDataService.setSelectedPO(po);
        });
    };
    PurchaseOrdersSearchComponent.prototype.repostPO = function (id) {
        this.additionalDetails = false;
        this.poReposted = true;
    };
    PurchaseOrdersSearchComponent.prototype.getAdditionalDetails = function () {
        this.poReposted = false;
        this.additionalDetails = true;
    };
    PurchaseOrdersSearchComponent.prototype.setStatusColor = function (stepID) {
        return {
            complete: this.purchaseOrder.Status.ApplicationStep > stepID,
            upcoming: this.purchaseOrder.Status.ApplicationStep < stepID,
            success: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'Success',
            inProgress: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'In Progress',
            failed: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'Failure'
        };
    };
    return PurchaseOrdersSearchComponent;
}());
PurchaseOrdersSearchComponent = __decorate([
    core_1.Component({
        selector: 'purchase-orders-search',
        template: __webpack_require__(642)
    }),
    __metadata("design:paramtypes", [PurchaseOrders_service_1.PurchaseOrdersService, CommonData_service_1.CommonDataService])
], PurchaseOrdersSearchComponent);
exports.PurchaseOrdersSearchComponent = PurchaseOrdersSearchComponent;


/***/ }),

/***/ 203:
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
var core_1 = __webpack_require__(11);
var PurchaseOrders_service_1 = __webpack_require__(123);
var CommonData_service_1 = __webpack_require__(71);
__webpack_require__(89);
var PurchaseOrdersBrowseComponent = (function () {
    function PurchaseOrdersBrowseComponent(poSrvc, commonDataService) {
        this.poSrvc = poSrvc;
        this.commonDataService = commonDataService;
        this.purchaseOrders = null;
        this.selectedPoNum = '';
        this.showResults = false;
    }
    PurchaseOrdersBrowseComponent.prototype.ngOnInit = function () {
        var selectedPo = this.commonDataService.getSelectedPO();
        if (selectedPo) {
            this.selectedPoNum = selectedPo.PurchaseOrderNo;
            this.getPurchaseOrders();
        }
    };
    PurchaseOrdersBrowseComponent.prototype.selectPO = function (purchaseOrder) {
        this.commonDataService.setSelectedPO(purchaseOrder);
        this.commonDataService.setPreviousPage("/browse/purchase-orders");
    };
    PurchaseOrdersBrowseComponent.prototype.getPurchaseOrders = function () {
        var _this = this;
        this.showResults = false;
        this.poSrvc.getPurchaseOrders()
            .subscribe(function (po) {
            _this.showResults = true;
            _this.purchaseOrders = po;
        });
    };
    PurchaseOrdersBrowseComponent.prototype.getCollapseStatus = function (poNum) {
        return poNum == this.selectedPoNum ? "in" : "";
    };
    return PurchaseOrdersBrowseComponent;
}());
PurchaseOrdersBrowseComponent = __decorate([
    core_1.Component({
        selector: 'purchase-orders-browse',
        template: __webpack_require__(643)
    }),
    __metadata("design:paramtypes", [PurchaseOrders_service_1.PurchaseOrdersService, CommonData_service_1.CommonDataService])
], PurchaseOrdersBrowseComponent);
exports.PurchaseOrdersBrowseComponent = PurchaseOrdersBrowseComponent;


/***/ }),

/***/ 204:
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
var core_1 = __webpack_require__(11);
var CommonData_service_1 = __webpack_require__(71);
var CustomersComponent = (function () {
    function CustomersComponent(commonDataService) {
        this.commonDataService = commonDataService;
        console.log(commonDataService.getSelectedPO());
    }
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        selector: 'customers',
        template: 'This is a placeholder for Customer Search',
    }),
    __metadata("design:paramtypes", [CommonData_service_1.CommonDataService])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;


/***/ }),

/***/ 205:
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
var core_1 = __webpack_require__(11);
var CommonData_service_1 = __webpack_require__(71);
var AnalyticsComponent = (function () {
    function AnalyticsComponent(commonDataService) {
        this.commonDataService = commonDataService;
    }
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    core_1.Component({
        selector: 'analytics',
        template: 'This is a placeholder for Analytics',
    }),
    __metadata("design:paramtypes", [CommonData_service_1.CommonDataService])
], AnalyticsComponent);
exports.AnalyticsComponent = AnalyticsComponent;


/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(165);
var app_module_1 = __webpack_require__(640);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(11);
var platform_browser_1 = __webpack_require__(56);
var forms_1 = __webpack_require__(166);
var http_1 = __webpack_require__(66);
var app_component_1 = __webpack_require__(641);
var PurchaseOrders_Search_component_1 = __webpack_require__(202);
var PurchaseOrders_Browse_component_1 = __webpack_require__(203);
var Customers_component_1 = __webpack_require__(204);
var Analytics_component_1 = __webpack_require__(205);
var NavBar_component_1 = __webpack_require__(644);
var app_routes_1 = __webpack_require__(646);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, PurchaseOrders_Search_component_1.PurchaseOrdersSearchComponent, PurchaseOrders_Browse_component_1.PurchaseOrdersBrowseComponent, Customers_component_1.CustomersComponent, Analytics_component_1.AnalyticsComponent, NavBar_component_1.NavBarComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


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
var core_1 = __webpack_require__(11);
var CommonData_service_1 = __webpack_require__(71);
var PurchaseOrders_service_1 = __webpack_require__(123);
var AppComponent = (function () {
    function AppComponent(poSrvc, commonDataService) {
        this.poSrvc = poSrvc;
        this.commonDataService = commonDataService;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<my-nav></my-nav>\n                <router-outlet></router-outlet>",
        providers: [PurchaseOrders_service_1.PurchaseOrdersService, CommonData_service_1.CommonDataService]
    }),
    __metadata("design:paramtypes", [PurchaseOrders_service_1.PurchaseOrdersService, CommonData_service_1.CommonDataService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1>B2B Unified Action Center</h1>      \r\n        <p>Track and sync your Purchase Order. Deep dive and know Customer Order trends</p>\r\n        <button type=\"button\" class=\"btn btn-primary\">Learn more >></button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                    <label for=\"ordNo\">PO Number:</label>\r\n                    <input id=\"ordNo\" class=\"form-control\" [(ngModel)]=\"purchaseOrderNum\">\r\n                </div>\r\n            </div><br/>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"trackPurchaseOrder(purchaseOrderNum)\">Track Order</button>\r\n        </div>\r\n        <br/><br/>\r\n        <div *ngIf=\"showResults\">\r\n            <div *ngIf=\"purchaseOrder\">\r\n                <div class=\"row\" style=\"margin-left: -8px\">\r\n                    <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                        <div class=\"applicationStep\" [ngClass]=\"setStatusColor(1)\">B2B Direct</div>\r\n                        <div style=\"font-weight: 900; float:right\">></div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                        <div class=\"applicationStep\" [ngClass]=\"setStatusColor(2)\">B2B Service</div>\r\n                        <div style=\"font-weight: 900; float:right\">></div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                        <div class=\"applicationStep\" [ngClass]=\"setStatusColor(3)\">GCMP</div>\r\n                        <div style=\"font-weight: 900; float:right\">></div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                        <div class=\"applicationStep\" [ngClass]=\"setStatusColor(4)\">OFS</div>\r\n                        <div style=\"font-weight: 900; float:right\">></div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                        <div class=\"applicationStep\" [ngClass]=\"setStatusColor(5)\">Shipping</div>\r\n                    </div>\r\n                </div>\r\n                <br/>\r\n                <div *ngIf=\"purchaseOrder.Status.FailureText\">\r\n                    <button type=\"button\" class=\"btn\" (click)=\"repostPO(purchaseOrderNum)\">Repost PO</button>\r\n                    <button type=\"button\" class=\"btn\" (click)=\"getAdditionalDetails()\">Find Additional Details</button>\r\n                    <br/><br/>                 \r\n                </div>                \r\n                <button *ngIf=\"previousPage\" type=\"button\" class=\"btn\" routerLink=\"{{previousPage}}\">Return to Browse</button>\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\" col-sm-2\">\r\n                        <div class=\"alert alert-success\" *ngIf=\"poReposted\">PO {{purchaseOrder.PurchaseOrderNo}} Reposted</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\" col-sm-6\">\r\n                        <div class=\"alert alert-info\" *ngIf=\"additionalDetails\">\r\n                            <div>PurchaseOrderNo: {{purchaseOrder.PurchaseOrderNo}}</div>\r\n                            <div>OrderAmount: {{purchaseOrder.OrderAmount | currency:'USD':true}}</div>\r\n                            <div>OrderDate: {{purchaseOrder.OrderDate}}</div>\r\n                            <div>CustomerNo: {{purchaseOrder.CustomerNo}}</div>\r\n                            <div>Status Details -</div>\r\n                            <div style=\"text-indent:40px\">LastUpdateTS: {{purchaseOrder.Status.LastUpdateTS}}</div>\r\n                            <div style=\"text-indent:40px\">ApplicationStep: {{purchaseOrder.Status.ApplicationStep}}</div>\r\n                            <div style=\"text-indent:40px\">ApplicationStatus: {{purchaseOrder.Status.ApplicationStatus}}</div>\r\n                            <div *ngIf=\"purchaseOrder.Status.FailureText\" style=\"text-indent:40px\">FailureText: {{purchaseOrder.Status.FailureText}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1>B2B Unified Action Center</h1>      \r\n        <p>Track and sync your Purchase Order. Deep dive and know Customer Order trends</p>\r\n        <button type=\"button\" class=\"btn btn-primary\">Learn more >></button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div>\r\n             <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                    <label for=\"ordNo\">Placerholder div for filter controls</label>\r\n                </div>\r\n            </div><br/> \r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"getPurchaseOrders()\">Get Purchase Orders</button>\r\n        </div>\r\n        <br/><br/>\r\n        <div *ngIf=\"showResults\" class=\"panel-group\">\r\n            <div *ngFor=\"let purchaseOrder of purchaseOrders\">\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4 class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" href=\"#details-{{purchaseOrder.PurchaseOrderNo}}\">PurchaseOrderNo: {{purchaseOrder.PurchaseOrderNo}}</a>\r\n                        </h4>\r\n                    </div>\r\n                    <div id=\"details-{{purchaseOrder.PurchaseOrderNo}}\" class=\"panel-collapse collapse\" [ngClass]=\"getCollapseStatus(purchaseOrder.PurchaseOrderNo)\">\r\n                        <div class=\"panel-body\">\r\n                            <div>OrderAmount: {{purchaseOrder.OrderAmount | currency:'USD':true}}</div>\r\n                            <div>OrderDate: {{purchaseOrder.OrderDate}}</div>\r\n                            <div>CustomerNo: {{purchaseOrder.CustomerNo}}</div>\r\n                            <div>Status Details -</div>\r\n                            <div style=\"text-indent:40px\">LastUpdateTS: {{purchaseOrder.Status.LastUpdateTS}}</div>\r\n                            <div style=\"text-indent:40px\">ApplicationStep: {{purchaseOrder.Status.ApplicationStep}}</div>\r\n                            <div style=\"text-indent:40px\">ApplicationStatus: {{purchaseOrder.Status.ApplicationStatus}}</div>\r\n                            <div *ngIf=\"purchaseOrder.Status.FailureText\" style=\"text-indent:40px\">FailureText: {{purchaseOrder.Status.FailureText}}</div>\r\n                            <br/>\r\n                            <button type=\"button\" class=\"btn\" (click)=\"selectPO(purchaseOrder)\" routerLink=\"/search/purchase-orders\">Send to Search</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 644:
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
var core_1 = __webpack_require__(11);
var NavBarComponent = (function () {
    function NavBarComponent() {
        this.headerLinks = [{
                Id: 'po-browse-link',
                Text: "Browse PO",
                Href: '/browse/purchase-orders'
            },
            {
                Id: 'po-search-link',
                Text: "Search PO",
                Href: '/search/purchase-orders'
            },
            {
                Id: 'customer-search-link',
                Text: "Search Customer",
                Href: '/search/customers'
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
        template: __webpack_require__(645)
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;


/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<header class=\"uif_mastHead_standard clearfix\" id=\"revidHeader\">\r\n    <nav dell-modal-popup-triggers class=\"mh dell-blue-background dell-layout-row\">\r\n        <div class=\"dell-layout-row-content clearfix topNav\">\r\n            <div class=\"mhNav\">\r\n                <a title=\"Dell\" class=\"mhLogo\" href=\"//www.dell.com/account/\">\r\n                    <img id=\"imgmhbluelogo\" alt=\"Dell Logo\" src=\"//i.dell.com/images/global/brand/ui/logo-wt-bl.png\">\r\n                </a>\r\n                <div class=\"tierNav\">\r\n                    <ul class=\"t1Nav horizontal-list\">\r\n                        <li id=\"{{link.Id}}\" class=\"primaryLevelMenu\" *ngFor=\"let link of headerLinks\">\r\n                            <div class=\"primaryLink\">\r\n                                <a class=\"mNav\" routerLink=\"{{link.Href}}\" target=\"_self\">{{link.Text}}</a>\r\n                                <span></span>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>";

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(169);
var PurchaseOrders_Search_component_1 = __webpack_require__(202);
var PurchaseOrders_Browse_component_1 = __webpack_require__(203);
var Customers_component_1 = __webpack_require__(204);
var Analytics_component_1 = __webpack_require__(205);
var routes = [
    { path: '', redirectTo: 'search/purchase-orders', pathMatch: 'full' },
    { path: 'search/purchase-orders', component: PurchaseOrders_Search_component_1.PurchaseOrdersSearchComponent },
    { path: 'browse/purchase-orders', component: PurchaseOrders_Browse_component_1.PurchaseOrdersBrowseComponent },
    { path: 'search/customers', component: Customers_component_1.CustomersComponent },
    { path: 'browse/customers', component: Customers_component_1.CustomersComponent },
    { path: 'analytics', component: Analytics_component_1.AnalyticsComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });


/***/ }),

/***/ 71:
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
var core_1 = __webpack_require__(11);
var CommonDataService = (function () {
    function CommonDataService() {
        this._selectedPurchaseOrder = null;
        this._previousPage = null;
    }
    CommonDataService.prototype.setSelectedPO = function (po) {
        this._selectedPurchaseOrder = po;
    };
    CommonDataService.prototype.getSelectedPO = function () {
        return this._selectedPurchaseOrder;
    };
    CommonDataService.prototype.setPreviousPage = function (previousPage) {
        this._previousPage = previousPage;
    };
    CommonDataService.prototype.getPreviousPage = function () {
        return this._previousPage;
    };
    return CommonDataService;
}());
CommonDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CommonDataService);
exports.CommonDataService = CommonDataService;


/***/ })

},[639]);
//# sourceMappingURL=app.js.map