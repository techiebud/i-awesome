import { NavParams, ViewController } from 'ionic-angular';

import { Component } from '@angular/core';
import { Location } from './../../models/location';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html'
})
export class SetLocationPage {
  location: Location;
  marker: Location;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
     this.location = this.navParams.get("location");

  }

  onSetMarker(event: any) {
     console.debug("event");
     console.log(event);
     this.marker = new Location(event.coords.lat, event.coords.lng);  
    
      
  }
  onConfirm() {

    this.viewCtrl.dismiss({location: this.marker});
  }




  onAbort() {
     this.viewCtrl.dismiss();
    
  }
      

}
