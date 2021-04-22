import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IcecastProvider } from '../providers/icecast/icecast';
import { FbPageProvider } from '../providers/fb-page/fb-page';
import { AdmobProvider } from '../providers/admob/admob';
import { HttpClientModule } from '@angular/common/http';
import { AdMobFree } from '@ionic-native/admob-free';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
    IonicModule.forRoot(MyApp),
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IcecastProvider,
    FbPageProvider,
    AdmobProvider,
  ]
})
export class AppModule {}
