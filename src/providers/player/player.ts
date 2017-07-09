import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import * as SC from 'soundcloud';

/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlayerProvider {
  clientId: string = '2t9loNQH90kzJcsFCODdigxfp325aq4z';
  trackList: object[] = [];
  track: any;
  // Observable string sources
  private playerSubject = new Subject<string>();
  playerConfirmed$ = this.playerSubject.asObservable();

  constructor(public http: Http) {
    SC.initialize({
      client_id: this.clientId
    });
  }


  playTrack(item, trackList) {
	this.track = item;
	this.trackList = trackList;
	this.playerSubject.next(item);
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
    // });
  }

}
