import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZonasService } from '../../services/zonas-service/zonas.service';

@Component({
  selector: 'app-form-zonas',
  standalone: true,
  templateUrl: './form-zonas.html',
  styleUrls: ['./form-zonas.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormZonas {
  showButtons: boolean = true;
  showForm: boolean = false;
  formMode: 'add' | 'edit' | 'delete' = 'add';

  zonaForm: FormGroup;
  deleteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private zonasService: ZonasService
  ) {
    // Formulario de alta/modificación
    this.zonaForm = this.fb.group({
      idZone: [''], // solo se usa en edit
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: this.fb.group({
        lat: ['', Validators.required],
        lng: ['', Validators.required]
      }),
      radius: ['', [Validators.required, Validators.min(1)]]
    });

    // Formulario de eliminación
    this.deleteForm = this.fb.group({
      idZone: ['', Validators.required]
    });
  }

  get name() {
    return this.zonaForm.get('name');
  }

  get radius() {
    return this.zonaForm.get('radius');
  }

  get location() {
    return this.zonaForm.get('location') as FormGroup;
  }

  get idZone() {
    return this.deleteForm.get('idZone');
  }

  hideButtons(mode: 'add' | 'edit' | 'delete') {
    this.showButtons = false;
    this.showForm = true;
    this.formMode = mode;

    this.zonaForm.reset();
    this.deleteForm.reset();

    if (mode === 'delete') {
      this.zonaForm.disable();
    } else {
      this.zonaForm.enable();
    }
  }

  goBack() {
    this.showForm = false;
    this.showButtons = true;
    this.zonaForm.reset();
    this.deleteForm.reset();
  }

  onSubmit() {
    if (this.zonaForm.invalid) return;

    const formData = this.zonaForm.value;

    if (this.formMode === 'add') {
      this.zonasService.postZona(formData).subscribe({
        next: () => {
          alert('Zona registrada exitosamente');
          this.zonaForm.reset();
          this.goBack();
        },
        error: (err) => {
          alert('Error al registrar la zona');
          console.error('Error al registrar zona:', err);
        }
      });

    } else if (this.formMode === 'edit') {
      const idZone = formData.idZone;

      if (!idZone) {
        alert('ID de zona requerido para editar');
        return;
      }

      const updateData = {
        name: formData.name,
        location: formData.location,
        radius: formData.radius
      };

      this.zonasService.patchZona(idZone, updateData).subscribe({
        next: () => {
          alert('Zona actualizada exitosamente');
          this.zonaForm.reset();
          this.goBack();
        },
        error: (err) => {
          alert('Error al actualizar la zona');
          console.error('Error al actualizar zona:', err);
        }
      });
    }
  }

  onDelete() {
    if (this.deleteForm.invalid) return;

    const id = this.deleteForm.value.idZone;

    this.zonasService.deleteZona(id).subscribe({
      next: () => {
        alert('Zona eliminada exitosamente');
        this.deleteForm.reset();
        this.goBack();
      },
      error: (err) => {
        alert('Error al eliminar la zona');
        console.error('Error al eliminar zona:', err);
      }
    });
  }
}
