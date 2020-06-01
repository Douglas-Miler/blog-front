import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Token } from '../token/token';
import { JWTPayloadService } from '../jwt-payload/jwt-payload.service';
import { environment } from './../environments/environment';
import { TokenService } from './../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient: HttpClient;

  constructor(
      handler: HttpBackend, 
      private jwtPayloadService: JWTPayloadService,
      private tokenService: TokenService) {
    this.httpClient = new HttpClient(handler);
  }

  authenticate(email: string, password: string){
    return this.httpClient
      .post<Token>(
        environment.apiUrl + '/signin',
        {email: email, password: password}, 
        { observe: 'response'}
      )
      .pipe(tap(response => {
        const token: Token = response.body;
        this.tokenService.setToken(token.authenticationType + ' ' + token.token);
        this.jwtPayloadService.decode();
      }));
  }
}
