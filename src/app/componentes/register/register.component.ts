import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
  fullname:['',[Validators.required]],
  email:['',[Validators.required, Validators.email]],
  pass:['',Validators.required],
  confpass:['',Validators.required],

})

  constructor(private fb: FormBuilder){
  }

  get fullname(){
    return this.registerForm.controls['fullname']
  }

  get email(){
    return this.registerForm.controls['email']
  }

  get pass(){
    return this.registerForm.controls['pass']
  }
  get confpass(){
    return this.registerForm.controls['confpass']
  }
  }

