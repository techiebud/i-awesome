import { Camera, Geolocation } from 'ionic-native';
import { LoadingController, ModalController, ToastController } from "ionic-angular";

import { Component } from '@angular/core';
import { Location } from './../../models/location';
import { NgForm } from "@angular/forms";
import { PlacesService } from './../../services/places';
import { SetLocationPage } from './../set-location/set-location';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {

  private defaultLocation = {
    lat: 40.7624324,
    lng: -73.9759827
  };
  location: Location = this.defaultLocation;
  locationIsSet = false;
  imageUrl: string = '';
  constructor(private modalCtrl: ModalController, 
   private loadingCtrl: LoadingController,
   private toastCtrl: ToastController,
   private placesService: PlacesService ) { }

  onSubmit(form: NgForm) {
    console.debug("onSubmit");
    console.log(form.value);
    this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
    form.reset();
    this.location = this.defaultLocation;
    this.imageUrl = '';
    this.locationIsSet = false;
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
    console.debug("onLocate");
      const loader = this.loadingCtrl.create({
          content: 'Getting your location.....'
      });
      loader.present();
      Geolocation.getCurrentPosition()
          .then(
             location => {
               // console.log(location);
               loader.dismiss();
               this.location.lat = location.coords.latitude;
               this.location.lng = location.coords.longitude;
               this.locationIsSet = true;
                
               
             }

          )
          .catch(
          
              error => {
                loader.dismiss();
                const toast = this.toastCtrl.create({
                   message: 'Sorry, could not get your location',
                   duration: 2500
                });
                toast.present();
                console.log(error);
              }

          );

          
      }

      onTakePhoto() {

          Camera.getPicture({
            encodingType: Camera.EncodingType.JPEG,
            correctOrientation: true
            
          })
          .then(
            imageData => {
              console.log(imageData);
              this.imageUrl = imageData;
            }
          )
          .catch(
            error => {
              console.log(error);
            }
          )
      }
    
  }




