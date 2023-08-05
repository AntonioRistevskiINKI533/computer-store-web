import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, ProductSaleSumsAndProfitViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class ProductSaleSumsAndProfitViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<ProductSaleSumsAndProfitViewDataPagedModel> {
        return this.userApiClient.getAllProductSales(pageIndex, pageSize, name);
    }

}