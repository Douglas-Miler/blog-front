import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { PreviousButtonComponent } from './previous-button/previous-button.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    CardComponent, 
    CardItemComponent, 
    NextButtonComponent, 
    PreviousButtonComponent, 
    ToastComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
