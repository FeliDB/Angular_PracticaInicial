import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZonasService } from '../../services/zonas-service/zonas.service';

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
      location: this.fb.group({
        lat: [null, Validators.required],
        lng: [null, Validators.required]
      }),
      radius: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.zonaForm.valid) {
      const formData = this.zonaForm.value;

      this.zonasService.postZona(formData).subscribe({
        next: (response) => {
          console.log('Zona registrada exitosamente:', response);
          this.zonaForm.reset();
        },
        error: (err) => {
          console.error('Error al registrar zona:', err);
        }
      });
    } else {
      this.zonaForm.markAllAsTouched();
    }
  }

  onUpdate() {
    if (this.zonaForm.valid) {
      const formData = this.zonaForm.value;

      this.zonasService.putZonaByData(formData).subscribe({
        next: (response) => {
          console.log('Zona actualizada exitosamente:', response);
          this.zonaForm.reset();
        },
        error: (err) => {
          console.error('Error al actualizar zona:', err);
        }
      });
    } else {
      this.zonaForm.markAllAsTouched();
    }
  }

  // Getters
  get name() { return this.zonaForm.get('name'); }
  get location() { return this.zonaForm.get('location'); }
  get radius() { return this.zonaForm.get('radius'); }
}
