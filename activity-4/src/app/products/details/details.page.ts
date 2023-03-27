import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  product: Product | undefined

  constructor(
    private dbService: DbService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.dbService.getProduct(params['id']).then((product) => {
        this.product = product
      })
    })
  }

  ngOnInit() {

  }

}
