import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Client, DateSaleSumsViewData } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class DateSaleSumsViewService {

    constructor(private computerStoreClient: Client) { }

    getAll(implementedProgramId: number, pageIndex: number, pageSize: number): Observable<DateSaleSumsViewData[]> {
        return this.computerStoreClient.getAll(implementedProgramId, pageIndex, pageSize);
    }

}