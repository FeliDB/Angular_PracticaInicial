import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZonasService } from '../../services/zonas-service/zonas.service';

@Component({
  selector: 'app-form-delete-zona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-delete-zonas.html',
  styleUrls: ['./form-delete-zonas.css']
})

export class FormDeleteZonas {
  deleteForm: FormGroup;

  constructor(private fb: FormBuilder, private zonasService: ZonasService) {
    this.deleteForm = this.fb.group({
      idZone: [null, Validators.required]
    });
  }

  onDelete() {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.idZone;

      this.zonasService.deleteZona(id).subscribe({
        next: (res) => {
          console.log(`Zona con ID ${id} eliminada`, res);
          this.deleteForm.reset();
        },
        error: (err) => {
          console.error(`Error al eliminar zona con ID ${id}:`, err);
        }
      });
    } else {
      this.deleteForm.markAllAsTouched();
    }
  }

  get idZone() {
    return this.deleteForm.get('idZone');
  }
}
