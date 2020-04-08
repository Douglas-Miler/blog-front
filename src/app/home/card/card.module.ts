import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { PreviousButtonComponent } from './previous-button/previous-button.component';


@NgModule({
  declarations: [
    CardComponent, 
    CardItemComponent, 
    NextButtonComponent, 
    PreviousButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
