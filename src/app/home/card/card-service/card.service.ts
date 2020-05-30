import { environment } from './../../../core/environments/environment';
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

    listCardsPaginated(page: number): Observable<Card[]>{
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Card[]>(environment.apiUrl + '/cards', { params: {page:page.toString()} });
    }

    listSearchedCardsPaginated(page: number, subject: string){
        const params = new HttpParams().append('page', page.toString()).append('subject', subject);
        return this.http.get<Card[]>(environment.apiUrl + '/cards/search', { params : params });
    }
}