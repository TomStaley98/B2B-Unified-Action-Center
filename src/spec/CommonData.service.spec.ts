import {
    fakeAsync,
    inject,
    tick,
    TestBed
} from '@angular/core/testing';
import { CommonDataService } from '../app/Common/CommonData.service';
import { IPurchaseOrder } from '../app/PurchaseOrders/PurchaseOrder';

const mockPO: IPurchaseOrder = {
    "PurchaseOrderNo": "1",
    "OrderAmount": 2584,
    "OrderDate": new Date("08/1/2017"),
    "CustomerNo": 1,
    "Status": {
        "ApplicationStep": 3,
        "ApplicationStatus": "Success",
        "FailureText": "",
        "LastUpdateTS": new Date("08/2/2017 10:11:04 AM")
    }
};

describe('Testing Common Data Service', () => {
    beforeEach(() => {        
        TestBed.configureTestingModule({
            providers: [ CommonDataService ]
        });
    });

    it('should set/get selected PO',
        inject([CommonDataService], (commonDataService: CommonDataService) => {
            commonDataService.setSelectedPO(mockPO);
            expect(commonDataService.getSelectedPO()).toEqual(mockPO);
        })
    );

    it('should set/get previous page',
        inject([CommonDataService], (commonDataService: CommonDataService) => {
            let page = "testpreviouspage";
            commonDataService.setPreviousPage(page);
            expect(commonDataService.getPreviousPage()).toEqual(page);
        })
    );
});