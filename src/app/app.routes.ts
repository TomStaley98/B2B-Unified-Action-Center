import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrdersSearchComponent }  from './PurchaseOrders/PurchaseOrders.Search.component';
import { PurchaseOrdersBrowseComponent }  from './PurchaseOrders/PurchaseOrders.Browse.component';
import { CustomersComponent } from './Customers/Customers.component';
import { AnalyticsComponent } from './Analytics/Analytics.component';

const routes: Routes = [
    { path: '', redirectTo: 'search/purchase-orders', pathMatch: 'full' },
    { path: 'search/purchase-orders', component: PurchaseOrdersSearchComponent },
    { path: 'browse/purchase-orders', component: PurchaseOrdersBrowseComponent },
    { path: 'search/customers', component: CustomersComponent },
    { path: 'browse/customers', component: CustomersComponent },
    { path: 'analytics', component: AnalyticsComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });