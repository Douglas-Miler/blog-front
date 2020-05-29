import { ArticleForm } from './article-form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthorService{

    constructor(private httpClient: HttpClient){
        
    }

    save(articleForm: ArticleForm){
        return this.httpClient.post('http://localhost:8080/save', {
                title: articleForm.title,
                secondaryTitle: articleForm.secondaryTitle,
                category: articleForm.category,
                introduction: articleForm.introduction,
                content: articleForm.content,
                crationDate: new Date(),
                userId: 1,
                image: null
            })
    }

}