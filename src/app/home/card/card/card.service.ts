import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from './card';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CardService {

    constructor(private http: HttpClient){}

    listCards(): Observable<Card[]>{
        return this.http.get<Card[]>('https://web-api-blog.herokuapp.com/cards');
    }

    listCardsPaginated(page: number): Observable<Card[]>{
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Card[]>('https://web-api-blog.herokuapp.com/cards', { params: params });
    }

}