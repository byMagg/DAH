import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string
  @Input() buttonPath = ""

  constructor(public navCtrl: NavController) { }

  goToNewPageNavCtrl() {
    this.navCtrl.navigateForward(this.buttonPath);
  }
}
