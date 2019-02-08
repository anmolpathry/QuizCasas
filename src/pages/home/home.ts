import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  casas = [];

  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.http.get('/v1/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
    .subscribe(data => {
      //console.log(JSON.stringify(data));
      if(data.hasOwnProperty('ads')){
        this.casas = data['ads'];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

}

//Todos las  se encuentran dentro del diccionario ads

//Precio => se encuentra en price
//Precio= casa.price.priceType 
//Moneda = casa.price.currency 
//Cantidad= casa.price.formattedAmount

// Ubicación => se encuentra en geo 
// Municipio= casa.geo.name
// Colonia= casa.geo.displayName

//Imagen => se encuentra en el arreglo pictures
// Imagen = casa.pictures[0].url