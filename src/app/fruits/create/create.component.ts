import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
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

//  form: any;

  constructor(private fruitService: FruitsService,
    private router: Router) { }

  ngOnInit(): void { }

  create() {
    this.fruitService.create(this.form)
    .subscribe({
      next: (data) => {
        this.router.navigate(["/fruits/home"])
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