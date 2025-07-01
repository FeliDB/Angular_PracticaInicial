import { Injectable } from '@angular/core';
import axios from 'axios';
import { config } from '../config/env';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  // Ejemplo de profe
  async getData(): Promise<
    Array<{ name: string; description: string; image: string }>
  > {
     return (await axios.get(config.urls.getFood)).data
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    try {
      const response = await axios.post(config.urls.login, { email, password });
      return response.data;
    } catch (error) {
      console.error('Error al hacer login:', error);
      throw error;
    }
  }
}
