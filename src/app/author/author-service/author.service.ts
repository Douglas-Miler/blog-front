import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../core/environments/environment';
import { ArticleForm } from './article-form';

@Injectable({
    providedIn: 'root'
})
export class AuthorService{

    constructor(private httpClient: HttpClient){ }

    saveForm(articleForm: ArticleForm){
        return this.httpClient.post(environment.apiUrl + '/save', articleForm);
    }
}