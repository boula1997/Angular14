import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  deleteModal: any;
  idTodelete: number = 0;

 
  constructor(public _fruitService: FruitsService) {
    this.get(AppComponent.appLang);
  }
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    
    
  }
 
  get(lang: string) {
      this._fruitService.get(lang).subscribe((data) => {
      this._fruitService.allFruits = data.data.fruits;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this._fruitService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this._fruitService.allFruits = this._fruitService.allFruits .filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}