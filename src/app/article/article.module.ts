import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AboutAuthorComponent } from './about-author/about-author.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ToDatePipe } from './article/to-date.pipe';

@NgModule({
    declarations: [
        ArticlePageComponent,
        ArticleComponent,
        AboutAuthorComponent,
        ToDatePipe
    ],
    imports: [
        CommonModule,

        NavbarModule,
        FooterModule,

        HttpClientModule,
        MatCardModule
    ],
    exports: [
        ArticlePageComponent
    ]
})
export class ArticleModule{

}