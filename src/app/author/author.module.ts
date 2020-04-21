import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSelectModule} from '@angular/material/select';

import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { AuthorComponent } from './author/author.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    declarations:[
        AuthorComponent,
        HeaderComponent,
        ContentComponent
    ],
    imports:[
        CommonModule,
        NavbarModule,
        FooterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatSelectModule
    ],
    exports:[
        AuthorComponent
    ]
})
export class AuthorModule{

}