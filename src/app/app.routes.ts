import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrdersComponent }  from './PurchaseOrders/PurchaseOrders.component';
import { CustomersComponent } from './Customers/Customers.component';
import { AnalyticsComponent } from './Analytics/Analytics.component';

const routes: Routes = [
    { path: '', redirectTo: 'purchase-orders', pathMatch: 'full' },
    { path: 'purchase-orders', component: PurchaseOrdersComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'analytics', component: AnalyticsComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });