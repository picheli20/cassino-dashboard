import { GameService } from '../../services/game.service';
import {Component} from '@angular/core';

@Component({
  selector: 'browse',
  template: require('./browse.html')
})
export class BrowseComponent {
	result : any = [];
	searchModel : any;
	constructor ( private game: GameService ) {
		game.get().subscribe(result => this.result = result);
	}
}
