import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {

  constructor() {}

  onSubmit(form: NgForm) {
      console.debug("onSubmit");
      console.log(form.value);
  }
  

  
}
