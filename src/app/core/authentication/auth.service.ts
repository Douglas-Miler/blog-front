import { environment } from './../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Token } from '../token/token';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient: HttpClient;

  constructor(handler: HttpBackend, private userService: UserService) {
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
        this.userService.setToken(token.authenticationType + ' ' + token.token);
      }));
  }
}
