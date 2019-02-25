import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

// import { Vibration } from '@ionic-native/vibration';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  public firstname: any;
  public lastname: any;
  public gender: any;
  public mobileno: any;
  public email: any;
  public password: any;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    // private vibration: Vibration,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      // Vibrate 2 seconds
      // Pause for 1 second
      // Vibrate for 2 seconds
      // Patterns work on Android and Windows only
      // this.vibration.vibrate([2000,1000,2000]);
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  register() {
    const firstname = this.firstname;
    const lastname = this.lastname;
    const gender = this.gender;
    const mobileno = this.mobileno;
    const email = this.email;
    const password = this.password;

    console.log(firstname);
    console.log(lastname);
    console.log(gender);
    console.log(mobileno);
    console.log(email);
    console.log(password);
    
    // Vibrate 2 seconds
    // Pause for 1 second
    // Vibrate for 2 seconds
    // Patterns work on Android and Windows only
    // this.vibration.vibrate([2000,1000,2000]);
    this.navCtrl.push(MainPage);
  }
}
