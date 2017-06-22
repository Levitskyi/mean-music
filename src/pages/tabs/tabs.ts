import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ChartsPage } from '../charts/charts';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = ChartsPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
