import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchasesComponent } from './purchases.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { FirstNewPurchasePipe } from 'src/app/shared/pipes/first-new-purchase.pipe';
import { SortPurchasesPipe } from 'src/app/shared/pipes/sort-purchases.pipe';



@NgModule({
  declarations: [
    PurchasesComponent, 
    PurchaseListComponent, 
    PurchaseEditComponent,
    FirstNewPurchasePipe,
    SortPurchasesPipe
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class PurchasesModule { }
