import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, ProductTypeSaleSumsAndProfitViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class ProductTypeSaleSumsAndProfitViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<ProductTypeSaleSumsAndProfitViewDataPagedModel> {
        return this.userApiClient.getAllProductTypeSales(pageIndex, pageSize, name);
    }

}