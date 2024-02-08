import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';

const modPrimeNg:any=[
  ButtonModule,
  CardModule,
  InputTextModule,
  MenubarModule,
  PasswordModule,
  ToastModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrimeNg,
  ],
  exports:[
    modPrimeNg
  ]
})
export class PrimengModule { }
