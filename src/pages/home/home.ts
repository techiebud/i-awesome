import { AddPlacePage } from './../add-place/add-place';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Place } from './../../models/place';
import { PlacePage } from './../place/place';
import { PlacesService } from './../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  addPlacePage = AddPlacePage;
  places: Place[] = [];
  constructor(private modalCtrl: ModalController, private placesService: PlacesService) {
    
  }

  ionViewWillEnter(){
       this.places = this.placesService.loadPlaces();
  }

  onOpenPlace(place: Place, index: number) {
      
     const modal = this.modalCtrl.create(PlacePage, {place: place, index: index});
     modal.present();
  }

}
