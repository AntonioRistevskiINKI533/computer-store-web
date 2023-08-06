//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.19.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IClient {
    /**
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @param dateFrom (optional) 
     * @param dateTo (optional) 
     * @return Success
     */
    getAllDateSales(pageIndex: number | undefined, pageSize: number | undefined, dateFrom: Date | undefined, dateTo: Date | undefined): Observable<DateSaleSumsViewDataPagedModel>;
    /**
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @param name (optional) 
     * @return Success
     */
    getAllProductSales(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<ProductSaleSumsAndProfitViewDataPagedModel>;
    /**
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @param name (optional) 
     * @return Success
     */
    getAllSuppliersPurchases(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<SupplierPurchaseSumsViewDataPagedModel>;
}

@Injectable()
export class Client implements IClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @param dateFrom (optional) 
     * @param dateTo (optional) 
     * @return Success
     */
    getAllDateSales(pageIndex: number | undefined, pageSize: number | undefined, dateFrom: Date | undefined, dateTo: Date | undefined): Observable<DateSaleSumsViewDataPagedModel> {
        let url_ = this.baseUrl + "/DateSaleSumsView/GetAllDateSales?";
        if (pageIndex === null)
            throw new Error("The parameter 'pageIndex' cannot be null.");
        else if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (dateFrom === null)
            throw new Error("The parameter 'dateFrom' cannot be null.");
        else if (dateFrom !== undefined)
            url_ += "dateFrom=" + encodeURIComponent(dateFrom ? "" + dateFrom.toISOString() : "") + "&";
        if (dateTo === null)
            throw new Error("The parameter 'dateTo' cannot be null.");
        else if (dateTo !== undefined)
            url_ += "dateTo=" + encodeURIComponent(dateTo ? "" + dateTo.toISOString() : "") + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllDateSales(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllDateSales(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<DateSaleSumsViewDataPagedModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<DateSaleSumsViewDataPagedModel>;
        }));
    }

    protected processGetAllDateSales(response: HttpResponseBase): Observable<DateSaleSumsViewDataPagedModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DateSaleSumsViewDataPagedModel.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<DateSaleSumsViewDataPagedModel>(null as any);
    }

    /**
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @param name (optional) 
     * @return Success
     */
    getAllProductSales(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<ProductSaleSumsAndProfitViewDataPagedModel> {
        let url_ = this.baseUrl + "/ProductSaleSumsAndProfitView/GetAllProductSales?";
        if (pageIndex === null)
            throw new Error("The parameter 'pageIndex' cannot be null.");
        else if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (name === null)
            throw new Error("The parameter 'name' cannot be null.");
        else if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + name) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllProductSales(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllProductSales(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ProductSaleSumsAndProfitViewDataPagedModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ProductSaleSumsAndProfitViewDataPagedModel>;
        }));
    }

    protected processGetAllProductSales(response: HttpResponseBase): Observable<ProductSaleSumsAndProfitViewDataPagedModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ProductSaleSumsAndProfitViewDataPagedModel.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ProductSaleSumsAndProfitViewDataPagedModel>(null as any);
    }

    /**
     * @param pageIndex (optional) 
     * @param pageSize (optional) 
     * @param name (optional) 
     * @return Success
     */
    getAllSuppliersPurchases(pageIndex: number | undefined, pageSize: number | undefined, name: string | undefined): Observable<SupplierPurchaseSumsViewDataPagedModel> {
        let url_ = this.baseUrl + "/SupplierPurchaseSumsView/GetAllSuppliersPurchases?";
        if (pageIndex === null)
            throw new Error("The parameter 'pageIndex' cannot be null.");
        else if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        if (name === null)
            throw new Error("The parameter 'name' cannot be null.");
        else if (name !== undefined)
            url_ += "name=" + encodeURIComponent("" + name) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllSuppliersPurchases(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllSuppliersPurchases(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<SupplierPurchaseSumsViewDataPagedModel>;
                }
            } else
                return _observableThrow(response_) as any as Observable<SupplierPurchaseSumsViewDataPagedModel>;
        }));
    }

    protected processGetAllSuppliersPurchases(response: HttpResponseBase): Observable<SupplierPurchaseSumsViewDataPagedModel> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = SupplierPurchaseSumsViewDataPagedModel.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<SupplierPurchaseSumsViewDataPagedModel>(null as any);
    }
}

export class DateSaleSumsViewData implements IDateSaleSumsViewData {
    dateId?: number;
    date?: Date;
    dayOfWeek?: number;
    profit?: number;
    sumOfSales?: number;
    sumOfUnits?: number;
    sumOfTotalSalePrice?: number;

    constructor(data?: IDateSaleSumsViewData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.dateId = _data["dateId"];
            this.date = _data["date"] ? new Date(_data["date"].toString()) : <any>undefined;
            this.dayOfWeek = _data["dayOfWeek"];
            this.profit = _data["profit"];
            this.sumOfSales = _data["sumOfSales"];
            this.sumOfUnits = _data["sumOfUnits"];
            this.sumOfTotalSalePrice = _data["sumOfTotalSalePrice"];
        }
    }

    static fromJS(data: any): DateSaleSumsViewData {
        data = typeof data === 'object' ? data : {};
        let result = new DateSaleSumsViewData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["dateId"] = this.dateId;
        data["date"] = this.date ? this.date.toISOString() : <any>undefined;
        data["dayOfWeek"] = this.dayOfWeek;
        data["profit"] = this.profit;
        data["sumOfSales"] = this.sumOfSales;
        data["sumOfUnits"] = this.sumOfUnits;
        data["sumOfTotalSalePrice"] = this.sumOfTotalSalePrice;
        return data;
    }
}

export interface IDateSaleSumsViewData {
    dateId?: number;
    date?: Date;
    dayOfWeek?: number;
    profit?: number;
    sumOfSales?: number;
    sumOfUnits?: number;
    sumOfTotalSalePrice?: number;
}

export class DateSaleSumsViewDataPagedModel implements IDateSaleSumsViewDataPagedModel {
    totalItems?: number;
    items?: DateSaleSumsViewData[] | undefined;

    constructor(data?: IDateSaleSumsViewDataPagedModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.totalItems = _data["totalItems"];
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(DateSaleSumsViewData.fromJS(item));
            }
        }
    }

    static fromJS(data: any): DateSaleSumsViewDataPagedModel {
        data = typeof data === 'object' ? data : {};
        let result = new DateSaleSumsViewDataPagedModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalItems"] = this.totalItems;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data;
    }
}

export interface IDateSaleSumsViewDataPagedModel {
    totalItems?: number;
    items?: DateSaleSumsViewData[] | undefined;
}

export class ProductSaleSumsAndProfitViewData implements IProductSaleSumsAndProfitViewData {
    productId?: number;
    name?: string | undefined;
    profit?: number;
    sumOfSales?: number;
    sumOfUnits?: number;
    sumOfTotalSalePrice?: number;

    constructor(data?: IProductSaleSumsAndProfitViewData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.productId = _data["productId"];
            this.name = _data["name"];
            this.profit = _data["profit"];
            this.sumOfSales = _data["sumOfSales"];
            this.sumOfUnits = _data["sumOfUnits"];
            this.sumOfTotalSalePrice = _data["sumOfTotalSalePrice"];
        }
    }

    static fromJS(data: any): ProductSaleSumsAndProfitViewData {
        data = typeof data === 'object' ? data : {};
        let result = new ProductSaleSumsAndProfitViewData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["productId"] = this.productId;
        data["name"] = this.name;
        data["profit"] = this.profit;
        data["sumOfSales"] = this.sumOfSales;
        data["sumOfUnits"] = this.sumOfUnits;
        data["sumOfTotalSalePrice"] = this.sumOfTotalSalePrice;
        return data;
    }
}

export interface IProductSaleSumsAndProfitViewData {
    productId?: number;
    name?: string | undefined;
    profit?: number;
    sumOfSales?: number;
    sumOfUnits?: number;
    sumOfTotalSalePrice?: number;
}

export class ProductSaleSumsAndProfitViewDataPagedModel implements IProductSaleSumsAndProfitViewDataPagedModel {
    totalItems?: number;
    items?: ProductSaleSumsAndProfitViewData[] | undefined;

    constructor(data?: IProductSaleSumsAndProfitViewDataPagedModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.totalItems = _data["totalItems"];
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(ProductSaleSumsAndProfitViewData.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ProductSaleSumsAndProfitViewDataPagedModel {
        data = typeof data === 'object' ? data : {};
        let result = new ProductSaleSumsAndProfitViewDataPagedModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalItems"] = this.totalItems;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data;
    }
}

export interface IProductSaleSumsAndProfitViewDataPagedModel {
    totalItems?: number;
    items?: ProductSaleSumsAndProfitViewData[] | undefined;
}

export class SupplierPurchaseSumsViewData implements ISupplierPurchaseSumsViewData {
    supplierId?: number;
    name?: string | undefined;
    email?: string | undefined;
    sumOfPurchases?: number;
    sumOfUnits?: number;
    sumOfTotalPurchasePrice?: number;

    constructor(data?: ISupplierPurchaseSumsViewData) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.supplierId = _data["supplierId"];
            this.name = _data["name"];
            this.email = _data["email"];
            this.sumOfPurchases = _data["sumOfPurchases"];
            this.sumOfUnits = _data["sumOfUnits"];
            this.sumOfTotalPurchasePrice = _data["sumOfTotalPurchasePrice"];
        }
    }

    static fromJS(data: any): SupplierPurchaseSumsViewData {
        data = typeof data === 'object' ? data : {};
        let result = new SupplierPurchaseSumsViewData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["supplierId"] = this.supplierId;
        data["name"] = this.name;
        data["email"] = this.email;
        data["sumOfPurchases"] = this.sumOfPurchases;
        data["sumOfUnits"] = this.sumOfUnits;
        data["sumOfTotalPurchasePrice"] = this.sumOfTotalPurchasePrice;
        return data;
    }
}

export interface ISupplierPurchaseSumsViewData {
    supplierId?: number;
    name?: string | undefined;
    email?: string | undefined;
    sumOfPurchases?: number;
    sumOfUnits?: number;
    sumOfTotalPurchasePrice?: number;
}

export class SupplierPurchaseSumsViewDataPagedModel implements ISupplierPurchaseSumsViewDataPagedModel {
    totalItems?: number;
    items?: SupplierPurchaseSumsViewData[] | undefined;

    constructor(data?: ISupplierPurchaseSumsViewDataPagedModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.totalItems = _data["totalItems"];
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(SupplierPurchaseSumsViewData.fromJS(item));
            }
        }
    }

    static fromJS(data: any): SupplierPurchaseSumsViewDataPagedModel {
        data = typeof data === 'object' ? data : {};
        let result = new SupplierPurchaseSumsViewDataPagedModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalItems"] = this.totalItems;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data;
    }
}

export interface ISupplierPurchaseSumsViewDataPagedModel {
    totalItems?: number;
    items?: SupplierPurchaseSumsViewData[] | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}