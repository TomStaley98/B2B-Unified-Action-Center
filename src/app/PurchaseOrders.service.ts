import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPurchaseOrder } from './PurchaseOrder';

@Injectable()
export class PurchaseOrdersService {
    private _purchaseOrderUrl='app/purchaseOrders.json';
    constructor(private _http: Http){}

    getPO(id: number): Observable<IPurchaseOrder> {
        return this.getPOs()
                .map(purchaseOrders => purchaseOrders.filter(po => po.PurchaseOrderNo == id)[0]);
    }
    
    getPOs(): Observable<IPurchaseOrder[]>{
        return this._http.get(this._purchaseOrderUrl)
                .map((response: Response) => <IPurchaseOrder[]> response.json());      
    }  
}