import { Component } from '@angular/core';
import { IHeaderLink } from './HeaderLink';

@Component ({
    selector: 'my-nav',
    templateUrl: './NavBar.component.html'
})

export class NavBarComponent {
    headerLinks: IHeaderLink[] = [{
        Id: 'po-search-link',
        Text: "By PO",
        Href: '/purchase-orders'
    },
    {
        Id: 'customer-search-link',
        Text: "By Customer",
        Href: '/customers'
    },
    {
        Id: 'analytics-link',
        Text: "Analytics",
        Href: '/analytics'
    }];

    constructor() {
    }
}