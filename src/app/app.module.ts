import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FruitsRoutingModule } from './fruits/fruits-routing.module';
import { FruitsModule } from './fruits/fruits.module';

import { PostsRoutingModule } from './posts/posts-routing.module';
import { PostsModule } from './posts/posts.module';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
