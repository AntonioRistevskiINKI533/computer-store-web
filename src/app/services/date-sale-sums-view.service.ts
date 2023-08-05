import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, DateSaleSumsViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class DateSaleSumsViewService {

    constructor(private computerStoreClient: Client) { }

    getAll(dateFrom: Date | undefined, dateTo: Date | undefined, pageIndex: number | undefined, pageSize: number | undefined): Observable<DateSaleSumsViewDataPagedModel> {
        return this.computerStoreClient.getAll(dateFrom, dateTo, pageIndex, pageSize);
    }

}