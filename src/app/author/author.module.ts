import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentModule } from './content/content.module';
import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './header/header.component';

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
    ],
    exports:[
        AuthorComponent
    ]
})
export class AuthorModule{

}