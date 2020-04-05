import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './../modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from './../navbar/navbar.module';
import { FooterModule } from './../footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CarouselModule,
    CardModule,
    FooterModule,
    ModalModule
  ],
  exports:[

  ]
})
export class HomeModule { }
