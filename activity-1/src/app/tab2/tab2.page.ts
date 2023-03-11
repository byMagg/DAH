import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title: string = "Reservations"
  buttonPath: string = "/tabs/tab2/reservations-page"
  constructor(public navCtrl: NavController) { }

  goToNewPageNavCtrl() {
    this.navCtrl.navigateForward(this.buttonPath);
  }
}
