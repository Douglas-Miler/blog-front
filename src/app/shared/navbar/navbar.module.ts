import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NgbNavModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';

import { SmallMessageComponent } from './small-message/small-message.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SmallMessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbModalModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
