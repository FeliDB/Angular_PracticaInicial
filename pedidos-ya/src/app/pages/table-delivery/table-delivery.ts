import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table-delivery',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './table-delivery.html',
  styleUrls: ['./table-delivery.css']
})
export class TableDelivery {

    deliveries: any[] = [];
    estado: string = ""

    constructor(private http: HttpClient) {
        this.http.get<any[]>('http://localhost:3001/delivery').subscribe(data => {
          this.deliveries = data;
          console.log(this.deliveries);


    });
    }

    getEstadoTraducido(status: string): string {
    switch (status) {
      case 'avaliable':
        return 'Disponible';
      case 'in_route':
        return 'En Ruta';
      default:
        return status;
    }
  }

}
