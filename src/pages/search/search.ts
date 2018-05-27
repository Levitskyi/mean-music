import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, URLSearchParams } from '@angular/http';
import * as SC from 'soundcloud';
// import * as SCWidget from 'soundcloud-widget';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 enum SearchType {
   Input,
   Speach
 }

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  musicList: any;
  musicListSearched: any =[];
  recognition: any;
  recognitionText: string;
  searchType = SearchType;

  clientId: string = '3ROp2mRheCyiOebUBZUvtAlcBpNyt6c5';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private changeDetectorRef: ChangeDetectorRef,
    public http: Http) {
    SC.initialize({
      client_id: this.clientId
    });
  }

  ionViewDidLoad() {
     const {webkitSpeechRecognition} : IWindow = <IWindow>window;
    this.recognition = new webkitSpeechRecognition();


    // let response_url = 'https://api-v2.soundcloud.com/charts';
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('kind', 'top');
    // params.set('genre', 'soundcloud:genres:all-music');
    // params.set('limit', '50');
    // params.set('linked_partitioning', '1');
    // params.set('client_id', this.clientId);

    // this.http.get(response_url, {search:params})
    //   .map((res) => res.json()).subscribe(response => {
    //     console.log(response);
    //   this.musicList = response.collection;
    // });
  }

  getItems(event, type: SearchType) {
    console.log(event);
    if (type === SearchType.Input) {
      if(!event.target.value) {
        this.musicListSearched = [];
      } else {
        SC.get('/tracks', {
          q: event.target.value,
          limit: 50,
          linked_partitioning: 1
        }).then(res => {
          this.musicListSearched = res.collection;
        })
      }
    } else if (type === SearchType.Speach) {
        SC.get('/tracks', {
          q: event,
          limit: 50,
          linked_partitioning: 1
        }).then(res => {
          console.log('dfgdfg');
          this.musicListSearched = res.collection;

    this.changeDetectorRef.detectChanges();
        })
    }
  }

  intToString(value) {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0) {
      // var shortNum = shortValue.toFixed(1);
    }
    return shortValue+suffixes[suffixNum];
  }

  selectItem(item) {
    SC.stream('/tracks/'+ item.id).then(function(player){
      console.log(player);
      player.play();
      // setTimeout(()=> {
      //   player.pause();
      // }, 4000);
    });


    // SC.get('/tracks/' + item.id).then(res => {
    //   console.log(res);
    //   // setTimeout(() => {
    //   //   file.pause();
    //   // }, 10000);
    //   // this.streamingMedia.playAudio(res.stream_url + '?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z', options);
    // })
  }

  startRecognition(ev) {
    this.recognition.onstart = (event) => {
      console.log(event, 'start');
    };
    this.recognition.onresult = (event) => {
        var text = "";
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
          }
          this.recognitionText = text;
          this.changeDetectorRef.detectChanges();
          this.getItems(text, this.searchType.Speach)
          console.log(text, '<<<<<<<<<-----it will be here');
      };

    this.recognition.lang = "uk-UK";
    this.recognition.start();
    this.recognition.onend = () => {
      this.recognition.stop();
    };
  }

}
