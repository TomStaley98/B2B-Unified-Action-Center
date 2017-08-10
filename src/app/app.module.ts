import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'
import { PurchaseOrdersComponent }  from './PurchaseOrders/PurchaseOrders.component';
import { CustomersComponent } from './Customers/Customers.component';
import { AnalyticsComponent } from './Analytics/Analytics.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { routing } from './app.routes';


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ AppComponent, PurchaseOrdersComponent, CustomersComponent, AnalyticsComponent, NavBarComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
