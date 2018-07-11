import { HttpErrorResponseLogService } from './services/http-error-response-log.service';
import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw'
import { ErrorResponseLog } from './models/error-response-log.model';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let httpErrorResponseLog = this.injector.get(HttpErrorResponseLogService);
        return next
            .handle(req)
            // .retry(3)
            .do((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {

                }
            }).catch((response: any) => {
                debugger
                if (response instanceof HttpErrorResponse) {
                    let error: ErrorResponseLog = new ErrorResponseLog(response);
                    httpErrorResponseLog.post(error).subscribe(
                        () => {
                            console.log("entrou");
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
                }
                return Observable.throw(response);
            });
    }
}