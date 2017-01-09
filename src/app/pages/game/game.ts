import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IParams {
	id : number;
}

@Component({
  selector: 'game',
  template: require('./game.html')
})

export class GameComponent {
	id : number;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params : IParams) => {
			this.id = params.id;
		});
	}
}
