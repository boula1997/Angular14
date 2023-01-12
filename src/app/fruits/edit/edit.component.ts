import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  form: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };

  fruitForm= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
    quantity: new FormControl('', [Validators.required,Validators.pattern('[0-9]*')]),
  });

  // @Output() x = 50;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fruitService: FruitsService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));      
      this.getById(id);

    });
  }

  getById(id: number) {
    this.fruitService.getById(id).subscribe((data) => {
      this.form = data.data.fruit;
    });
  }

  update() {
    this.fruitService.update(this.form)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/fruits/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  get f(){
    return this.fruitForm.controls;
  }
  


}