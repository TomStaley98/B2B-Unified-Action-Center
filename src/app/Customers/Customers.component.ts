import { Component } from '@angular/core';
import { CommonDataService } from '../Common/CommonData.service';

@Component ({
    selector: 'customers',
    template: 'This is a placeholder for Customer Search',
})

export class CustomersComponent {
    constructor(private commonDataService: CommonDataService) {
        console.log(commonDataService.getSelectedPO());
    }
}