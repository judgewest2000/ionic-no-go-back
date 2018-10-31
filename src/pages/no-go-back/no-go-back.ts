import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

/**
 * Generated class for the NoGoBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-no-go-back',
  templateUrl: 'no-go-back.html',
})
export class NoGoBackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private navBar: Navbar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoGoBackPage');

    this.navBar.backButtonClick = () =>{
      return false;
    }
    
  }

}
