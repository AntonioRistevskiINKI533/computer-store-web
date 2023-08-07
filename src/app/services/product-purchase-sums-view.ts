import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, ProductPurchaseSumsViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class ProductPurchaseSumsViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<ProductPurchaseSumsViewDataPagedModel> {
        return this.userApiClient.getAllProductPurchases(pageIndex, pageSize, name);
    }

}