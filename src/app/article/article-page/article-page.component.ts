import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article-service/article';

@Component({
    templateUrl: './article-page.component.html',
    styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit{

    article: Article;

    constructor(private activatedRoute: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.article = this.activatedRoute.snapshot.data['article'];
    }

}