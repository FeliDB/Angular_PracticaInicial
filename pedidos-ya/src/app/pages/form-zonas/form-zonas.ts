import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZonasService } from '../../services/zonas-service/zonas.service';

@Component({
  selector: 'app-form-zonas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-zonas.html',
  styleUrls: ['./form-zonas.css']
})
export class FormZonas implements OnInit {
  formMode: 'add' | 'edit' | 'delete' | null = null;
  showButtons: boolean = true;
  showForm: boolean = false;
  zonaForm!: FormGroup;
  formTitle: string = 'Formulario de Zonas';

  constructor(private fb: FormBuilder, private zonasService: ZonasService) { }

  ngOnInit(): void {
    this.zonaForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      lat: [''],
      lng: [''],
      radius: ['']
    });
  }

  hideButtons(mode: 'add' | 'edit' | 'delete'): void {
    this.formMode = mode;
    this.showButtons = false;
    this.showForm = true;
    if (mode === 'add' || mode === 'edit') {
      this.zonaForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        lat: ['', mode === 'add' ? Validators.required : []],
        lng: ['', mode === 'add' ? Validators.required : []],
        radius: ['', mode === 'add' ? Validators.required : []]
      });
    } else if (mode === 'delete') {
      this.zonaForm = this.fb.group({
        id: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (!this.zonaForm.valid) {
      this.zonaForm.markAllAsTouched();
      return;
    }
    const formData = this.zonaForm.value;
    if (this.formMode === 'add') {
      this.zonasService.postZona(formData).subscribe({
        next: () => {
          alert('Zona añadida exitosamente.');
          this.goBack();
        },
        error: () => alert('Error al añadir zona.')
      });
    } else if (this.formMode === 'edit') {
      if (!formData.id) {
        alert('Debe ingresar el ID de la zona a editar.');
        return;
      }
      this.zonasService.putZonaByData(formData).subscribe({
        next: () => {
          alert('Zona modificada exitosamente.');
          this.goBack();
        },
        error: () => alert('Error al modificar zona.')
      });
    } else if (this.formMode === 'delete') {
      this.zonasService.deleteZona(formData.id).subscribe({
        next: () => {
          alert('Zona eliminada exitosamente.');
          this.goBack();
        },
        error: () => alert('Error al eliminar zona.')
      });
    }
  }

  goBack(): void {
    this.showForm = false;
    this.showButtons = true;
    this.zonaForm.reset();
  }
}
