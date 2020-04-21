import { Injectable } from '@angular/core';

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
        return !!this.getToken();
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}