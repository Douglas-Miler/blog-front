import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { AuthorModule } from './author/author.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    
    HomeModule,
    AboutModule,
    AuthorModule,
    LoginModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
