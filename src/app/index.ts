import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import { HttpModule, JsonpModule } from '@angular/http';

// import {TechsModule} from './techs';

import {BrowseComponent} from './pages/browse/browse';
import {GameComponent} from './pages/game/game';
import {MainComponent} from './pages/main/main';

import {HeaderComponent} from './components/header/header';
import {FooterComponent} from './components/footer/footer';

import { GameService } from './services/game.service';
import { HttpCherry } from './services/httpCherry';

@NgModule({
  imports: [
    BrowserModule,
    routing, 
    HttpModule,
    JsonpModule
    // module TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    BrowseComponent,
    HeaderComponent,
    GameComponent,
    FooterComponent
  ],
  providers: [
    GameService,
    HttpCherry,
    GameService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
