import { Component, OnInit, SimpleChanges, OnChanges, ChangeDetectorRef, Output, EventEmitter  } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PlayerProvider } from '../../providers/player/player';
import { GeneralPlayerPage } from '../../pages/general-player/general-player';
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
  @Output() showPLayer = new EventEmitter<any>();
  playerIsVisible: boolean = false;
  playing: boolean = false;
  currentTime: number = 0;
  timeHolder: number;
  track: any;

  constructor(
    public playerService: PlayerProvider,
    public changeDetector: ChangeDetectorRef,
    public modalCtrl: ModalController,
  ) {
  	playerService.playerConfirmed$.subscribe(item => {
  		this.track = item;
  		this.showPLayer.emit(true);
  		this.playerIsVisible = true;
  		this.playing = true;
  	});

    this.playerService.timerConfirmed$.subscribe(item => {
      this.currentTime = item;
      this.timeHolder = item;
      this.changeDetector.detectChanges();
    });

  }


  ngOnInit() {
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

  openGeneralPlayer() {
    let modal = this.modalCtrl.create(GeneralPlayerPage, {data:'somedata object'});
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      console.log(data);
    });
  }

  onRangeChange(event) {
  	if(event.value !== this.timeHolder) {
  	  this.playerService.setTime(event.value);
  		console.log('changed range');
  	}
  }
}
