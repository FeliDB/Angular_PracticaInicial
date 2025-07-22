import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  esCliente: boolean = false;

  constructor(private fb: FormBuilder, private apiDelivery: ApiService, private router: Router) { }

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
      const response = await this.apiDelivery.login(email, password);

      localStorage.setItem('token', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));
      this.esCliente = true;
      localStorage.setItem('esCliente', 'true');

      await Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
      this.router.navigate(['/dashboard']); // Ir al inicio
  
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || 'Error al iniciar sesión';
      Swal.fire('Error', msg, 'error');
    }
  }
}
