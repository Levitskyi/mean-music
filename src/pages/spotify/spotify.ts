import { Component } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var Buffer: any;
/**
 * Generated class for the SpotifyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
}
@IonicPage()
@Component({
  selector: 'page-spotify',
  templateUrl: 'spotify.html',
})
export class SpotifyPage {
  client_id: string = '99ea746b3e0f42ca83ba39b854174d7e';
  client_secret: string = '3c3cca8b1476420782d91386a0823467';

  token: string;
  token_type: string;

  musicList: any;

  embedUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      (new Buffer(this.client_id + ':' + this.client_secret).toString('base64')));
  }

  ionViewDidLoad() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let headers = new Headers();

    this.createAuthorizationHeader(headers);

    this.http.post('https://accounts.spotify.com/api/token', params, {headers: headers})
      .map((res:Response) => res.json()).subscribe((data:Token) => {
        this.token = data.access_token;
        this.token_type = data.token_type;
        console.log(this.token);
    });
  }

  getItems(event) {
    let query = event.target.value;

    if(query.length > 2) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('q', query);
      params.set('type', 'track');
      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + this.token);

      this.http.get('https://api.spotify.com/v1/search',{
        search: params,
        headers: headers
      })
        .map((res:Response) => res.json()).subscribe((data) => {
        this.musicList = data.tracks.items;
        console.log(this.musicList);
      });
    }
  };

  playMusic(item, event) {
    console.log(item);

    let uri = 'https://open.spotify.com/embed?uri=' + item.uri;
    document.querySelector('iframe').src = uri;
  }

}
