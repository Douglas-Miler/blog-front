import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentModule } from './content/content.module';
import { FooterModule } from './../shared/footer/footer.module';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from './author-service/request.interceptor';
import { UploadSucessComponent } from './upload-success/upload-success.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations:[
        AuthorComponent,
        HeaderComponent,
        UploadSucessComponent,
        NavbarComponent
    ],
    imports:[
        CommonModule,
        ContentModule,
        FooterModule,
        HttpClientModule,
        RouterModule,
        NgbNavModule,
        MatButtonModule
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