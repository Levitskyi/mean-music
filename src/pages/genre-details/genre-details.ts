import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GenreDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-genre-details',
  templateUrl: 'genre-details.html',
})
export class GenreDetailsPage {
  genre: any;
  clientId: string = '2t9loNQH90kzJcsFCODdigxfp325aq4z';
  musicList: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {
  }

  ionViewDidLoad() {
    this.genre = this.navParams.get('data');

    let response_url = 'https://api-v2.soundcloud.com/charts';
    let params: URLSearchParams = new URLSearchParams();
    params.set('kind', 'top');
    params.set('genre', this.genre.data);
    params.set('limit', '50');
    params.set('linked_partitioning', '1');
    params.set('client_id', this.clientId);

    this.http.get(response_url, {search:params})
      .map((res) => res.json()).subscribe(response => {
        console.log(response);
        this.musicList = response.collection;
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
