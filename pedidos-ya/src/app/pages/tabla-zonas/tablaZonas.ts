import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonasService } from '../../services/zonas-service/zonas.service';

@Component({
  selector: 'app-tabla-zonas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablaZonas.html',
  styleUrls: ['./tablaZonas.css']
})

export class TablaZonas implements OnInit {
  datos: any[] = [];

  constructor(private zonasService: ZonasService) {}

  ngOnInit(): void {
    this.zonasService.getZonas().subscribe({
      next: (zonas) => (this.datos = zonas),
      error: (err) => console.error('Error cargando zonas:', err),
    });
  }
}

