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
  player: any;
  // Observable string sources
  private playerSubject = new Subject<string>();
  playerConfirmed$ = this.playerSubject.asObservable();
  private timerSubject = new Subject<number>();
  timerConfirmed$ = this.timerSubject.asObservable();

  constructor(public http: Http) {
    SC.initialize({
      client_id: this.clientId
    });
  }

  initPlayer(item, trackList) {
	this.track = item;
	this.trackList = trackList;
    SC.stream('/tracks/'+ item.id).then((player) =>{
   	  this.player = player;
	  this.playerSubject.next(item);
	  this.playTrack();
	  this.timeChange();
      player.on('finish', () => {
      	console.log('finished play');
      });
    });
  }

  timeChange() {
  	this.player.on('time', ()=> {
  		this.timerSubject.next(this.player.currentTime());
    });
  }

  playTrack() {
  	this.player.play();
  }

  pauseTrack() {
  	this.player.pause();
  }

}
