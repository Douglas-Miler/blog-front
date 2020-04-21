import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { TokenService } from './token/token.service';
import { Token } from './token/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  authenticate(email: string, password: string){
    return this.http
      .post<Token>(
        'http://localhost:8080/signin', 
        {email: email, password: password}, 
        { observe: 'response'}
      )
      .pipe(tap(response => {
        const token: Token = response.body;
        this.tokenService.setToken(token.authenticationType + ' ' + token.token);
      }));
  }
}
