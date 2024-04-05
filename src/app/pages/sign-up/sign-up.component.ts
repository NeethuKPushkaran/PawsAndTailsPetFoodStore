import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(){
    
  }
  
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
