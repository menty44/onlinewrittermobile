import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import swal from 'sweetalert';
import _ from 'lodash';
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
  public showdata: any;
  public sellprice: any;
  public items: any;
  public totalprice: any;

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
      this.totalprice = _.sumBy(fincount, function(o) { return Number(o.sellprice); });
      this.count = fincount.length;
    }else {
      this.mycart = 'No Items';
      this.count = 'Zero';
    }
  }

  deleteone(code) {

       swal( {
         title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover the Product!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal('Poof! Your Product has been deleted!', {
            icon: 'success',
          });

          var sellprice = [];

    console.log('delete one the object in the array');
    console.log('the index', code);

    var cart = JSON.parse(localStorage.getItem('jackpotBetSlip'));

    for (var i = 0; i <= cart.length - 1; i++) {

      if (cart[i].productcode === code) {
        var sp = cart.splice(i, 1);
        console.log('MYSPLICE', sp);

        localStorage.setItem('jackpotBetSlip', JSON.stringify(cart));

        this.showdata = cart; // refresh the cart
        console.log('deleted');

        localStorage.removeItem('productprice');
        this.sellprice = sellprice;
        this.loadCart();

        return;
      }
    }

    this.items.splice(code, 1);
        } else {
          swal('Your Product is Intact!');
        }
      });

    

  }


  deleteall(){
    console.log('delete all the objects in the array');
    var cart = [];
    var sellprice = [];

    if (cart.length == 0){

      // let alert = this.alertCtrl.create({
      //   title: 'No Product Found :(',
      //   subTitle: 'You Have Not Bought Any Product',
      //   buttons: ['OK']
      // });

      // alert.present();

      // swal({
      //   title: 'Are you sure?',
      //   text: 'Once deleted, you will not be able to recover the Product!',
      //   icon: 'warning',
      //   buttons: true,
      //   dangerMode: true,
      // })
      // .then((willDelete) => {
      //   if (willDelete) {
      //     swal('Poof! Your product has been deleted!', {
      //       icon: 'success',
      //     });
      //   } else {
      //     swal('Your Product is Intact!');
      //   }
      // });
      swal('No Product Found :(', 'You Have Not Bought Any Product', 'info');
      // this.vibration.vibrate(1000);
    }

    // localStorage.setItem('jackpotBetSlip', JSON.stringify(cart));
    this.showdata = cart; // refresh the cart
    // localStorage.removeItem('productprice');
    // this.sellprice = sellprice;
    this.mycart = [];
    this.count = 0;
    // this.loadCart();
    // localStorage.setItem('jackpotBetSlip', JSON.stringify(cart));
    console.log('deleted');

  }

  payout(){

    // var cart = localStorage.getItem('jackpotBetSlip');

    // console.log('pay for the product');

    // var count = JSON.parse(cart);

    // if(count !== 'null' && count !== null){


    //     if (count.length == 0){

    //       let alert = this.alertCtrl.create({
    //         title: 'No Product Found :(',
    //         subTitle: 'You Have to Buy A Product In Order To Pay',
    //         buttons: ['OK']
    //       });

    //       alert.present();

    //     }else {

    //       var price  = localStorage.getItem('sellprice');
    //       var mob  = localStorage.getItem('mobile');

    //       var mobs = mob.slice(2);

    //       var mobreplaced = "254"+mobs;

    //       var newString = mobreplaced.substr(0, mobreplaced.length-1);

    //       var finalnumber = JSON.parse(newString);

    //       console.log('mobreplaced', JSON.stringify(finalnumber));

    //       console.log('my price', price);

    //       var headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    //       //   options 	: any		= {
    //       //     "key" : "mpesa",
    //       //     "amount" : price,
    //       //     "mobile" : finalnumber
    //       // }

    //       url       : any      	= "http://127.0.0.1/shopper/requeststk.php?mobile="+finalnumber+"&amount="+price;

    //       this.http.get(url,  headers)
    //         .subscribe((data : any) =>{
    //           console.log('response1', data);
    //           console.log('response1', JSON.stringify(data));
    //         },
    //           (error : any) =>
    //           {
    //             console.log('myerror', error);
    //             console.log('myerrorstring', JSON.stringify(error));

    //           });
    //     }
    // }else {

    //   let alert = this.alertCtrl.create({
    //     title: 'No Product Found :(',
    //     subTitle: 'Do Some Shopping In Order To Pay',
    //     buttons: ['OK']
    //   });

    //   alert.present();
    //   // this.vibration.vibrate(1000);

    // }
  }

}
