import { Component } from '@angular/core';
import {
  MyPurchases,
  MyPurchasesStatus,
} from './shared/purchase.model';
import { HttpPurchasesService } from './shared/services/http-purchases.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список покупок';
  purchases: MyPurchases[];
  MyPurchasesStatus = MyPurchasesStatus;
  edit = false;
  purchaseData = {
    id: 0,
    name: '',
    quantity: 1,
    status: 0
  };

  constructor(
    private httpProductService: HttpPurchasesService, private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      let purchases = this.httpProductService.getAll();
      this.purchases = (await purchases === null)||(await purchases === undefined) ? [] : await purchases;
    } catch (err) {
      console.error(err);
    }

    try {
      this.purchases = await this.httpProductService.getAll();
    } catch (err) {
      console.log(err);
    }
  }

  async onAddWorker(purchase: MyPurchases) {
    try {
        let id =
          this.purchases.length > 0
            ? this.purchases[this.purchases.length - 1].id + 1
            : 0;
        purchase.id = id;
      await this.httpProductService.postOne(purchase);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

  async onEditWorker(purchase) {
    try {
    await this.httpProductService.putOneById(purchase.id ,purchase);
  } catch (err) {
    console.error(err);
  } finally {
    this.edit = false;
    this.getData();
  }
  }
  
  async onDeleteById(id: number) {
    try {
      await this.httpProductService.deleteOneById(id);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }
  getByType(type: number) {
    return this.purchases.filter((purchase) => purchase.status === type);
  }


  onEditById(id: number) {
    let index = this.purchases.findIndex((purchase) => purchase.id === id);
    this.purchaseData = {
      id: this.purchases[index].id,
      name: this.purchases[index].name,
      quantity: this.purchases[index].quantity,
      status: this.purchases[index].status
    }
    this.edit = true;
  }

  onCancelEdit() {
    this.edit = false;
  }
}
