import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveFrom: FormGroup
  constructor() {
   this.reactiveFrom= new FormGroup ({
    UserName: new FormControl(""),
    Email:  new FormControl(" ", [Validators.required] ),
    Password:  new FormControl(" ", [Validators.required] ),
    Address:  new FormControl(" ", [Validators.required] ),
    City:  new FormControl(" ", [Validators.required] ),

   })
   }
   handleForm(){
    console.log(this.reactiveFrom)
}

  ngOnInit(): void {
  }
 
 
}
