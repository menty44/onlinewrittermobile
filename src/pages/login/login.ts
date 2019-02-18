import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { DashboardPage }  from '../dashboard/dashboard';

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import {LoaderPage} from "../loader/loader";
import axios from 'axios';
import { HTTP } from '@ionic-native/http';
import {map} from "rxjs/operators/map";

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
    public toastCtrl: ToastController,
    public translateService: TranslateService, private http: HTTP) {

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
    // const email = this.email;
    // const password = this.password;
    //
    //   console.log('my email' + JSON.stringify(email));
    //   console.log('my password' + JSON.stringify(password));
    //
    //   // Make a request for a user login
    //   axios.get('192.168.1.101:8080/login?', {'email': email, 'password': password})
    //       .then(response => {
    //           console.log('freddy', JSON.stringify(response.data));
    //           console.log('freddy', response.data.activated);
    //           localStorage.setItem('profile', JSON.stringify(response.data));
    //           this.oluoch = response.data;
    //           this.navCtrl.push("DashboardPage");
    //       })
    //       .catch(error => {
    //           console.log(error);
    //       });

  }

  logintwo() {
      const email = this.email;
      const password = this.password;
      this.http.get('http://192.168.1.101:8080/login?', {'email': email, 'password': password},
          {'Content-Type': 'application/x-www-form-urlencoded'})
          .then(data => {

              console.log(data.status);
              console.log(data.data); // data received by server
              console.log(data.headers);

          })
          .catch(error => {

              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);

          });
  }

}
