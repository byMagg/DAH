import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class ExploreContainerComponent {

  @Input() name: string = ""
  @Input() buttonPath: string = ""

  constructor(public navCtrl: NavController) { }

  goToNewPageNavCtrl() {
    this.navCtrl.navigateForward(this.buttonPath);
  }
}
