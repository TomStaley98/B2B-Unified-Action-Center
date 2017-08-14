import { Component, OnInit } from '@angular/core';
import { IPurchaseOrder } from './PurchaseOrder';
import { PurchaseOrdersService } from './PurchaseOrders.service';
import { CommonDataService } from '../Common/CommonData.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
    selector: 'purchase-orders-browse',
    templateUrl: './PurchaseOrders.Browse.component.html'
})

export class PurchaseOrdersBrowseComponent implements OnInit {
    purchaseOrders: IPurchaseOrder[] = null;
    selectedPoNum: string = '';
    showResults = false;

    constructor(private poSrvc: PurchaseOrdersService, private commonDataService: CommonDataService) {        
    }
    
    ngOnInit() {
        let selectedPo = this.commonDataService.getSelectedPO();
        if(selectedPo) {
            this.selectedPoNum = selectedPo.PurchaseOrderNo;
            this.getPurchaseOrders();
        }
    }

    selectPO(purchaseOrder: IPurchaseOrder) {
        this.commonDataService.setSelectedPO(purchaseOrder);
        this.commonDataService.setPreviousPage("/browse/purchase-orders");
    }

    getPurchaseOrders() {
        this.showResults = false;
        this.poSrvc.getPurchaseOrders()
            .subscribe((po) => {
                this.showResults = true;
                this.purchaseOrders = po;
            });
    }

    getCollapseStatus(poNum: string) {
        return poNum == this.selectedPoNum ? "in" : "";
    }
}