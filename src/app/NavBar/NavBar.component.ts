import { Component } from '@angular/core';
import { IHeaderLink } from './HeaderLink';

@Component ({
    selector: 'my-nav',
    templateUrl: './NavBar.component.html'
})

export class NavBarComponent {
    headerLinks: IHeaderLink[] = [{
        Id: 'po-browse-link',
        Text: "Browse PO",
        Href: '/browse/purchase-orders'
    },
    {
        Id: 'po-search-link',
        Text: "Search PO",
        Href: '/search/purchase-orders'
    },
    {
        Id: 'customer-search-link',
        Text: "Search Customer",
        Href: '/search/customers'
    },
    {
        Id: 'analytics-link',
        Text: "Analytics",
        Href: '/analytics'
    }];

    constructor() {
    }
}