import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import * as SC from 'soundcloud';
/**
 * Generated class for the RockPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rock',
  templateUrl: 'rock.html',
})
export class RockPage {
  musicList: any;
  clientId: string = '2t9loNQH90kzJcsFCODdigxfp325aq4z';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RockPage');

    let response_url = 'https://api-v2.soundcloud.com/charts';
    let params: URLSearchParams = new URLSearchParams();
    params.set('kind', 'top');
    params.set('genre', 'soundcloud:genres:rock');
    params.set('limit', '30');
    params.set('linked_partitioning', '1');
    params.set('client_id', this.clientId);

    this.http.get(response_url, {search:params})
      .map((res) => res.json()).subscribe(response => {
      this.musicList = response.collection;
      console.log(response);
    });
  }

}
