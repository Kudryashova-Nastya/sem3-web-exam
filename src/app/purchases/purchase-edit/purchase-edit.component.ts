import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MyPurchases,
  MyPurchasesStatus,
} from 'src/app/shared/purchase.model';
import { HttpPurchasesService } from 'src/app/shared/services/http-purchases.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {
  id: number;
  purchases: MyPurchases;
  purchaseForm: FormGroup;
  MyPurchasesStatus = MyPurchasesStatus;

  
  constructor(
    private activatedRouter: ActivatedRoute,
    private HttpPurchasesService: HttpPurchasesService,
    private router: Router
  ) {
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.purchaseForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      status: new FormControl(0, [Validators.required])
    });
    this.getData();
  }

  async getData() {
    if ((this.id !== null)&&(this.id !== undefined)) {
      try {
        let purchases = this.HttpPurchasesService.getOneById(this.id);
        this.purchases = await purchases;
      } catch (err) {
        console.error(err);
      }
      this.purchaseForm.patchValue({
        name: this.purchases.name,
        quantity: this.purchases.quantity,
        status: this.purchases.status
      });
    }
  }

  async onSave() {
    if ((this.id !== null)&&(this.id !== undefined)) {
      try {
        await this.HttpPurchasesService.putOneById(this.id, this.purchaseForm.value);
      } catch (err) {
        console.error(err);
      }
      this.router.navigate(['/purchases']);
    } else {
      try {
        let res = await this.HttpPurchasesService.postOne(this.purchaseForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (err) {
        console.error(err);
      }
      this.router.navigate(['/purchases']);
    }
  }

  async onDelete() {
    try {
      await this.HttpPurchasesService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/purchases']);
  }
}
