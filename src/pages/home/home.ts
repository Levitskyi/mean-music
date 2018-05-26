import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { NavController } from 'ionic-angular';
import * as SC from 'soundcloud';
import * as SCWidget from 'soundcloud-widget';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lastFmDetail: any = '2ee2ac2a0023ee9fff1f809a1ced06e2';

  musicList: any;
  // clientId: string = '2t9loNQH90kzJcsFCODdigxfp325aq4z';
  clientId: string = '2t9loNQH90kzJcsFCODdigxfp325aq4z';
  constructor(public navCtrl: NavController, public http: Http) {
    SC.initialize({
      client_id: this.clientId
    });

    // SC.get('/charts', {
    //   limit: 30,
    //   genre: 'soundcloud',
    //   kind: 'top',
    //   linked_partitioning: 1
    // }).then(res => {
    //   this.musicList = res.collection;
    //   console.log(res.collection);
    //   // this.http.get(res.next_href)
    //   //   .map((res:Response) => res.json()).subscribe(response => {
    //   //     this.musicList.concat(response.collection);
    //   //   console.log(this.musicList);
    //   // });
    // })

    let response_url = 'https://api.soundcloud.com/charts';
    let params: URLSearchParams = new URLSearchParams();
    params.set('kind', 'top');
    params.set('genre', 'soundcloud:genres:all-music');
    params.set('limit', '30');
    params.set('linked_partitioning', '1');
    params.set('client_id', this.clientId);

    this.http.get(response_url, {search:params})
      .map((res) => res.json()).subscribe(response => {
        this.musicList = response.collection;
    });
  }

  getItems(event) {
    let response_url = 'https://api.soundcloud.com/charts';
    let params: URLSearchParams = new URLSearchParams();
    params.set('kind', 'top');
    params.set('genre', 'soundcloud:genres:all-music');
    params.set('limit', '30');
    params.set('linked_partitioning', '1');
    params.set('client_id', this.clientId);

    this.http.get(response_url, {search:params})
      .map((res) => res.json()).subscribe(response => {
      this.musicList = response.collection;
    });


  }

  playMusic(item) {
    SC.oEmbed(item.uri, {auto_play: true, maxheight: 166, iframe:false}).then(response => {
      document.getElementById('target').innerHTML = response.html;

      var iframeElement   = document.querySelector('iframe');
      var widget1 = new SCWidget(iframeElement);
      widget1.play();


      widget1.on(SCWidget.events.FINISH, () => {
        // code to run when player finish to play
        let index = this.musicList.findIndex(elem => elem.track.id === item.id);

        console.log(this.musicList[index+1]);
        this.playMusic(this.musicList[index+1].track);
      })
    });
  }

  pausePlayer() {

    var iframeElement   = document.querySelector('iframe');
    var widget1 = new SCWidget(iframeElement);
    widget1.play();
    console.log(SCWidget);

  }

}
