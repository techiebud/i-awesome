import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';
import { Location } from './../../models/location';
import { ModalController } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { SetLocationPage } from './../set-location/set-location';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {
  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  }
  locationIsSet = false;
  constructor(private modalCtrl: ModalController) { }

  onSubmit(form: NgForm) {
    console.debug("onSubmit");
    console.log(form.value);
  }

  onOpenMap() {
    
    const modal = this.modalCtrl.create(SetLocationPage, { location: this.location, isSet: this.locationIsSet });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
          this.location = data.location;
          this.locationIsSet = true;

      }
    }


    );



  }

  onLocate() {

      Geolocation.getCurrentPosition() 
          .then(
             location => {
               // console.log(location);
               this.location.lat = location.coords.latitude;
               this.location.lng = location.coords.longitude;
               this.locationIsSet = true;
                
               
             }

          )
          .catch(
              error => {
                console.log(error);
              }

          );

          
      }
    
  }




