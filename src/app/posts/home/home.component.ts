import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPosts: Posts[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private PostService: PostsService) { }



  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal'));
    this.get();

  }
  get() {
    this.PostService.get().subscribe((data) => { this.allPosts = data });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.PostService.delete(this.idTodelete).subscribe({
      next:(data)=>{
        this.allPosts = this.allPosts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      }
    })
  }

}
