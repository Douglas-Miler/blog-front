import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { PersonCardComponent } from './person-card/person-card.component';
import { AboutComponent } from './about/about.component';

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
