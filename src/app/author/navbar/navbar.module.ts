import { ModalModule } from './modal/modal.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    NgbNavModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    MatDialogModule,
    ModalModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
