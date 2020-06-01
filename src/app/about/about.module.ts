import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { PersonCardComponent } from './person-card/person-card.component';
import { AboutComponent } from './about/about.component';
import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';

@NgModule({
  declarations: [
    AboutComponent,
    PersonCardComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    MatCardModule
  ]
})
export class AboutModule { }
