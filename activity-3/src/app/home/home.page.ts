import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitude: number | undefined;
  longitude: number | undefined;
  accuracy: number | undefined;

  photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {
    this.getLocation();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.accuracy = position.coords.accuracy;
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    if (image && image.webPath) {
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
    }

  }

}