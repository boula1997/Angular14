import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }

  create(payload: Posts) {

    return this.http.post<Posts>('http://localhost:3000/posts', payload);
  }

  getById(id: number) {
    return this.http.get<Posts>(`http://localhost:3000/posts/${id}`);
  }

  update(payload: Posts) {
    return this.http.put<Posts>(`http://localhost:3000/posts/${payload.id}`, payload);
  }

  delete(id:number){
    return this.http.delete<Posts>(`http://localhost:3000/posts/${id}`);
  }
}
