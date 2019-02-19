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
// import { HTTP } from '@ionic-native/http';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators/map";
import swal from 'sweetalert';

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
    public translateService: TranslateService, public http: HttpClient) {

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
      // const email = this.email;
      // const password = this.password;
      // this.http.get('http://192.168.1.101:8080/login?', {'email': email, 'password': password},
      //     {'Content-Type': 'application/x-www-form-urlencoded'})
      //     .then(data => {
      //
      //         console.log(data.status);
      //         console.log(data.data); // data received by server
      //         console.log(data.headers);
      //
      //     })
      //     .catch(error => {
      //
      //         console.log(error.status);
      //         console.log(error.error); // error message as string
      //         console.log(error.headers);
      //
      //     });
  }

  loginthree() {
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
                      this.navCtrl.push(MainPage);
                  }else {
                      swal('Warning', 'Incorrect Credentials', 'error');
                  }
              },
              (error : any) =>
              {
                  swal('Warning', 'Incorrect Credentials', 'error');
                  console.dir(error);
                  console.warn('response', JSON.stringify(error));
              });
  }

}
