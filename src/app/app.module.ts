import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterModule } from './footer/footer.module';
import { CardModule } from './card/card.module';
import { CarouselModule } from './carousel/carousel.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    CarouselModule,
    CardModule,
    ModalModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
