import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LeaderboardPage } from '../leaderboards/leaderboards';
import { HomePage } from '../home/home';
import { IntervalPage } from '../interval/interval';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = LeaderboardPage;
  tab4Root = IntervalPage;

  constructor() {

  }
}
