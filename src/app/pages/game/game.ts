import './game.scss';
import { GameService } from '../../services/game.service';
import { iGame } from '../../interfaces/game.interface';

import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IParams {
	id : string;
}

@Component({
  selector: 'game',
  template: require('./game.html')
})

export class GameComponent {
	id : string;
	result : iGame;

	constructor(private route: ActivatedRoute, private gameS: GameService) {}

	ngOnInit() {
		this.route.params.subscribe((params : IParams) => {
			this.id = params.id;
			this.gameS.getOne(this.id).subscribe(result => this.result = result);
		});
	}

	getLoaderBg() {
		return this.result && this.result.thumbnails ? this.result.thumbnails['600x280'] : '';
	}
}
