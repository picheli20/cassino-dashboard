import { Component, Input } from '@angular/core';
import { IGame } from '../../interfaces/game.interface';

@Component({
  selector: 'game-wrapper',
  template: require('./game-wrapper.html')
})
export class GameWrapperComponent {
    @Input() game: IGame;
}
