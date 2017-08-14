import { Component, OnInit } from '@angular/core';
import { IPurchaseOrder } from './PurchaseOrder';
import { PurchaseOrdersService } from './PurchaseOrders.service';
import { CommonDataService } from '../Common/CommonData.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
    selector: 'purchase-orders-search',
    templateUrl: './PurchaseOrders.Search.component.html'
})

export class PurchaseOrdersSearchComponent implements OnInit {
    purchaseOrder: IPurchaseOrder = null;
    purchaseOrderNum: string = '';
    poReposted = false;
    additionalDetails = false;
    showResults = false;
    previousPage:string = '';

    constructor(private poSrvc: PurchaseOrdersService, private commonDataService: CommonDataService) {
    }

    ngOnInit() {
        let selectedPo = this.commonDataService.getSelectedPO();
        if(selectedPo) {            
            this.purchaseOrder = selectedPo;
            this.purchaseOrderNum = this.purchaseOrder.PurchaseOrderNo;
            this.showResults = true;
        }
        let previousPage = this.commonDataService.getPreviousPage();
        if(previousPage) {
            this.previousPage = previousPage; 
        }
    }

    trackPurchaseOrder(id: number) {
        this.showResults = false;
        this.poReposted = false;
        this.additionalDetails = false;
        this.poSrvc.getPurchaseOrderById(id)
            .subscribe((po) => {
                this.showResults = true;
                this.purchaseOrder = po;
                this.commonDataService.setSelectedPO(po);
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