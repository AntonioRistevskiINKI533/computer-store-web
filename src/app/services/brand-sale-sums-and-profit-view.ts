import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, BrandSaleSumsAndProfitViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class BrandSaleSumsAndProfitViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<BrandSaleSumsAndProfitViewDataPagedModel> {
        return this.userApiClient.getAllBrandSales(pageIndex, pageSize, name);
    }

}