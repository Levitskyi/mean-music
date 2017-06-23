import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//pages
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { RockPage } from '../pages/rock/rock';
import { LastFmPage } from '../pages/last-fm/last-fm';
import { SpotifyPage } from '../pages/spotify/spotify';
// import { ChartsPage } from '../pages/charts/charts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any, index: number}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, index: 0 },
      { title: 'About', component: AboutPage, index: 1 },
      { title: 'Contact', component: ContactPage, index: 2 },
      { title: 'Rock', component: RockPage, index: 3 },
      { title: 'Last fm', component: LastFmPage, index: 4 },
      { title: 'Spotify', component: SpotifyPage, index: 5 },
    ];
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // this.nav.setRoot(page.component)
    let params = {};
    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
      // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot('TabsPage', params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

  }
}
