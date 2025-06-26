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
      name: ['', Validators.required],
      description: ['']
    });
  }

hideButtons(mode: 'add' | 'edit' | 'delete'): void {
  this.formMode = mode;
  this.showButtons = false;
  this.showForm = true;

  if (mode === 'add' || mode === 'edit') {
    this.deliveryReactiveForm = this.fb.group({
      name: [mode === 'add' ? '' : '', mode === 'add' ? Validators.required : []],
      description: [''],
      address: [mode === 'add' ? '' : ''],
      phone: [mode === 'add' ? '' : ''],
    });

    if (mode === 'add') {
      this.deliveryReactiveForm.get('address')?.addValidators(Validators.required);
      this.deliveryReactiveForm.get('phone')?.addValidators(Validators.required);
      this.deliveryReactiveForm.get('description')?.addValidators(Validators.required);
    }

  } else if (mode === 'delete') {
    this.deliveryReactiveForm = this.fb.group({
      name: ['', Validators.required]
    });
  }
}

onSubmit(): void {
  if (this.formMode === 'edit') {
    const values = this.deliveryReactiveForm.value;
    const hasAtLeastOneField =
      values.description?.trim() || values.address?.trim() || values.phone?.trim();

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