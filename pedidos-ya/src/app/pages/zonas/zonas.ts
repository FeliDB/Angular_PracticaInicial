import { Component } from '@angular/core';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.html',
  styleUrls: ['./zonas.css']
})
export class Zonas {
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
    { id: 11, nombre: 'Zona A', ubicacion: 'Murcia', radio: 1400 },
    { id: 12, nombre: 'Zona B', ubicacion: 'Alicante', radio: 1450 },
    { id: 13, nombre: 'Zona C', ubicacion: 'Valladolid', radio: 1600 },
    { id: 14, nombre: 'Zona D', ubicacion: 'Gijón', radio: 1000 },
    { id: 15, nombre: 'Zona E', ubicacion: 'Córdoba', radio: 1550 },
    { id: 16, nombre: 'Zona F', ubicacion: 'La Coruña', radio: 1350 },
    { id: 17, nombre: 'Zona G', ubicacion: 'Santander', radio: 1500 },
    { id: 18, nombre: 'Zona H', ubicacion: 'Toledo', radio: 1100 },
    { id: 19, nombre: 'Zona I', ubicacion: 'Burgos', radio: 950 },
    { id: 20, nombre: 'Zona J', ubicacion: 'Salamanca', radio: 1000 },
    { id: 21, nombre: 'Zona K', ubicacion: 'Oviedo', radio: 1700 },
    { id: 22, nombre: 'Zona L', ubicacion: 'Pamplona', radio: 1800 },
    { id: 23, nombre: 'Zona M', ubicacion: 'Almería', radio: 1300 },
    { id: 24, nombre: 'Zona N', ubicacion: 'Huelva', radio: 1200 },
    { id: 25, nombre: 'Zona O', ubicacion: 'León', radio: 1500 },
    { id: 26, nombre: 'Zona P', ubicacion: 'Lugo', radio: 1400 },
    { id: 27, nombre: 'Zona Q', ubicacion: 'Cuenca', radio: 1250 },
    { id: 28, nombre: 'Zona R', ubicacion: 'Segovia', radio: 1600 },
    { id: 29, nombre: 'Zona S', ubicacion: 'Ávila', radio: 1000 },
    { id: 30, nombre: 'Zona T', ubicacion: 'Jaén', radio: 1450 },
    { id: 31, nombre: 'Zona U', ubicacion: 'Cádiz', radio: 1750 },
    { id: 32, nombre: 'Zona V', ubicacion: 'Albacete', radio: 1150 },
    { id: 33, nombre: 'Zona W', ubicacion: 'Castellón', radio: 1550 },
    { id: 34, nombre: 'Zona X', ubicacion: 'Logroño', radio: 1350 },
    { id: 35, nombre: 'Zona Y', ubicacion: 'Tarragona', radio: 1450 },
    { id: 36, nombre: 'Zona Z', ubicacion: 'Lleida', radio: 1400 },
    { id: 37, nombre: 'Zona AA', ubicacion: 'Girona', radio: 1500 },
    { id: 38, nombre: 'Zona BB', ubicacion: 'Ourense', radio: 1250 },
    { id: 39, nombre: 'Zona CC', ubicacion: 'Melilla', radio: 1100 },
    { id: 40, nombre: 'Zona DD', ubicacion: 'Ceuta', radio: 950 },
    { id: 41, nombre: 'Zona EE', ubicacion: 'Palma', radio: 1700 },
    { id: 42, nombre: 'Zona FF', ubicacion: 'Ibiza', radio: 1600 },
    { id: 43, nombre: 'Zona GG', ubicacion: 'San Sebastián', radio: 1300 },
    { id: 44, nombre: 'Zona HH', ubicacion: 'Vitoria', radio: 1450 },
    { id: 45, nombre: 'Zona II', ubicacion: 'Soria', radio: 1200 },
    { id: 46, nombre: 'Zona JJ', ubicacion: 'Teruel', radio: 1150 },
    { id: 47, nombre: 'Zona KK', ubicacion: 'Zamora', radio: 950 },
    { id: 48, nombre: 'Zona LL', ubicacion: 'Huesca', radio: 1250 },
    { id: 49, nombre: 'Zona MM', ubicacion: 'Ciudad Real', radio: 1400 },
    { id: 50, nombre: 'Zona NN', ubicacion: 'Guadalajara', radio: 1500 }
  ];

  // Paginación
  paginaActual = 1;
  itemsPorPagina = 10;

  get totalPaginas(): number {
    return Math.ceil(this.datos.length / this.itemsPorPagina);
  }

  get datosPaginados() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return this.datos.slice(inicio, fin);
  }

  siguientePagina() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }

  anteriorPagina() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  irAPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }
}
