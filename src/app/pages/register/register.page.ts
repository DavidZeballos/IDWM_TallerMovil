import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule], // Habilita [(ngModel)] y *ngFor
  templateUrl: './register.page.html',
})
export class RegisterPage {
  user: Record<string, string> = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rut: '',
    dateOfBirth: '',
    gender: '',
  };

  fields: (keyof typeof this.user)[] = [
    'userName',
    'email',
    'password',
    'confirmPassword',
    'rut',
    'dateOfBirth',
    'gender',
  ];

  register() {
    console.log('Registro enviado', this.user);
  }
}
