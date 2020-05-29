import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from './card';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    private http: HttpClient;

    constructor(handler: HttpBackend){
        this.http = new HttpClient(handler);
    }

    listCards(): Observable<Card[]>{
        return this.http.get<Card[]>('https://web-api-blog.herokuapp.com/cards');
    }

    listCardsPaginated(page: number): Observable<Card[]>{
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Card[]>('http://localhost:8080/cards', { params: {page:page.toString()} });
    }

    listSearchedCardsPaginated(page: number, subject: string){
        const params = new HttpParams().append('page', page.toString()).append('subject', subject);
        return this.http.get<Card[]>('http://localhost:8080/cards/search', { params : params });
    }
}