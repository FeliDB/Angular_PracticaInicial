import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf y ngClass

@Component({
  selector: 'app-delivery-form',
  standalone: true, // Indica que es un componente autónomo
  imports: [CommonModule, ReactiveFormsModule], // Importa los módulos necesarios aquí
  templateUrl: './delivery-form.html',
  styleUrls: ['./delivery-form.css']
})
export class DeliveryForm implements OnInit {
  formMode: 'add' | 'edit' | 'delete' | null = null;
  showButtons: boolean = true;
  showForm: boolean = false;
  deliveryReactiveForm!: FormGroup;
  formTitle: string = 'Formulario de Delivery';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.deliveryReactiveForm = this.fb.group({
      personID: ['', Validators.required],
      lat: ['']
    });
  }

  hideButtons(mode: 'add' | 'edit' | 'delete'): void {
    this.formMode = mode;
    this.showButtons = false;
    this.showForm = true;

    if (mode === 'add' || mode === 'edit') {
      this.deliveryReactiveForm = this.fb.group({
        personID: [mode === 'add' ? '' : '', mode === 'add' ? Validators.required : []],
        lat: [''],
        radius: [mode === 'add' ? '' : ''],
        lng: [mode === 'add' ? '' : ''],
      });

      if (mode === 'add') {
        this.deliveryReactiveForm.get('radius')?.addValidators(Validators.required);
        this.deliveryReactiveForm.get('lng')?.addValidators(Validators.required);
        this.deliveryReactiveForm.get('lat')?.addValidators(Validators.required);
      }

    } else if (mode === 'delete') {
      this.deliveryReactiveForm = this.fb.group({
        personID: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.formMode === 'edit') {
      const values = this.deliveryReactiveForm.value;
      const hasAtLeastOneField =
        values.lat?.trim() || values.radius?.trim() || values.lng?.trim();

      if (!hasAtLeastOneField) {
        alert('Debe completar al menos un campo adicional para modificar.');
        return;
      }
    }

    if (this.deliveryReactiveForm.valid) {
      console.log('Formulario enviado:', this.deliveryReactiveForm.value);
    } else {
      console.log('Formulario inválido.');
      this.deliveryReactiveForm.markAllAsTouched();
    }
  }

  goBack(): void {
    this.showForm = false;
    this.showButtons = true;
    this.deliveryReactiveForm.reset();
  }
}