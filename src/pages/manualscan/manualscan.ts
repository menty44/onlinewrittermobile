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
    var loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Searching Product ...'
  });
  loading.present();
      const manualcode = this.manualcode;
      console.log("my searchProd" + manualcode);

          // this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data', JSON.stringify(manualcode));
          //this.enteredcode = manualcode;

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
                      
                      //const strdata = data;
                      // const findata = JSON.parse(data);
                      this.oluoch = data;
                      // this.manualresults = findata;
                      loading.dismiss();
                      // const toast = this.toastCtrl.create({
                      //     message: 'Success ' ,
                      //     position: 'bottom',
                      //     duration: 500
                      // });
                      // toast.present();
                      //this.kuku = 'mmmh';
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

          // swal("Oops!", "oh yea nigga!" + JSON.stringify(manualcode), "success");
          
          // loader.dismiss();
      // }).catch(err => {
      //     this.navCtrl.push('ScanPage');
      //     console.log('Error', err);
      // });

  }

    static mydetailsmanual() {
        swal("Yea!", "You have 2 products in your cart", "success");
    }

}
