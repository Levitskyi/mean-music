import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output  } from '@angular/core';

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
  @Input() player;
  @Input() data;
  @Output() finished = new EventEmitter<any>();
  playing: boolean = false;
  currentTime: number = 0;
  singleValue: any;
  timeHolder: number;

  ngOnInit() {
  	this.initPlayer();
  }

  ngOnChanges(changes: SimpleChanges) {
  	if(changes.player) {
  		console.log(changes, 'changes');
  		this.player = changes.player.currentValue;
  		this.initPlayer();
  	}
    // changes.prop contains the old and the new value...
  }

  initPlayer() {
    this.player.play();
    this.playing = true;
    this.player.on('time', (time)=> {
		this.currentTime = this.player.currentTime();
		this.timeHolder = this.player.currentTime();
    })
    this.player.on('finish', (time)=> {
    	console.log();
		this.finished.emit();
    })
  }

  constructor() {
  }

  togglePlayer() {
    if(this.playing) {
      this.player.pause();
      this.playing = false;
    } else {
      this.playing = true;
      this.player.play();
    }
  }

  onRangeChange(event) {
  	if(event.value !== this.timeHolder) {
  		this.player.seek(event.value);
  	}
  }
}
