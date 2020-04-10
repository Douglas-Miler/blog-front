import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from './card/card.module';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule,
    SharedModule
  ],
  exports:[

  ]
})
export class HomeModule { }
