import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './home/home.component';
import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    NavbarModule,
    FooterModule,
    
    CarouselModule,
    CardModule
  ]
})
export class HomeModule { }
