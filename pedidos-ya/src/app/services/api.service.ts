import { Injectable } from '@angular/core';
import axios from 'axios';
import { config } from '../config/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModelo } from '../models/User/user-modelo';

@Injectable({
  providedIn: 'root',
})
export class ApiService { //Simula ser AuthService
  constructor() {}

  // !Esto lo envio el profe a modo de ejemplo, pero no lo voy a usar

  async getData(): Promise<
    Array<{ name: string; description: string; image: string }>
  > {
     return (await axios.get(config.urls.getFood)).data
  }
  
  // getUsuarios
existeUsuario(email: string): Promise<any> {
  return axios.post(config.urls.userExists, { email }).then(response => response.data);
}


  //Aca me envio solicitud al backend, utilizando axios
  registroUsuario(usuario: UserModelo): Promise<any> {
    return axios.post(config.urls.register, usuario).then(response => response.data);
  }

  getRoles(): Observable<any> { 
    return new Observable((observer) => {
      axios.get(config.urls.role)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }



}
