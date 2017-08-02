import { Component } from '@angular/core';
import { IPurchaseOrder } from './PurchaseOrder';
import { PurchaseOrdersService } from './PurchaseOrders.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
    selector: 'my-app',
    templateUrl: './PurchaseOrders.component.html',
    providers: [PurchaseOrdersService]
})

export class PurchaseOrdersComponent {
    purchaseOrder: IPurchaseOrder = null;
    poReposted = false;
    additionalDetails = false;

    constructor(private poSrvc: PurchaseOrdersService) {
    }

    trackPurchaseOrder(id: number) {
        this.poReposted = false;
        this.additionalDetails = false;
        this.poSrvc.getPO(id)
            .subscribe((po) => {
                this.purchaseOrder = po;
            });
    }

    repostPO(id: number) {
        this.additionalDetails = false;
        this.poReposted = true;
    }

    getAdditionalDetails() {
        this.poReposted = false;
        this.additionalDetails = true;
    }

    setStatusColor(stepID: number) {
        return {
            complete: this.purchaseOrder.Status.ApplicationStep > stepID,
            upcoming: this.purchaseOrder.Status.ApplicationStep < stepID,
            success: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'Success',
            inProgress: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'In Progress',
            failed: this.purchaseOrder.Status.ApplicationStep == stepID && this.purchaseOrder.Status.ApplicationStatus == 'Failure'
        }
    }
}