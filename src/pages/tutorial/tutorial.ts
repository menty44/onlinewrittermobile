import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {ContentPage} from "../content/content";
import {LoginPage} from "../login/login";
// import {LoaderPage} from "../loader/loader";
// import { SignupPage } from "../signup/signup";

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';
  public checkfred  : any;

  constructor( public navCtrl: NavController,
              public menu: MenuController, translate: TranslateService,
              public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/logo1.png',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/12.jpg',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/3.gif',
          }
        ];
      });
  }

  ionViewDidLoad() {

    // // const loader = this.loadingCtrl.create({
    // //   content: "Please wait...",
    // //   duration: 3000
    // // });
    // // loader.present();
    //
    // this.checkfred = 'cool';
    //
    // if(this.checkfred === 'cool'){
    //
    //     // loader.dismissAll();
    //   this.navCtrl.push(LoginPage);
    //
    // }else{
    //     // loader.dismissAll();
    //   this.navCtrl.setRoot('WelcomePage', {}, {
    //     animate: true,
    //     direction: 'forward'
    //   });
    // }

  }


  startApp() {

    // if(this.checkfreds === 'cool'){
    //
    //   this.navCtrl.push(LoginPage);
    // }else{
      this.navCtrl.setRoot('WelcomePage', {}, {
        animate: true,
        direction: 'forward'
      });
    // }

  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
