import { FooterModule } from './../shared/footer/footer.module';
import { NavbarModule } from './../shared/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionModule } from './introduction/introduction.module';
import { CardModule } from './card/card.module';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    NavbarModule,
    FooterModule,
    
    CarouselModule,
    CardModule,
    IntroductionModule
  ],
  exports:[

  ]
})
export class HomeModule { }
