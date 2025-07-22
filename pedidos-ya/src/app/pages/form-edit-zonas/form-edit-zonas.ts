import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ZonasService } from '../../services/zonas-service/zonas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-edit-zonas',
  templateUrl: './form-edit-zonas.html',
  styleUrls: ['./form-edit-zonas.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule // ✅ IMPORTANTE
  ]
})


export class FormEditZonas {
  zonaForm: FormGroup;

  constructor(private fb: FormBuilder, private zonasService: ZonasService) {
    this.zonaForm = this.fb.group({
      idZone: [null, Validators.required],
      name: [''],
      location: this.fb.group({
        lat: [null],
        lng: [null]
      }),
      radius: [null]
    });
  }

  onSubmit() {
    if (this.zonaForm.valid) {
      const formData = this.zonaForm.value;
      const id = formData.idZone;

      // Preparamos el body quitando el ID si fuera necesario
      const updateData = {
        name: formData.name,
        location: formData.location,
        radius: formData.radius
      };

      console.log('Enviando patch con:', updateData);

      this.zonasService.patchZona(id, updateData).subscribe({
        next: (res) => {
          console.log('Zona actualizada:', res);
          this.zonaForm.reset();
        },
        error: (err) => {
          console.error('Error al actualizar la zona:', err);
        }
      });
    } else {
      console.warn('Formulario inválido');
      this.zonaForm.markAllAsTouched();
    }
  }

  // Getters
  get idZone() { return this.zonaForm.get('idZone'); }
  get name() { return this.zonaForm.get('name'); }
  get location() { return this.zonaForm.get('location'); }
  get radius() { return this.zonaForm.get('radius'); }
}
