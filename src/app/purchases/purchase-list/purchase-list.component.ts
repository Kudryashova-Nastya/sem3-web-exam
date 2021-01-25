import { Component, OnInit } from '@angular/core';
import {
  MyPurchases,
  MyPurchasesStatus,
} from 'src/app/shared/purchase.model';
import { HttpPurchasesService } from 'src/app/shared/services/http-purchases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  purchases: MyPurchases[];

  constructor(private HttpPurchasesService: HttpPurchasesService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      let purchases = this.HttpPurchasesService.getAll();
      this.purchases = (await purchases === null)||(await purchases === undefined) ? [] : await purchases;
    } catch (err) {
      console.error(err);
    }

    try {
      this.purchases = await this.HttpPurchasesService.getAll();
    } catch (err) {
      console.log(err);
    }
  }

  onLinkProduct(id: number) {
    this.router.navigate([this.router.url, 'product', id]);
  }

  onAddProduct() {
    this.router.navigate([this.router.url, 'product']);
  }

  async onChangeStatus(id: number) {
    try {
      let data = await this.HttpPurchasesService.getOneById(id);
      if (data.status === 0) {
        data.status = 1
      } else data.status = 0

      await this.HttpPurchasesService.putOneById(id, data);
    } catch (err) {
      console.error(err);
    }
    this.getData();
  }

}
