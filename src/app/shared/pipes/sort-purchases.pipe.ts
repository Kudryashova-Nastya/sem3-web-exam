import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPurchases'
})
export class SortPurchasesPipe implements PipeTransform {

  transform(list): any[] {
    if (list != undefined && list != null){
    list.sort(function (a, b) {
      if (a.name.toLowerCase() >= b.name.toLowerCase()) {
        return 1;
      } else return -1;
    });
  }
    return list;
  }

}
