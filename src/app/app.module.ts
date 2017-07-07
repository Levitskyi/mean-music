import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RockPage } from '../pages/rock/rock';
import { LastFmPage } from '../pages/last-fm/last-fm';
import { SpotifyPage } from '../pages/spotify/spotify';
import { ChartsPage } from '../pages/charts/charts';
import { SearchPage } from '../pages/search/search';
import { GenreDetailsPage } from '../pages/genre-details/genre-details';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { PlayerComponent } from '../components/player/player';
import { CountPipe } from '../pipes/count/count';
import { MinsecPipe } from '../pipes/minsec/minsec';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RockPage,
    LastFmPage,
    SpotifyPage,
    ChartsPage,
    SearchPage,
    GenreDetailsPage,
    TabsPage,
    PlayerComponent,
    CountPipe,
    MinsecPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RockPage,
    LastFmPage,
    SpotifyPage,
    ChartsPage,
    SearchPage,
    GenreDetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {
}
