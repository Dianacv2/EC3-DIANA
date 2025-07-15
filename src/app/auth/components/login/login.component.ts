import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxError } from 'rxjs/ajax';
 
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(LoginService);

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm: FormGroup = this.fb.group(
    {
      email: [''], 
      password: ['']
    }
  );

  login() {
    const {email, password} = this.loginForm.value;
    this.authService.login(email, password)
    .then(() => {
      this.router.navigate(['']);
    })
    .catch(error => console.log(AjaxError));
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
