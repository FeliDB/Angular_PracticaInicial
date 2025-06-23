import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-zonas',
  templateUrl: './tabla-zonas.html',
  styleUrls: ['./tabla-zonas.css']
})


export class tabla {
  // Datos simulados
  datos = [
    { id: 1, nombre: 'Zona Norte', ubicacion: 'Madrid', radio: 1500 },
    { id: 2, nombre: 'Zona Este', ubicacion: 'Barcelona', radio: 1200 },
    { id: 3, nombre: 'Zona Centro', ubicacion: 'Valencia', radio: 1800 },
    { id: 4, nombre: 'Zona Sur', ubicacion: 'Sevilla', radio: 1000 },
    { id: 5, nombre: 'Zona Río', ubicacion: 'Bilbao', radio: 1300 },
    { id: 6, nombre: 'Zona Alta', ubicacion: 'Zaragoza', radio: 2000 },
    { id: 7, nombre: 'Zona Baja', ubicacion: 'Granada', radio: 950 },
    { id: 8, nombre: 'Zona Centro 2', ubicacion: 'Madrid', radio: 1700 },
    { id: 9, nombre: 'Zona Industrial', ubicacion: 'Valencia', radio: 1100 },
    { id: 10, nombre: 'Zona Urbana', ubicacion: 'Sevilla', radio: 1250 },
  ];

}
