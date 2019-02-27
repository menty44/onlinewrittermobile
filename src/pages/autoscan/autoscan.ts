import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoadingController } from 'ionic-angular';
import swal from 'sweetalert';

import axios from 'axios';
// import { HTTP } from '@ionic-native/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators/map";

import _ from 'lodash';

/**
 * Generated class for the AutoscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autoscan',
  templateUrl: 'autoscan.html',
})
export class AutoscanPage {
    private results: any;
    public kuku: any;
    public oluochi: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              public loadingCtrl: LoadingController,
              public http: HttpClient,
              public toastCtrl: ToastController) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad AutoscanPage');
  }

  scanProd() {
      let loading = this.loadingCtrl.create({
          content: "Searching Product ...",
          spinner: "bubbles"
          // duration: 3000
      });
      loading.present();
      this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data ', JSON.stringify(barcodeData));
          //this.results = barcodeData;

          this.http
          .get('http://192.168.0.20:8080/biosearch?code=' + barcodeData.text)
          .subscribe((data : any) =>
              {
                  console.log(data);
                  console.warn('response', JSON.stringify(data));
                  console.warn('responsescan', data.ok);
                  // localStorage.setItem('scan', JSON.stringify(data));
                  if(data.ok === '00') {
                    // console.warn('we are inside yoh', localStorage.getItem('scan'));
                      //const strdata = data;
                      // const findata = JSON.parse(data);
                      this.oluochi = data;
                      //this.manualresults = findata;
                      loading.dismiss();
                      const toast = this.toastCtrl.create({
                          message: 'Success ' ,
                          position: 'bottom',
                          duration: 1500
                      });
                      toast.present();

                      var weka = JSON.parse(localStorage.getItem('jackpotBetSlip'));

                        var found = false;

                        if ((!weka) || (weka === undefined)) {

                          weka = [];
                        }

                        for (var i = 0; i <= weka.length - 1; i++) {

                          if (weka[i].productcode === weka.productcode) {

                          }
                        }

                        if (!found) {
                          //var _game = entry;
                        //var weka = JSON.parse(localStorage.getItem('jackpotBetSlip'));
                        var tstore = localStorage.getItem('jackpotBetSlip');
                          var _game = JSON.parse(tstore);

                          if ( typeof(tstore) !== "undefined" && tstore !== null ) {
                            _.forEach(data, function(value) {
                              console.log(value);
                            });

                            // _game.forEach(function(entry) {

                            //   var found = false;

                            //   var title = [];
                            //   var cart = [];
                            //   var obj = {};

                            //   //this.passit = 'blueish';
                            //   console.log('entryobject', entry);

                            // })
                          }else{
                            console.log('bad data');
                          }



                          //console.log('_GAME', _game);
                          var tstore1 = localStorage.getItem('tempstore');
                          console.log('_GAME', data);
                          //weka.push(_game);
                          weka.push(data);
                        }

                        localStorage.setItem('jackpotBetSlip', JSON.stringify(weka));
                  }
              },
              (error : any) =>
              {
                  loading.dismiss();
                  const toast = this.toastCtrl.create({
                      message: 'Warning Product not found ' ,
                      position: 'bottom',
                      duration: 2500
                  });
                  toast.present();
                  console.dir(error);
                  console.warn('response', JSON.stringify(error));
              });


          // swal("Oops!", "oh yea nigga!", "success");
          // loader.dismiss();
      }).catch(err => {
        loading.dismiss();
          //this.navCtrl.push('ScanPage');
          console.log('Error', err);
          const toast = this.toastCtrl.create({
            message: 'Bad Data Scanned.. ' ,
            position: 'bottom',
            duration: 3500
        });
        toast.present();
      });
  }

    static mydetails() {
        // swal("Yea!", "You have 23 products in your cart", "success");
    }

}
