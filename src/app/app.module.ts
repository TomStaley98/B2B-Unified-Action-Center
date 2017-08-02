import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { PurchaseOrdersComponent }  from './PurchaseOrders.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ PurchaseOrdersComponent ],
    bootstrap:    [ PurchaseOrdersComponent ]
})
export class AppModule { }
