import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CitySaleSumsViewDataPagedModel, Client } from "../clients/system-api/UserApiClient.gen";

@Injectable({
    providedIn: 'root'
})

export class CitySaleSumsViewService {

    constructor(private userApiClient: Client) { }

    getAll(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<CitySaleSumsViewDataPagedModel> {
        return this.userApiClient.getAllCitySales(pageIndex, pageSize, name);
    }

}