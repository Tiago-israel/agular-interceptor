import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TesteService {
    public constructor(private http: HttpClient) { }

    public badRequest() {
        return this.http.get<any>('http://localhost:2887/api/teste/bad-request');
    }

    public unauthorized() {
        return this.http.get<any>('http://localhost:2887/api/teste/unauthorized');
    }

    public forbidden() {
        return this.http.get<any>('http://localhost:2887/api/teste/forbidden');
    }

    public notFound() {
        return this.http.get<any>('http://localhost:2887/api/teste/not-found');
    }

}