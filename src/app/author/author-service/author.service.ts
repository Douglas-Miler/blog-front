import { environment } from './../../core/environments/environment';
import { ArticleForm } from './article-form';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthorService{

    constructor(private httpClient: HttpClient){
        
    }

    saveImage(imageFile: File){

        const formData = new FormData();
        formData.append('imageFile', imageFile);

        return this.httpClient.post(environment.apiUrl + '/save/image', formData);
    }

    saveForm(articleForm: ArticleForm){
        return this.httpClient.post(environment.apiUrl + '/save/form', articleForm);
    }
}