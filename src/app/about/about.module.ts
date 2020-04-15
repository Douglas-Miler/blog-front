import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { PersonCardComponent } from './person-card/person-card.component';
import { SharedModule } from './../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AboutComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
  ]
})
export class AboutModule { }
