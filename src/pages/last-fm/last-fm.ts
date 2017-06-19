import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';

// import * as lastFm from 'lastfmapi';

/**
 * Generated class for the LastFmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-last-fm',
  templateUrl: 'last-fm.html',
})
export class LastFmPage {
  lastFmDetail: any = '2ee2ac2a0023ee9fff1f809a1ced06e2';
lfm: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.lfm = {
      'api_key' : '2ee2ac2a0023ee9fff1f809a1ced06e2',
      'secret' : 'c9b3c3aa4baee284ffa8b59936637278'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LastFmPage');
    // this.lfm.track.getInfo({
    //   'artist' : 'Poliça',
    //   'track' : 'Wandering Star'
    // }, (track) => {
    //   console.log(track)
    // });

    this.http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&track=Adele&api_key=2ee2ac2a0023ee9fff1f809a1ced06e2&limit=10&format=json').map(res => res.json()).subscribe(data => {
        console.log(data);
    });
  }

}
