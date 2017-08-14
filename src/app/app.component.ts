import { Component } from '@angular/core';
import { CommonDataService } from './Common/CommonData.service';
import { PurchaseOrdersService } from './PurchaseOrders/PurchaseOrders.service';

@Component({
    selector: 'my-app',
    template: `<my-nav></my-nav>
                <router-outlet></router-outlet>`,
    providers: [ PurchaseOrdersService, CommonDataService ]
})
export class AppComponent {
    constructor(private poSrvc: PurchaseOrdersService, private commonDataService: CommonDataService) {
    }
}