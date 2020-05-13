import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';

import { JWTPayload } from './jwt-payload';
import { TokenService } from './../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private userSubject = new BehaviorSubject<JWTPayload>(null);

    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as JWTPayload;
        this.userSubject.next(user);
    }

    getuser(){
        return this.userSubject.asObservable();
    }

    logout(){
        this.tokenService.removeToken();
    }

    isLogged(){
        return this.tokenService.hasToken();
    }
}