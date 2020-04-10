import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
