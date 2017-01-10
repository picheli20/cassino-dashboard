import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], attr : string, search : string): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => {
        	return !search || item[attr].toLocaleLowerCase().match(search.toLocaleLowerCase()) !== null;
        });
    }
}
