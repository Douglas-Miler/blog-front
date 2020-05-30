import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentModule } from './content/content.module';
import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from './author-service/request.interceptor';
import { UploadSuccessModule } from './upload-success/upload-success.module';

@NgModule({
    declarations:[
        AuthorComponent,
        HeaderComponent
    ],
    imports:[
        CommonModule,
        ContentModule,
        NavbarModule,
        FooterModule,
        UploadSuccessModule,
        HttpClientModule
    ],
    exports:[
        AuthorComponent
    ],
    providers:[{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }]
})
export class AuthorModule{

}