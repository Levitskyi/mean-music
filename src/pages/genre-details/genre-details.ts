import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as SC from 'soundcloud';
import { PlayerProvider } from '../../providers/player/player';

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
  showPlayer: boolean = false;
  // player: any;
  songData: any;
  itemSong: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public player: PlayerProvider) {
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

      let filteredList = response.collection.filter(elem => {
        return elem.track.duration > 30000;
      });
      this.musicList = filteredList;
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

  selectRateChart(rate) {
    this.kindOfTrendingMusic = rate.value;
    this.getPlaylist();
  }

  playTrack(item) {
    this.player.playTrack(item, this.musicList);
    // if(this.player) this.player.pause();
    // this.itemSong = item;
    // this.songData = {
    //   title: item.title,
    //   username: item.user.username,
    //   duration: item.duration,
    //   image: item.artwork_url || item.user.avatar_url
    // };
    // SC.stream('/tracks/'+ item.id).then((player) =>{
    //   player.on('finish', () => {
    //     this.playNext(item.id);
    //   });
    //   this.player = player;
    //   this.showPlayer = true;
    // });
  }

  playNext(id) {
    let index = this.musicList.findIndex((elem) => elem.track.id === id);
    if(index >= this.musicList.length - 1) {
      this.playTrack(this.musicList[0].track);
    } else {
      this.playTrack(this.musicList[index+1].track);
    }
  }

}
