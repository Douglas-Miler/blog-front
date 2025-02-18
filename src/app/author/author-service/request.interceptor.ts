import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from './../../core/token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        req = req.clone({
            setHeaders: {
                Authorization: 
                    this.tokenService.hasToken() 
                        ? this.tokenService.getToken() 
                            : ''
            }
        })
        
        console.log('requisição interceptada');

        return next.handle(req).pipe(catchError(response => {
            
            if(response.status == 403){
                alert("Sessão expirada. Salve o trabalho e faça novamente o login.")
                return throwError(response);
            }
            
            return next.handle(req)
        }));
    }
}