import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class Register implements OnInit {
  form!: FormGroup;
  email: string = '';
  password: string = '';
  rol: string = '';

  constructor(private fb: FormBuilder, private apiDelivery: ApiService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required],
    })
  }

  enviar(): void {
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    this.rol = this.form.value.rol;
    // console.log("Valores del formulario:", this.name, this.email, this.password, this.birthday);

    // Aquí puedes llamar al servicio para registrar al usuario | el modelo de usuario contiene name, email, password y birthday
    this.apiDelivery.registroUsuario({
      email: this.email,
      password: this.password,
      rol: this.rol
    }).then(response => {
      console.log("Registro exitoso:", response);
    }).catch(error => {
      console.error("Error al registrar usuario:", error);
    });
  }
}
