import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { ToastrModule } from 'ngx-toastr';

import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';

@NgModule({
  declarations: [
    CardComponent, 
    CardItemComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
