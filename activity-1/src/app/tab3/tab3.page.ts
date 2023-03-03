import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title: string = "Products"
  buttonPath: string = "/tabs/tab3/products-page"

  constructor(public navCtrl: NavController) { }

  goToNewPageNavCtrl() {
    this.navCtrl.navigateForward(this.buttonPath);
  }
}
