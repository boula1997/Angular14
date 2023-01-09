import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FruitsRoutingModule } from './fruits/fruits-routing.module';
import { FruitsModule } from './fruits/fruits.module';

import { PostsRoutingModule } from './posts/posts-routing.module';
import { PostsModule } from './posts/posts.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsRoutingModule,
    FruitsModule,
    PostsRoutingModule,
    PostsModule,
    HttpClientModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
