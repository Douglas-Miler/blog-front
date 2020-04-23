import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
    declarations:[
        NewUserComponent
    ],
    imports:[
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule
    ],
    exports:[
        NewUserComponent
    ]
})
export class ModalModule {

}