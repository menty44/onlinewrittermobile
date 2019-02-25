import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import L from 'leaflet';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: L.Map;
  center: L.PointTuple;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.center = [12.972442, 77.594563];
    this.leafletMap();

  }

  leafletMap(){
    this.map = L.map('mapId2', {
      center: this.center,
      zoom: 13
    });

    var position = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, © <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(this.map);

    var greenIcon = L.icon({
      iconUrl: 'leaf-green.png',
      shadowUrl: 'leaf-shadow.png',

      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });



    // var marker = new L.Marker(this.center);
    // this.map.addLayer(marker);

    var marker = new L.marker([51.5, -0.09], {icon: greenIcon}).addTo(this.map);
    this.map.addLayer(marker);

    marker.bindPopup("<p>Tashi Delek - Nmasta Bangalore.</p>");
   }
 }
