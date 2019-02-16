import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutoscanPage } from '../autoscan/autoscan';
import { ManualscanPage } from '../manualscan/manualscan';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  static ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  auto() {
    this.navCtrl.push('AutoscanPage');
}

  manual() {
    this.navCtrl.push('ManualscanPage');
}

}
