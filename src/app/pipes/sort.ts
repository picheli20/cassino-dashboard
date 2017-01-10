import { Pipe } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe {
  transform(array: Array<string>, attr: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a[attr] < b[attr]) {
        return -1;
      } else if (a[attr] > b[attr]) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}
