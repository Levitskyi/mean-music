import { Component, OnInit, SimpleChanges, OnChanges  } from '@angular/core';

import { PlayerProvider } from '../../providers/player/player';
/**
 * Generated class for the PlayerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent implements OnInit, OnChanges  {
  // @Input() player;
  // @Input() data;
  // @Output() finished = new EventEmitter<any>();
  playing: boolean = false;
  currentTime: number = 0;
  timeHolder: number;
  track: any;
  showPlayer: boolean = false;

  constructor(public playerService: PlayerProvider) {
  	playerService.playerConfirmed$.subscribe(item => {
  		this.track = item;
  		this.showPlayer = true;
  		this.playing = true;
  	});

  }


  ngOnInit() {
  	this.playerService.timerConfirmed$.subscribe(item => {
  		this.currentTime = item;
  		this.timeHolder = item;
  		console.log(item);
  	});
  	// this.initPlayer();
  }

  togglePlayer() {
    if(this.playing) {
  		this.playerService.pauseTrack();
      this.playing = false;
    } else {
      this.playing = true;
  		this.playerService.playTrack();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  	if(changes.player) {
  		// this.player = null;
  		// this.player = changes.player.currentValue;
  		// this.initPlayer();
  	}
  }

  // initPlayer() {
  //   this.player.play();
  //   this.playing = true;
  //   this.player.on('time', ()=> {
		// this.currentTime = this.player.currentTime();
		// this.timeHolder = this.player.currentTime();
  //   });
  //   this.player.on('finish', ()=> {
  //     console.log('finished');
		//   // this.finished.emit();
  //   })
  // }

  // togglePlayer() {
  //   if(this.playing) {
  //     this.player.pause();
  //     this.playing = false;
  //   } else {
  //     this.playing = true;
  //     this.player.play();
  //   }
  // }

  onRangeChange(event) {
  	if(event.value !== this.timeHolder) {
  		console.log('changed range');
  		// this.player.seek(event.value);
  	}
  }
}
