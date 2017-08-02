import {
    fakeAsync,
    inject,
    tick,
    TestBed
} from '@angular/core/testing';
import {
    HttpModule,
    Http,
    ResponseOptions,
    Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {PurchaseOrdersService} from '../app/PurchaseOrders.service';

const mockResponse = [{
    "PurchaseOrderNo": 1,
    "OrderAmount": 2584,
    "OrderDate": "08/1/2017",
    "CustomerNo": 1,
    "Status": {
        "ApplicationStep": 3,
        "ApplicationStatus": "Success",
        "FailureText": null,
        "LastUpdateTS": "08/2/2017 10:11:04 AM"
    }
},
{
    "PurchaseOrderNo": 2,
    "OrderAmount": 750,
    "OrderDate": "08/2/2017",
    "CustomerNo": 1,
    "Status": {
        "ApplicationStep": 2,
        "ApplicationStatus": "Failure",
        "FailureText": "Connection timeout",
        "LastUpdateTS": "08/2/2017 10:11:04 AM"
    }
}];

describe('Testing Purchase Order Service', () => {
    let mockHttp: Http;

    beforeEach(() => {
        mockHttp = { get: null } as Http;

        spyOn(mockHttp, 'get').and.returnValue(Observable.of({
            json: () => mockResponse
        }));

        TestBed.configureTestingModule({
        imports: [HttpModule],
        providers: [
            {
                provide: Http,
                useValue: mockHttp
            },
            PurchaseOrdersService
        ]
        });
    });

    it('should get search results from json',
        inject([PurchaseOrdersService], (purchaseOrderSrvc: PurchaseOrdersService) => {
        const expectedUrl = 'app/purchaseOrders.json';
        purchaseOrderSrvc.getPOs()
            .subscribe((res) => {
                expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl);
                expect(res).toEqual(mockResponse);
            });     
        })
    );

    it('should get filtered result from json',
        inject([PurchaseOrdersService], (purchaseOrderSrvc: PurchaseOrdersService) => {
        const expectedUrl = 'app/purchaseOrders.json';
        purchaseOrderSrvc.getPO(1)
            .subscribe((res) => {
                expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl);
                expect(res).toEqual(mockResponse[0]);
            })      
        })
    );
});