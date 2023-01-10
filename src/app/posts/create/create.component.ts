import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form:Posts={
    id: 0,
    title: '',
    author: ''
  };

  postForm= new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', Validators.required),
  });

  constructor(private postService:PostsService,private router:Router) { }

  ngOnInit(): void {}

  create(){
    this.postService.create(this.form)
    .subscribe({
      next:(data)=>{
        this.router.navigate(['posts/home'])
      },
      error:(err)=>{
        console.log(err);
      }
      })
  }

  get f(){
    return this.postForm.controls;
  }

}
