import { Injectable } from '@angular/core';
import { IPurchaseOrder } from '../PurchaseOrders/PurchaseOrder';

@Injectable()
export class CommonDataService {
    private _selectedPurchaseOrder: IPurchaseOrder = null;
    private _previousPage: string = null;
    constructor(){}

    setSelectedPO(po : IPurchaseOrder) {
        this._selectedPurchaseOrder = po;
    }

    getSelectedPO() {
        return this._selectedPurchaseOrder;
    }

    setPreviousPage(previousPage: string) {
        this._previousPage = previousPage;
    }

    getPreviousPage() {
        return this._previousPage;
    }
}