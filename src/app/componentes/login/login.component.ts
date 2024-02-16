import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import {Router} from '@angular/router';
import { error } from 'console';

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
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router:Router){
  }

  get email(){
    return this.loginForm.controls['email']
  }

  get pass(){
    return this.loginForm.controls['pass']
  }

  login(){
    console.log("Estoy enviando datos")
    const {email, pass} = this.loginForm.value;
    
    
    this.authService.getUserByEmail(email as string).subscribe(
      response=>{
        if(response.length > 0 && response[0].pass === pass){
          sessionStorage.setItem("email", email as string)
          this.router.navigate(['home'])
        }
      },
       error => {

       }
    )
  }
}
