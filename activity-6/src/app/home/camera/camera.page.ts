import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { GeolocationService } from './geolocation.service';
import { Coords } from 'src/models/Coords';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CameraPage implements OnInit {

  coords: Coords | undefined

  photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer, private geolocationService: GeolocationService) {
    this.getLocation();
  }

  async getLocation() {
    this.coords = await this.geolocationService.getCoords()
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

  ngOnInit() {

  }
}
