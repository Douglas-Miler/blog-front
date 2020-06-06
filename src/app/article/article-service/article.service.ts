import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from './article';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticleService{

    constructor(private httpClient: HttpClient) {}

    getArticle(id: string) : Observable<Article> {
        return this.httpClient.get<Article>(environment.apiUrl + '/article/' + id);
    }
}