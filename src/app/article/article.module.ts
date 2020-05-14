import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutAuthorComponent } from './about-author/about-author.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        ArticlePageComponent,
        ArticleComponent,
        AboutAuthorComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule
    ],
    exports: [
        ArticlePageComponent
    ]
})
export class ArticleModule{

}