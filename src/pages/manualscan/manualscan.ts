import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoadingController } from 'ionic-angular';
import swal from 'sweetalert';

import axios from 'axios';
// import { HTTP } from '@ionic-native/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators/map";

import { MainPage } from '../';


/**
 * Generated class for the ManualscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manualscan',
  templateUrl: 'manualscan.html',
})
export class ManualscanPage {
  public manualcode: any;
  public enteredcode: any;
  public manualresults: any;
  public  oluoch: any;
  public kuku: any;
  public mycarts = [];
  public weka = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              public http: HttpClient,
              public toastCtrl: ToastController,
                public loadingCtrl : LoadingController) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad ManualscanPage');
  }

  searchProd() {
    
      const manualcode = this.manualcode;
      console.log("my searchProd" + manualcode);
      var loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Searching Product ' + manualcode + '...'
    });
    loading.present();

          // this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data', JSON.stringify(manualcode));
          //this.enteredcode = manualcode;
          if(!manualcode) {
            swal('Error', 'Please Enter the Product Code', 'error');
          }else{
            this.http
          .get('http://192.168.1.19:8080/biosearch?code=' + manualcode)
          .subscribe((data : any) =>
              {
                  // console.log('response', data);
                  // console.warn('response', JSON.stringify(data));
                  // console.warn('response', data.ok);
                  //localStorage.setItem('profile', JSON.stringify(data));
                  if(data.ok === '00') {
                    console.warn('we are inside ', JSON.stringify(data));
                    console.log('response', data);
                      localStorage.setItem('tempstore', JSON.stringify(data));
                      //const strdata = data;
                      // const findata = JSON.parse(data);
                      this.oluoch = data;
                      // this.manualresults = findata;
                      loading.dismiss();
                      const toast = this.toastCtrl.create({
                          message: 'Success ' ,
                          position: 'bottom',
                          duration: 1500
                      });
                      toast.present();
                      this.addtocart(data);
                  }
              },
              (error : any) =>
              {
                  const toast = this.toastCtrl.create({
                      message: 'Warning Product not found ' ,
                      position: 'bottom',
                      duration: 3500
                  });
                  toast.present();
                  console.dir(error);
                  console.warn('response', JSON.stringify(error));
              });
          }
  }

 addtocart(entry){
    var weka = [];

    // if ((!weka) || (weka === undefined)) {

    //   weka = [];
    // }

    for (var i = 0; i <= entry.length - 1; i++) {

      if (weka[i].productcode === entry.productcode) {

      }
    }

    // if (!found) {
      //var _game = entry;
      //console.log('_GAME', _game);
      var tstore1 = localStorage.getItem('tempstore');
      console.log('_GAME', tstore1);
      weka.push(entry);
    // }

    localStorage.setItem('jackpotBetSlip', JSON.stringify(weka));


  }

   addtocarttwo( entry){

    //localStorage.setItem('gameid', game.GameID); productcode

    var weka = JSON.parse(localStorage.getItem('jackpotBetSlip'));

    var found = false;

    if ((!weka) || (weka === undefined)) {

      weka = [];
    }

    for (var i = 0; i <= weka.length - 1; i++) {

      if (weka[i].productcode === weka.productcode) {

      }
    }

    // if (!found) {
      //var _game = entry;
      var tstore = localStorage.getItem('tempstore');
      var _game = JSON.parse(tstore);

      if ( typeof(tstore) !== "undefined" && tstore !== null ) {
        _game.forEach(function(entry) {

          var found = false;

          var title = [];
          var cart = [];
          var obj = {};

          //this.passit = 'blueish';
          console.log('entryobject', entry);

        })}else{
        console.log('bad data');
      }

      //console.log('_GAME', _game);
      var tstore1 = localStorage.getItem('tempstore');
      console.log('_GAME', tstore1);

    //   for (var i=0; i < _game; i++) {
    //     weka.push(_game);
    //     // weka.push(items[itemId]);
    // }
      weka.push(entry);
    // }

    localStorage.setItem('jackpotBetSlip', JSON.stringify(weka));

}

}
