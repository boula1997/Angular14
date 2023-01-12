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
  allFruits: Fruits[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private fruitService: FruitsService) {
    this.get(AppComponent.appLang);
  }
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    
    
  }
 
  get(lang: string) {
    this.fruitService.get(lang).subscribe((data) => {
      this.allFruits = data.data.fruits;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.fruitService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}