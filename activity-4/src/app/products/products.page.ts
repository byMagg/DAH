import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; //
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  items: Array<Product> | undefined;
  handlerMessage = '';
  roleMessage = '';
  displayOptions: boolean = false

  constructor(
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private dbService: DbService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Por favor, espere...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe((data: any[] | undefined) => {
        loading.dismiss();
        this.items = data?.map<Product>((item) => {
          const data = item.payload.doc.data()
          return {
            id: item.payload.doc.id,
            name: data.name,
            description: data.description,
            image: data.image,
          }
        });
      })
    })
  }

  async presentLoading(loading: HTMLIonLoadingElement) {
    return await loading.present();
  }

  async deleteProduct(productId: string) {
    const alert = await this.alertController.create({
      header: '¿Seguro que desea eliminarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          cssClass: 'alert-button-delete',
          handler: () => {
            this.dbService.deleteProduct(productId);
          },
        },
      ],
    });

    await alert.present();
  }

  logout() {
    this.router.navigate(["/home"]);
    this.authService.doLogout()
      .then(res => {
        console.log("User logout");
      }, err => {
        console.log(err);
      })
  }

}