import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';

import { JWTPayload } from './jwt-payload';
import { TokenService } from '../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class JWTPayloadService {

    private behaviorSubject = new BehaviorSubject<JWTPayload>(null);

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() &&
            this.decode();
    }

    decode() {
        const token = this.tokenService.getToken();
        const jwtPayload = jwt_decode(token) as JWTPayload;
        this.notify(jwtPayload);
    }

    private notify(jwtPayload: JWTPayload){
        this.behaviorSubject.next(jwtPayload);
    }

    getJWTPayload() {
        return this.behaviorSubject.asObservable();
    }
}