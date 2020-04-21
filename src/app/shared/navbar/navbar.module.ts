import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NgbNavModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { SmallMessageComponent } from './small-message/small-message.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SmallMessageComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbModalModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
