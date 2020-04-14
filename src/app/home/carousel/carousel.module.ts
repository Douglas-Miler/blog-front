import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
