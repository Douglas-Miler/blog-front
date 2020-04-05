import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from './card';

@Injectable({providedIn: 'root'})
export class CardService {

    constructor(private http: HttpClient){}

    listCards(){
        return this.http.get<Card[]>('https://web-api-blog.herokuapp.com/cards');
    }

}