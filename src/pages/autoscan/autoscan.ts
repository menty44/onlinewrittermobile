import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoadingController } from 'ionic-angular';
import swal from 'sweetalert';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              public loadingCtrl: LoadingController) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad AutoscanPage');
  }

  scanProd() {
      // const loader = this.loadingCtrl.create({
      //     content: "Please wait...",
      //     duration: 3000
      // });
      // loader.present();
      this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data', JSON.stringify(barcodeData));
          this.results = barcodeData;
          swal("Oops!", "oh yea nigga!", "success");
          // loader.dismiss();
      }).catch(err => {
          this.navCtrl.push('ScanPage');
          console.log('Error', err);
      });
  }

    static mydetails() {
        swal("Yea!", "You have 23 products in your cart", "success");
    }

}
