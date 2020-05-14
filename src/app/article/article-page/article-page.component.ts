import { ArticleService } from './../article-service/article.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article-service/article';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './article-page.component.html'
})
export class ArticlePageComponent implements OnInit{
    
    article$: Observable<Article>;

    constructor(
        private activatedRoute: ActivatedRoute, 
        private articleService: ArticleService) {}
    
    ngOnInit(): void {
        const id: string = this.activatedRoute.snapshot.params.id;
        this.article$ = this.articleService.getArticle(id);
    }

}