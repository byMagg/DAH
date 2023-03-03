import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPagePageRoutingModule } from './products-page-routing.module';

import { ProductsPagePage } from './products-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPagePageRoutingModule
  ],
  declarations: [ProductsPagePage]
})
export class ProductsPagePageModule {}
