import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

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
  roles: any[] = []; // Array para almacenar los roles obtenidos del backend

  constructor(private fb: FormBuilder, private apiDelivery: ApiService) {}

  ngOnInit(): void {
    this.getRoles(); // Llamar a getRoles para obtener los roles al iniciar el componente
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).+$/)],
      role: ['', Validators.required],
    })
  }

  //Obtengo los roles del backend
  getRoles(): void {
    this.apiDelivery.getRoles().subscribe({
      next: (data) => {
        console.log("Roles obtenidos:", data);
        this.roles = data; // Asignar los roles obtenidos al array roles
      },
      error: (error) => {
        console.error("Error al obtener roles:", error);
      }
    });
  }

  // Envio los valores al backend
  enviar(): void {
    this.email = this.form.value.email;
    this.password = this.form.value.password;
    this.rol = this.form.value.role;
    // console.log("Valores del formulario:", this.email, this.password, this.rol);

    // Verifico si el usuario ya existe
    this.apiDelivery.existeUsuario(this.email).then((exists: boolean) => {
      if (exists) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El usuario ya existe.',
        });
      } else {
        // Si el usuario no existe, procedo a registrarlo
        const usuario = { email: this.email, password: this.password, rol: this.rol };
        this.apiDelivery.registroUsuario(usuario).then((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Usuario registrado correctamente.',
          });
          this.form.reset(); // Reseteo el formulario después del registro exitoso
        }).catch((error) => {
          console.error("Error al registrar usuario:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo registrar el usuario.',
          });
        });
      }
    }).catch((error) => {
      console.error("Error al verificar existencia de usuario:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al verificar el usuario.',
      });
    });
  }
    
}
