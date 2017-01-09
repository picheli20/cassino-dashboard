import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

// import {TechsModule} from './techs';

import {BrowseComponent} from './pages/browse/browse';
import {GameComponent} from './pages/game/game';
import {MainComponent} from './pages/main/main';
import {HeaderComponent} from './components/header/header';
import {TitleComponent} from './components/title/title';
import {FooterComponent} from './components/footer/footer';

@NgModule({
  imports: [
    BrowserModule,
    routing
    // module TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    BrowseComponent,
    HeaderComponent,
    GameComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
