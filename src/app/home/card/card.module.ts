import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    CardComponent, 
    CardItemComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
