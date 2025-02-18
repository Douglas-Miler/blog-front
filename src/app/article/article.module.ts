import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ResponseInterceptor } from './article-service/response.interceptor';

@NgModule({
    declarations: [
        ArticlePageComponent,
        ArticleComponent,
        AboutAuthorComponent
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
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ResponseInterceptor,
        multi: true
    }]
})
export class ArticleModule{

}