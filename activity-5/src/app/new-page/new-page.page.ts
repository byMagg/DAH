import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewPagePage implements OnInit {

  public word: string | null = "(no word)";

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.word = this.activateRoute.snapshot.paramMap.get("word");
  }
}