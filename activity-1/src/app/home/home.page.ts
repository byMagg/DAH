import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data = "";

  constructor(public navCtrl: NavController, private router: Router) { }

  goToNewPageNavCtrl() {
    this.navCtrl.navigateForward(["/new-page", this.data]);
  }

  goToNewPageNavigate() {
    this.router.navigateByUrl(`/new-page/${this.data}`);
  }
}