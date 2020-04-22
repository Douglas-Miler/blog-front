import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations:[
        ModalComponent
    ],
    imports:[
        MatInputModule,
        MatDialogModule,
        MatFormFieldModule,
        MatButtonModule,
        
        ReactiveFormsModule,
        RouterModule,
    ],
    exports:[
        ModalComponent
    ]
})
export class ModalModule{

}