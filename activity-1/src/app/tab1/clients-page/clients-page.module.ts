import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsPagePageRoutingModule } from './clients-page-routing.module';

import { ClientsPagePage } from './clients-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsPagePageRoutingModule
  ],
  declarations: [ClientsPagePage]
})
export class ClientsPagePageModule {}
