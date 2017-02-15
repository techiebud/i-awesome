import { NavParams, ViewController } from 'ionic-angular';

import { Component } from '@angular/core';
import { Place } from './../../models/place';
import { PlacesService } from './../../services/places';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
  place: Place;
  index: number;
  constructor(private navParams: NavParams, private viewCtrl: ViewController, 
              private placesService: PlacesService) {

     this.place = this.navParams.get('place');
     this.index = this.navParams.get('index');
     
    
  }

  onLeave() {
      this.viewCtrl.dismiss();
  }

  onDelete() {
     this.placesService.deletePlace(this.index);
     this.onLeave();
     
    
  }

}
