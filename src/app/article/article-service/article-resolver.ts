import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { ArticleService } from './article.service';
import { Article } from './article';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article>{

    constructor(private articleService: ArticleService){}

    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot){
        const id: string = route.params.id;
        return this.articleService.getArticle(id);
    }

}