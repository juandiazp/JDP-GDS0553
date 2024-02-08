import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { response } from 'express';
import { error } from 'console';
import { User } from '../../interfaces/user';
import { MessageService } from 'primeng/api';

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

  constructor(private fb: FormBuilder,
    private outhService : AuthService,
    private messageService: MessageService){
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

  enviarUsuario(){
    console.log("Estoy enviando datos")

    const datos = {...this.registerForm.value}
    delete datos.confpass;

    this.outhService.registerUser(datos as User).subscribe(
    response => {
      this.messageService.add({ 
        severity: 'success', 
        summary: 'Registro Exitoso', 
        detail: 'El usuario ha sido registrado con Exito' });
    },
    error => {
      this.messageService.add({ 
        severity: 'error', 
        summary: 'Registro Fallido', 
        detail: 'El usuario no ha sido registrado' });
    }
    )


  }

  }

