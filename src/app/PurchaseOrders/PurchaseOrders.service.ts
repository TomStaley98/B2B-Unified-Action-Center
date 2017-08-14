import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPurchaseOrder } from './PurchaseOrder';

@Injectable()
export class PurchaseOrdersService {
    //private _purchaseOrderUrl='app/purchaseOrders.json';
    private _purchaseOrderUrl='http://p1vmb2bls01.olqa.preol.dell.com:4000/api/purchaseorder';
    constructor(private _http: Http){}

    getPurchaseOrderById(id: number) {
        return this._http.get(this._purchaseOrderUrl + '?Id=' + id)
                .map((response: Response) => response.json());                
    }
    
    getPurchaseOrders() {
        return this._http.get('app/purchaseOrders.json')
                .map((response: Response) => response.json());
    }  
}