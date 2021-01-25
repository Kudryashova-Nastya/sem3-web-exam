import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
  {
    path: 'purchases',
    loadChildren: () =>
      import('./purchases/purchases.module').then((m) => m.PurchasesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
