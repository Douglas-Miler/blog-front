import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NewUserService{

    private API = "http://localhost:8080";

    constructor(
        private httpClient: HttpClient) {}

    saveUser(newUser: NewUser) {
        return this.httpClient.post<NewUser>(
            this.API + "/save/user",
            newUser
        );
    }
}