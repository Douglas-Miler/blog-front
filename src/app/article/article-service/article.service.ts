import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService{

    constructor(private httpClient: HttpClient) {

    }

    getArticle(id: string) : Observable<Article> {
        return this.httpClient.get<Article>('https://web-api-blog.herokuapp.com/article/' + id);
    }
}