import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
    declarations:[
        IntroductionComponent
    ],
    imports: [
        MatButtonModule
    ],
    exports:[
        IntroductionComponent
    ]
})
export class IntroductionModule{

}