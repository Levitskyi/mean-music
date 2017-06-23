import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {ApiAiClient} from "api-ai-javascript";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

    // client
    //   .textRequest('Play Adele!')
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {/* do something here too */})
  }

}
