import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

// import {TechsModule} from './techs';

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
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
