import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { PurchasesComponent } from './purchases.component';

const routes: Routes = [{
  path: '',
  component: PurchasesComponent,
  children: [
    {
      path: '',
      component: PurchaseListComponent,
    },
    {
      path: 'product',
      component: PurchaseEditComponent,
    },
    {
      path: 'product/:id',
      component: PurchaseEditComponent,
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
