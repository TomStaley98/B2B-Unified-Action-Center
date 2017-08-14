export interface IPurchaseOrder {
    PurchaseOrderNo: string,
    OrderAmount: number,
    OrderDate: Date,
    CustomerNo: number,
    Status: {
        ApplicationStep: number,
        ApplicationStatus: string,
        FailureText: string,
        LastUpdateTS: Date
    }
}