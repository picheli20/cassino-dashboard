import './game-wrapper.scss';

import { Component, Input } from '@angular/core';
import { iGame } from '../../interfaces/game.interface';

@Component({
  selector: 'game-wrapper',
  template: require('./game-wrapper.html')
})
export class GameWrapperComponent {
    @Input() game: iGame;
}
