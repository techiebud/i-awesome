import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { NgForm } from "@angular/forms";
import { SetLocationPage } from './../set-location/set-location';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {

  constructor(private modalCtrl: ModalController) {}

  onSubmit(form: NgForm) {
      console.debug("onSubmit");
      console.log(form.value);
  }

  onOpenMap() {

      const modal = this.modalCtrl.create(SetLocationPage);
      modal.present();

      
    
  }
  

  
}
