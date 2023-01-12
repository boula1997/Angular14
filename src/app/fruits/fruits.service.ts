import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruits } from './fruits';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  constructor(private http: HttpClient) {}

  allFruits: Fruits[] = [];

  get(lang:string):Observable<any>  {
    return this.http.get<any>('http://127.0.0.1:8000/api/fruits?lang='+lang);
  }

  create(payload: any) {
    return this.http.post<any>('http://localhost:3000/fruits', payload);
  }

  getById(id: number) {
    return this.http.get<any>(`http://localhost:3000/fruits/${id}`);
   }
    
   update(payload:any){
    return this.http.put(`http://localhost:3000/fruits/${payload.id}`,payload);
   }

   delete(id:number){
    return this.http.delete<any>(`http://localhost:3000/fruits/${id}`);
 }

}



