import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditClientPagePageRoutingModule } from './edit-client-page-routing.module';

import { EditClientPagePage } from './edit-client-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditClientPagePageRoutingModule
  ],
  declarations: [EditClientPagePage]
})
export class EditClientPagePageModule {}
