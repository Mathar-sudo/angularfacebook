import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register(form:NgForm){
    const {inputEmail,inputPassword,inputAddress,inputCity,inputZip}=form.value;
    if(!form.valid){
      return ;
    }
  }

}
