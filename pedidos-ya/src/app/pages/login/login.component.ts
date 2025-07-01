import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email: string = "";
  password: string = "";

  constructor(private fb: FormBuilder, private apiDelivery: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Qué sucede al presionar ingresar
  async ingresar(): Promise<void> {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    try {
      const { token } = await this.apiDelivery.login(email, password);
      localStorage.setItem('token', token);
      this.router.navigateByUrl('/dashboard');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Login fallido',
        text: 'Email o contraseña incorrectos'
      });
    }
  }
}
