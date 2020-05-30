import { NavbarModule } from './../navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { UploadSucessComponent } from './upload-success/upload-success.component';

@NgModule({
    declarations:[
        UploadSucessComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        MatButtonModule,
        NavbarModule
    ],
    exports:[
        UploadSucessComponent
    ]
})
export class UploadSuccessModule{

}