export interface Zona {
  name: string;
  radius: number;
  location: number; // ID de la ubicación
  deliveries?: number[]; // IDs de entregas (si se envían)
}