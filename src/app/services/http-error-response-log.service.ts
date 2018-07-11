import { ErrorResponseLog } from './../models/error-response-log.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpErrorResponseLogService {
    public constructor(private http: HttpClient) { }

    public post(error: ErrorResponseLog) {
        return this.http.post<any>('http://localhost:2887/api/ErrorResponseLog', error);
    }
}