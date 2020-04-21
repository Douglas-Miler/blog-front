import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    NgbNavModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
