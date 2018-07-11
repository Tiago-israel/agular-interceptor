import { HttpErrorResponse } from '@angular/common/http';

export class ErrorResponseLog {
    public id: string;
    public httpStatusCode: number;
    public mensagem: string;
    public ok: boolean;
    public httpStatusText: string;
    public url: string;
    public mensagemNegocio: String;

    public constructor(httpErrorResponse: HttpErrorResponse) {
        this.httpStatusCode = httpErrorResponse.status;
        this.httpStatusText = httpErrorResponse.statusText;
        this.mensagem = httpErrorResponse.message;
        this.ok = httpErrorResponse.ok;
        this.url = httpErrorResponse.url;
        if (httpErrorResponse.error instanceof String) {
            this.mensagemNegocio = httpErrorResponse.error;
        }

    }
}