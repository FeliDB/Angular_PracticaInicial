import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZonasService } from '../../services/zonas-service/zonas.service';
import { Zona } from '../../models/zona.model';

@Component({
  selector: 'app-form-zonas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-zonas.html',
  styleUrls: ['./form-zonas.css']
})
export class FormZonas {
  zonaForm: FormGroup;

  constructor(private fb: FormBuilder, private zonasService: ZonasService) {
    this.zonaForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: [null, Validators.required], // ID de location
      radius: [null, [Validators.required, Validators.min(1)]]
    });
  }

onSubmit() {
  console.log('Formulario enviado');

  if (this.zonaForm.valid) {
    const formData = {
      name: this.zonaForm.value.name,
      location: Number(this.zonaForm.value.location),
      radius: Number(this.zonaForm.value.radius)
    };

    console.log('Datos enviados:', formData);

    this.zonasService.postZona(formData).subscribe({
      next: (response) => {
        console.log('Zona creada exitosamente:', response);
        this.zonaForm.reset();
      },
      error: (err) => {
        console.error('Error al enviar la zona:', err);
      }
    });
  } else {
    console.log('Formulario inválido');
  }
}


  // Getters
  get name() { return this.zonaForm.get('name'); }
  get location() { return this.zonaForm.get('location'); }
  get radius() { return this.zonaForm.get('radius'); }
}
