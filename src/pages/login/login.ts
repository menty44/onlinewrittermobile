import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { DashboardPage }  from '../dashboard/dashboard';
// import { ToastController } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {LoaderPage} from "../loader/loader";

import axios from 'axios';
// import { HTTP } from '@ionic-native/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators/map";

// import { Vibration } from '@ionic-native/vibration';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public email: any;
  public password: any;
  public oluoch: any;
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
                public user: User,
                public translateService: TranslateService,
                public http: HttpClient,
                public toastCtrl: ToastController,
                // private vibration: Vibration,
                public loadingCtrl : LoadingController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  login() {
  }

  logintwo() {
  }

  loginthree() {
      var loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: 'Authentication Account ...'
      });

      loading.present();

      const email = this.email;
      const password = this.password;
      const headers : any = new HttpHeaders({'Content-Type': 'application/json'}),
          options   : any = {'email': email, 'password': password},

          url: any = 'http://192.168.1.15:8080/login?';

      console.warn('test', JSON.stringify(options));
      console.warn('test', JSON.stringify(url));

      // this.http.post(url, options, headers)
      //     .subscribe((data: any) => {
      //
      //         console.log('data response from the server', data);
      //       })

      this.http
          .get('http://192.168.1.15:8080/login?email=' + email + '&password=' + password)
          .subscribe((data : any) =>
              {
                  console.log(data);
                  console.warn('response', JSON.stringify(data));
                  console.warn('response', data.ok);
                  localStorage.setItem('profile', JSON.stringify(data));
                  if(data.ok === '00') {
                      //this.oluoch = response.data;
                      // this.navCtrl.push('DashboardPage');

                      // Vibrate 2 seconds
                      // Pause for 1 second
                      // Vibrate for 2 seconds
                      // Patterns work on Android and Windows only
                      // this.vibration.vibrate([2000,1000,2000]);

                      loading.dismiss();
                      const toast = this.toastCtrl.create({
                          message: 'Success ' ,
                          position: 'middle',
                          duration: 3500
                      });
                      toast.present();
                      this.navCtrl.push(MainPage);
                  }else {
                      const toast = this.toastCtrl.create({
                          message: 'Warning ' ,
                          position: 'Incorrect Credentials',
                          duration: 3500
                      });
                      toast.present();
                      loading.dismiss();
                  }
              },
              (error : any) =>
              {
                  const toast = this.toastCtrl.create({
                      message: 'Warning ' ,
                      position: 'Incorrect Credentials',
                      duration: 3500
                  });
                  toast.present();
                  loading.dismiss();
                  console.dir(error);
                  console.warn('response', JSON.stringify(error));
              });
  }

}
