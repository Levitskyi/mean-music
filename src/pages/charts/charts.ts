import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChartsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
  genres: string[] = [
    'soundcloud:genres:all-music',
    'soundcloud:genres:all-audio',
    'soundcloud:genres:alternativerock',
    'soundcloud:genres:ambient',
    'soundcloud:genres:classical',
    'soundcloud:genres:country',
    'soundcloud:genres:danceedm',
    'soundcloud:genres:dancehall',
    'soundcloud:genres:deephouse',
    'soundcloud:genres:disco',
    'soundcloud:genres:drumbass',
    'soundcloud:genres:dubstep',
    'soundcloud:genres:electronic',
    'soundcloud:genres:folksingersongwriter',
    'soundcloud:genres:hiphoprap',
    'soundcloud:genres:house',
    'soundcloud:genres:indie',
    'soundcloud:genres:jazzblues',
    'soundcloud:genres:latin',
    'soundcloud:genres:metal',
    'soundcloud:genres:piano',
    'soundcloud:genres:pop',
    'soundcloud:genres:rbsoul',
    'soundcloud:genres:reggae',
    'soundcloud:genres:reggaeton',
    'soundcloud:genres:rock',
    'soundcloud:genres:soundtrack',
    'soundcloud:genres:techno',
    'soundcloud:genres:trance',
    'soundcloud:genres:trap',
    'soundcloud:genres:triphop',
    'soundcloud:genres:world',
    'soundcloud:genres:audiobooks',
    'soundcloud:genres:business',
    'soundcloud:genres:comedy',
    'soundcloud:genres:entertainment',
    'soundcloud:genres:learning',
    'soundcloud:genres:newspolitics',
    'soundcloud:genres:religionspirituality',
    'soundcloud:genres:science',
    'soundcloud:genres:sports',
    'soundcloud:genres:storytelling',
    'soundcloud:genres:technology'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

}
