import { Component } from '@angular/core';

@Component({
  selector: 'app-form-zonas',
  imports: [],
  templateUrl: './form-zonas.html',
  styleUrl: './form-zonas.css'
})
export class FormZonas {

}


formulario: FormGroup;
error = '';
constructor(private fb: FormBuilder) {
this.formulario = this.fb.group({
nombre: ['', [Validators.required, Validators.minLength(3)]],
edad: [null, [Validators.required, Validators.min(1)]],
email: ['', [Validators.required, Validators.email]]
});
}
enviar() {
if (this.formulario.invalid) {
this.error = 'Completa todos los campos correctamente.';
return;
}
console.log(this.formulario.value);
this.error = '';
}