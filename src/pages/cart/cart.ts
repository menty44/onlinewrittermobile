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
    this.loadCart();
  }

  loadCart() {
    var count = localStorage.getItem('jackpotBetSlip');
    console.log('checkit', count);
    var fincount = JSON.parse(count);
    console.log('checkit fincount', fincount);
    console.log('checkit fincount length', fincount.length);
    // console.log('jackpotBetSlip length', JSON.parse(count));()
    if(fincount.length >= 1) {
      console.log('checkit am inside mehn', fincount);
      this.mycart = fincount;
      this.count = fincount.length;
    }else {
      this.mycart = 'No Items';
      this.count = 'Zero';
    }
  }

}
