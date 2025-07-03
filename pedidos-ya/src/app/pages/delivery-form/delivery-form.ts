import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngIf y ngClass
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule // <- AÑADILO AQUÍ
  ],
  templateUrl: './delivery-form.html',
  styleUrls: ['./delivery-form.css']
})



export class DeliveryForm implements OnInit {
  formMode: 'add' | 'edit' | 'delete' | null = null;
  showButtons: boolean = true;
  showForm: boolean = false;
  deliveryReactiveForm!: FormGroup;
  formTitle: string = 'Formulario de Delivery';

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
      alert('Debe completar al menos un campo adicional.');
      return;
    }
  }

  if (!this.deliveryReactiveForm.valid) {
    console.log('Formulario inválido.');
    this.deliveryReactiveForm.markAllAsTouched();
    return;
  }

  const formData = this.deliveryReactiveForm.value;
  const personID = formData.personID;

  if (this.formMode === 'add') {
    this.http.post('http://localhost:3000/delivery', formData).subscribe({
      next: () => {
        alert('Delivery añadido exitosamente.');
        this.goBack();
      },
      error: () => alert('Error al añadir delivery.')
    });
  }

  else if (this.formMode === 'edit') {
    this.http.put(`http://localhost:3000/delivery/${personID}`, formData).subscribe({
      next: () => {
        alert('Delivery modificado exitosamente.');
        this.goBack();
      },
      error: () => alert('Error al modificar delivery.')
    });
  }

  else if (this.formMode === 'delete') {
    this.http.delete(`http://localhost:3000/delivery/${personID}`).subscribe({
      next: () => {
        alert('Delivery eliminado exitosamente.');
        this.goBack();
      },
      error: () => alert('Error al eliminar delivery.')
    });
  }
}

  goBack(): void {
    this.showForm = false;
    this.showButtons = true;
    this.deliveryReactiveForm.reset();
  }
  
}