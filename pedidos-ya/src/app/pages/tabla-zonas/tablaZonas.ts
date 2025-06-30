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
  zonas: any[] = [];
  paginatedZonas: any[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private zonasService: ZonasService) {}

  ngOnInit(): void {
    this.zonasService.getZonas().subscribe({
      next: (res) => {
        this.zonas = res;
        this.updatePaginatedZonas();
      },
      error: (err) => {
        console.error('Error al obtener zonas:', err);
      }
    });
  }

  updatePaginatedZonas(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedZonas = this.zonas.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if ((this.currentPage * this.itemsPerPage) < this.zonas.length) {
      this.currentPage++;
      this.updatePaginatedZonas();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedZonas();
    }
  }
}
