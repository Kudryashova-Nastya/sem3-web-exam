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
export class AppComponent {constructor() { }

ngOnInit(): void {
}
}
