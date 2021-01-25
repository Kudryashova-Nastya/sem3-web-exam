import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstNewPurchase'
})
export class FirstNewPurchasePipe implements PipeTransform {

  transform(list): any[] {
    if (list != undefined && list != null){
    list.sort(( a, b ) => a.status - b.status);
  }
    return list;
  }

}
