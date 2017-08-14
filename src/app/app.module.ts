import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'
import { PurchaseOrdersSearchComponent }  from './PurchaseOrders/PurchaseOrders.Search.component';
import { PurchaseOrdersBrowseComponent }  from './PurchaseOrders/PurchaseOrders.Browse.component';
import { CustomersComponent } from './Customers/Customers.component';
import { AnalyticsComponent } from './Analytics/Analytics.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { routing } from './app.routes';


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ AppComponent, PurchaseOrdersSearchComponent, PurchaseOrdersBrowseComponent, CustomersComponent, AnalyticsComponent, NavBarComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
