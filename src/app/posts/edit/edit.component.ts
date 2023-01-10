import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Fruits } from 'src/app/fruits/fruits';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form:Posts={
    id: 0,
    title: '',
    author: ''
  };

  postForm= new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.postService.getById(id).subscribe((data) => { this.form = data; });
  }

  update() {
    console.log('update');
    this.postService.update(this.form)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/posts/home"]);
        }, error: (err) => {
          console.log(err);
        }
      })
  }

  get f(){
    return this.postForm.controls;
  }
  

}
