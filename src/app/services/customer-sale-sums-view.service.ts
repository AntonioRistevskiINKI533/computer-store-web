import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, CustomerSaleSumsViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class CustomerSaleSumsViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined, surname: string | undefined): Observable<CustomerSaleSumsViewDataPagedModel> {
        return this.userApiClient.getAllCustomerSales(pageIndex, pageSize, name, surname);
    }

}