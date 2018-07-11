import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieService {

    private readonly baseUrl: string = environment.apiUrl;
    private readonly apiKey: string = environment.apiKey;

    public constructor(private http: HttpClient) { }

    public buscarFilmes(page: number): Observable<any> {
        return this.http
        .get<any>(`${this.baseUrl}/moviedddd/popular?${this.apiKey}&page=${page}`)
    }
}