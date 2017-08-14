import { Component } from '@angular/core';
import { CommonDataService } from '../Common/CommonData.service';

@Component ({
    selector: 'analytics',
    template: 'This is a placeholder for Analytics',
})

export class AnalyticsComponent {
    constructor(private commonDataService: CommonDataService) {
    }
}