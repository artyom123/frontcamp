import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../models/news';

@Pipe({
  name: 'filterWord'
})
export class FilterWordPipe implements PipeTransform {

  transform(items: News[], search: string): News[] {
    if (!items) { return []; }
    if (!search) { return items; }

    return items.filter(item =>
        item.description.toLowerCase().includes(search.toLowerCase()));
  }
}
