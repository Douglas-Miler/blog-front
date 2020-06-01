import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../core/environments/environment';
import { Article } from './article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService{

    constructor(private httpClient: HttpClient) {}

    getArticle(id: string) : Observable<Article> {
        return this.httpClient.get<Article>(environment.apiUrl + '/article/' + id);
    }
}