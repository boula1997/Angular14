import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class PostsModule { }
