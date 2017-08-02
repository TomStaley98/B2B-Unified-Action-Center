export interface IPurchaseOrder {
    PurchaseOrderNo: number,
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