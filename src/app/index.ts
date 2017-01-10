import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

// import {TechsModule} from './techs';

import {BrowseComponent} from './pages/browse/browse';
import {GameComponent} from './pages/game/game';
import {MainComponent} from './pages/main/main';

import {HeaderComponent} from './components/header/header';
import {FooterComponent} from './components/footer/footer';
import {LoaderComponent} from './components/loader/loader';
import {SliderComponent} from './components/slider/slider';
import {GameWrapperComponent} from './components/game-wrapper/game-wrapper';

import { GameService } from './services/game.service';
import { CategoryService } from './services/category.service';
import { HttpCherry } from './services/httpCherry';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
    // module TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    BrowseComponent,
    HeaderComponent,
    LoaderComponent,
    GameComponent,
    FooterComponent,
    SliderComponent,
    GameWrapperComponent
  ],
  providers: [
    GameService,
    CategoryService,
    {
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new HttpCherry(backend, defaultOptions);
      },
      deps: [ XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
