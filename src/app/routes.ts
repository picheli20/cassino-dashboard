import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './pages/main/main';
import {BrowseComponent} from './pages/browse/browse';
import {GameComponent} from './pages/game/game';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {
    path: 'browse',
    component: BrowseComponent
  }, {
    path: 'game/:id',
    component: GameComponent
  }
];

export const routing = RouterModule.forRoot(routes);
