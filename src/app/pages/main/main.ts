import './main.scss';

import { CategoryService } from '../../services/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./main.html')
})
export class MainComponent {
	result : any = [];
	constructor ( private category: CategoryService ) {
		category.get().map(res => res.json()).subscribe(result => this.result = result);
	}
}
