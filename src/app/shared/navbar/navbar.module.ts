import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

import { ModalModule } from './modal/modal.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ModalModule,

    NgbNavModule,
    MatButtonModule,
    MatDialogModule,

    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
