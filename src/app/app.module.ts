import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LeaderboardPage } from '../pages/leaderboards/leaderboards';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { IntervalPage } from '../pages/interval/interval';
import { MainScreenPage } from '../pages/mainScreen/main-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDsHpg3ICEqk7pT7JNkvylAQTqXbwhznVI",
    authDomain: "pwapoc-89fc6.firebaseapp.com",
    databaseURL: "https://pwapoc-89fc6.firebaseio.com",
    projectId: "pwapoc-89fc6",
    storageBucket: "pwapoc-89fc6.appspot.com",
    messagingSenderId: "454291515188"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LeaderboardPage,
    HomePage,
    TabsPage,
    AdminPage,
    IntervalPage,
    MainScreenPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LeaderboardPage,
    HomePage,
    TabsPage,
    AdminPage,
    IntervalPage,
    MainScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
