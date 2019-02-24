import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public mycart: any;
  public count: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

    console.log('ionViewDidLoad DashboardPage');
    // var count = localStorage.getItem('jackpotBetSlip');
    // console.log('checkit', count);
    // //var newcount = JSON.parse(count);
    // // console.log('jackpotBetSlip length', JSON.parse(count));
    // this.cartcount = (!count == null)  ? JSON.parse(count).length : 'zero';

    var count = localStorage.getItem('jackpotBetSlip');
    // console.log('jackpotBetSlip length', JSON.parse(count));
    this.mycart = (!count == null)  ? JSON.parse(count) : 'No Items';
    this.count = (!count == null)  ? JSON.parse(count).length : 'zero';
  }

}
