import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as SC from 'soundcloud';

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
  topRate: string = 'top';
  kindOfTrendingMusic: string = this.topRate;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http) {
  }

  ionViewDidLoad() {
    SC.initialize({
      client_id: this.clientId
    });
    this.genre = this.navParams.get('data');
    this.getPlaylist();
  }

  getPlaylist(){
    let response_url = 'https://api-v2.soundcloud.com/charts';
    let params: URLSearchParams = new URLSearchParams();
    params.set('kind', this.kindOfTrendingMusic);
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

  selectRateChart(rate) {
    console.log(rate);
    this.kindOfTrendingMusic = rate.value;
    this.getPlaylist();
  }

  playTrack(item) {
    console.log(item);

    SC.stream('/tracks/'+ item.id).then(function(player){
      console.log(player);
      player.play();
      player.on('time', (time) => {
        console.log(player.currentTime());
      });
    });
  }

}
