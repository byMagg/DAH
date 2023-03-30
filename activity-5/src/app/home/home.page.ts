import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GenerateTextService } from '../services/generate-text.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class HomePage {

  public title: string = "Home Page";
  public word: string = "initial word";

  constructor(public testservice: GenerateTextService) { }

  getWord() {
    this.word = this.testservice.getRandomWord();
  }

  changeTitle(title: string) {
    this.title = title;
  }

}