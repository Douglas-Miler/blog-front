import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { IntroductionComponent } from './introduction/introduction.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations:[
        IntroductionComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    exports:[
        IntroductionComponent
    ]
})
export class IntroductionModule{

}