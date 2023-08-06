import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, DatePurchaseSumsViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class DatePurchaseSumsViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, dateFrom: Date | undefined, dateTo: Date | undefined): Observable<DatePurchaseSumsViewDataPagedModel> {
        return this.userApiClient.getAllDatePurchases(pageIndex, pageSize, dateFrom, dateTo);
    }

}