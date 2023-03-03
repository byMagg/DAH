import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.page.html',
  styleUrls: ['./clients-page.page.scss'],
})
export class ClientsPagePage implements OnInit {

  buttonPath = "/tabs/tab1/clients-page/edit-client-page"

  constructor(public navCtrl: NavController) { }

  goToNewPageNavCtrl() {
    this.navCtrl.navigateForward(this.buttonPath);
  }
  ngOnInit() {
  }

}
