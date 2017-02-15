import { File } from 'ionic-native';
import { Injectable } from '@angular/core';
import { Location } from './../models/location';
import { Place } from './../models/place';
import { Storage } from '@ionic/storage';

declare var cordova: any;
@Injectable()
export class PlacesService {

    private places: Place[] = [];


    constructor(private storage: Storage) {


    }

    addPlace(title: string, description: string, location: Location, imageUrl: string) {

        const place = new Place(title, description, location, imageUrl);
        this.places.push(place);
        this.storage.set('places', this.places)
            .then(
            data => {
                //do nothing
            }
            )
            .catch(
            error => {
                this.places.splice(this.places.indexOf(place));
            }
            )


        console.log(place);
    }

    loadPlaces() {
        return this.places.slice();  //copy
    }

    fetchPlaces() {
        this.storage.get("places")
            .then(
            (places: Place[]) => {
                this.places = places != null ? this.places : [];
            }
            )
            .catch(
            error => {
                console.log(error);
            }

            )
    }

    deletePlace(index: number) {
        const place = this.places[index];
        this.places.splice(index, 1);
        this.storage.set('places', this.places)
            .then(
                () => {
                    this.removeFile(place);
                }

            )
            .catch(
                error => {
                    console.log(error);
                }
            )

    }


    private removeFile(place: Place) {
        const currentName = place.imageUrl.replace(/^.*[\\\/]/, ''); //strip out path
        File.removeFile(cordova.file.dataDirectory, currentName)
            .then(
            () => console.debug("Removed file")
            )
            .catch(
            (error) => {
                console.error("Error while removing file");
                console.log(error);
                this.addPlace(place.title, place.description, place.location, place.imageUrl);

            }

            )
    }

}