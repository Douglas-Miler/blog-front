import { environment } from './../../core/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArticleService{

    constructor(private httpClient: HttpClient) {}

    getArticle(id: string) : Observable<Article> {
        return this.httpClient.get<Article>(environment.apiUrl + '/article/' + id);
    }
}