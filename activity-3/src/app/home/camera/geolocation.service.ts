import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Coords } from 'src/models/Coords';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCoords(): Promise<Coords> {
    return Geolocation.getCurrentPosition().then((position) => {
      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      }
    });
  }
}
