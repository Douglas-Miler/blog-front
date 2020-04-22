import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        ContentComponent
    ],
    imports:[
        MatFormFieldModule,
        MatSelectModule,
        TextFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports:[
        ContentComponent
    ]
})
export class ContentModule{

}