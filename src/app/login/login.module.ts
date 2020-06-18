import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { NgxLoadingModule } from 'ngx-loading';

import { LoginPageComponent } from './login-page/login-page.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';

@NgModule({
    declarations: [
        FormLoginComponent,
        LoginPageComponent
    ],
    imports:[
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,

        NavbarModule,
        FooterModule,
        
        ReactiveFormsModule,
        RouterModule,

        NgxLoadingModule.forRoot({})
    ]
})
export class LoginModule {

}