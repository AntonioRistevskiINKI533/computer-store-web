import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, DayOfWeekSaleSumsViewDataPagedModel } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class DayOfWeekSaleSumsViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined): Observable<DayOfWeekSaleSumsViewDataPagedModel> {
        return this.userApiClient.getAllDayOfWeekSales(pageIndex, pageSize);
    }

}