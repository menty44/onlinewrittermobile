import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoadingController } from 'ionic-angular';
import swal from 'sweetalert';


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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              public loadingCtrl: LoadingController) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad ManualscanPage');
  }

  searchProd() {
      const manualcode = this.manualcode;
      console.log("my searchProd" + manualcode);

      // this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data', JSON.stringify(manualcode));
          this.enteredcode = manualcode;
          swal("Oops!", "oh yea nigga!" + JSON.stringify(manualcode), "success");
          this.manualresults = manualcode;
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
