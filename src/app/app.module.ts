import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AddPlacePage } from './../pages/add-place/add-place';
import { AgmCoreModule } from "angular2-google-maps/core";
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { PlacePage } from './../pages/place/place';
import { PlacesService } from './../services/places';
import { SetLocationPage } from './../pages/set-location/set-location';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    AddPlacePage,
    SetLocationPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ 
        apiKey: 'AIzaSyBTXHWSwmxa38MRLVftTZPNVnUzpmPCGag'

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage, 
    SetLocationPage,
    PlacePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},PlacesService]
})
export class AppModule {}
