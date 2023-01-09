import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  postForm:Posts={
    id: 0,
    title: '',
    author: ''
  };
  constructor(private postService:PostsService,private router:Router) { }

  ngOnInit(): void {}

  create(){
    this.postService.create(this.postForm)
    .subscribe({
      next:(data)=>{
        this.router.navigate(['posts/home'])
      },
      error:(err)=>{
        console.log(err);
      }
      })
  }

}
