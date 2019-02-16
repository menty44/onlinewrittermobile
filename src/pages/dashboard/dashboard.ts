import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

import { ScanPage } from '../scan/scan';
import { ProfilePage } from '../profile/profile';
import { ReportsPage } from '../reports/reports';
import { CartPage } from '../cart/cart';
import { ComplainPage } from '../complain/complain';
import { PaymentPage } from '../payment/payment';

import swal from 'sweetalert';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  pushScan () {
      this.navCtrl.push('ScanPage');
  }

  pushCart () {
      this.navCtrl.push('CartPage');
  }

  pushPayment () {
      this.navCtrl.push('PaymentPage');
  }

  pushReports () {
      this.navCtrl.push('ReportsPage');
  }

  pushProfile () {
      this.navCtrl.push('ProfilePage');
  }

  static pushContactus () {
      // this.navCtrl.push('ComplainPage');
      swal("Email or WhatsApp us !", "menty44@gmail.com | 0720106420", "success");
  }

}
