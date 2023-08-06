import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, SupplierPurchaseSumsViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class SupplierPurchaseSumsViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<SupplierPurchaseSumsViewDataPagedModel> {
        return this.userApiClient.getAllSuppliersPurchases(pageIndex, pageSize, name);
    }

}