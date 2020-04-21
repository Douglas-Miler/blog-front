import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Token } from './token/token';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(email: string, password: string){
    return this.http
      .post<Token>(
        'https://web-api-blog.herokuapp.com/signin',
        {email: email, password: password}, 
        { observe: 'response'}
      )
      .pipe(tap(response => {
        const token: Token = response.body;
        this.userService.setToken(token.authenticationType + ' ' + token.token);
      }));
  }
}
