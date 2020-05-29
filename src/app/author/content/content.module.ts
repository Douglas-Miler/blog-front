import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        ContentComponent
    ],
    imports:[
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        TextFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports:[
        ContentComponent
    ]
})
export class ContentModule{

}