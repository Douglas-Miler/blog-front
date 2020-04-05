import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [CardComponent, CardItemComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
