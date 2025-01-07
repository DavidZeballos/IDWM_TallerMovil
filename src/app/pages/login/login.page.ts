import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, IonicModule],
  templateUrl: './login.page.html',
})
export class LoginPage {
  email = '';
  password = '';

  login() {
    console.log('Login enviado', { email: this.email, password: this.password });
  }
}
