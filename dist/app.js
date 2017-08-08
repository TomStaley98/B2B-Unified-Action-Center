webpackJsonp([1],{

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(163);
var app_module_1 = __webpack_require__(632);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(21);
var platform_browser_1 = __webpack_require__(56);
var forms_1 = __webpack_require__(164);
var http_1 = __webpack_require__(66);
var PurchaseOrders_component_1 = __webpack_require__(633);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [PurchaseOrders_component_1.PurchaseOrdersComponent],
        bootstrap: [PurchaseOrders_component_1.PurchaseOrdersComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 633:
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
var core_1 = __webpack_require__(21);
var PurchaseOrders_service_1 = __webpack_require__(634);
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
        selector: 'my-app',
        template: __webpack_require__(635),
        providers: [PurchaseOrders_service_1.PurchaseOrdersService]
    }),
    __metadata("design:paramtypes", [PurchaseOrders_service_1.PurchaseOrdersService])
], PurchaseOrdersComponent);
exports.PurchaseOrdersComponent = PurchaseOrdersComponent;


/***/ }),

/***/ 634:
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
var core_1 = __webpack_require__(21);
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

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1>B2B Unified Action Center</h1>      \r\n        <p>Track and sync your Purchase Order. Deep dive and know Customer Order trends</p>\r\n        <button type=\"button\" class=\"btn btn-primary\">Learn more >></button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\" col-sm-3\">\r\n                    <label for=\"ordNo\">PO Number:</label>\r\n                    <input id=\"ordNo\" class=\"form-control\" [(ngModel)]=\"purchaseOrderNum\"><br/><br/>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"trackPurchaseOrder(purchaseOrderNum)\">Track Order</button>\r\n        </div>\r\n        <br/><br/>\r\n        <div *ngIf=\"purchaseOrder\">\r\n            <div class=\"row applicationStep\">\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(1)\">B2B Direct</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(2)\">B2B Service</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(3)\">GCMP</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(4)\">OFS</div>\r\n                    <div style=\"font-weight: 900; float:right\">></div>\r\n                </div>\r\n                <div class=\"col-sm-2 applicationStep\" style=\"padding-right: 0px; padding-left: 7px\">\r\n                    <div class=\"applicationStep\" [ngClass]=\"setStatusColor(5)\">Shipping</div>\r\n                </div>\r\n            </div>\r\n            <br/><br/><br/><br/>\r\n            <div *ngIf=\"purchaseOrder.Status.FailureText\">\r\n                <button type=\"button\" class=\"btn\" (click)=\"repostPO(purchaseOrderNum)\">Repost PO</button>\r\n                <button type=\"button\" class=\"btn\" (click)=\"getAdditionalDetails()\">Find Additional Details</button>\r\n            </div>\r\n            <br/><br/>\r\n            <div class=\"row\">\r\n                <div class=\" col-sm-2\">\r\n                    <div class=\"alert alert-success\" *ngIf=\"poReposted\">PO {{purchaseOrder.PurchaseOrderNo}} Reposted</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\" col-sm-6\">\r\n                    <div class=\"alert alert-info\" *ngIf=\"additionalDetails\">\r\n                        <div>PurchaseOrderNo: {{purchaseOrder.PurchaseOrderNo}}</div>\r\n                        <div>OrderAmount: {{purchaseOrder.OrderAmount | currency}}</div>\r\n                        <div>OrderDate: {{purchaseOrder.OrderDate}}</div>\r\n                        <div>CustomerNo: {{purchaseOrder.CustomerNo}}</div>\r\n                        <div>Status Details -</div>\r\n                        <div style=\"text-indent:40px\">LastUpdateTS: {{purchaseOrder.Status.LastUpdateTS}}</div>\r\n                        <div style=\"text-indent:40px\">ApplicationStep: {{purchaseOrder.Status.ApplicationStep}}</div>\r\n                        <div style=\"text-indent:40px\">ApplicationStatus: {{purchaseOrder.Status.ApplicationStatus}}</div>\r\n                        <div *ngIf=\"purchaseOrder.Status.FailureText\" style=\"text-indent:40px\">FailureText: {{purchaseOrder.Status.FailureText}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ })

},[631]);
//# sourceMappingURL=app.js.map