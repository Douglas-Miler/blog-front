import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';

import { JWTPayload } from '../jwt-payload/jwt-payload';

const KEY: string = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService{

    setToken(token): void{
        window.localStorage.setItem(KEY, token);
    }

    getToken(): string{
        return window.localStorage.getItem(KEY);
    }

    hasToken(): boolean {
        const token: string = this.getToken();
        if(token!= null && token.length > 0){
            return this.isValidToken();
        }
        return false;
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

    private isValidToken() : boolean{
        const token: string = this.getToken();
        const jwtPayload: JWTPayload = jwt_decode(token) as JWTPayload;
        const tokenExpirationUnixDate : number = jwtPayload.exp;
        const currentUnixDate : number = Math.floor(new Date().getTime()/1000);

        if(currentUnixDate <= tokenExpirationUnixDate)
            return true;

        this.removeToken();
        return false;
    }
}