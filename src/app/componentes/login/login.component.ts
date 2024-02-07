import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    pass: ['',[Validators.required]]
  })
  constructor(private fb: FormBuilder){

  }

  get email(){
    return this.loginForm.controls['email']
  }

  get pass(){
    return this.loginForm.controls['pass']
  }
}
