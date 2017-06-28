import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenreDetailsPage } from '../genre-details/genre-details';

interface Genre {
  data: string;
  title: string;
}

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
  genres: Genre[] = [
    { data:'soundcloud:genres:all-music', title: 'Trending music'},
    { data:'soundcloud:genres:all-audio', title: 'Trending audio'},
    { data:'soundcloud:genres:alternativerock', title: 'Alternative Rock'},
    { data:'soundcloud:genres:ambient', title: 'Ambient'},
    { data:'soundcloud:genres:classical', title: 'Classical'},
    { data:'soundcloud:genres:country', title: 'Country'},
    { data:'soundcloud:genres:danceedm', title: 'Dance & EDM'},
    { data:'soundcloud:genres:dancehall', title: 'Dancehall'},
    { data:'soundcloud:genres:deephouse', title: 'Deep House'},
    { data:'soundcloud:genres:disco', title: 'Disco'},
    { data:'soundcloud:genres:drumbass', title: 'Drum & Bass'},
    { data:'soundcloud:genres:dubstep', title: 'Dubstep'},
    { data:'soundcloud:genres:electronic', title: 'Electronic'},
    { data:'soundcloud:genres:folksingersongwriter', title: 'Folk & Singer-Songwriter'},
    { data:'soundcloud:genres:hiphoprap', title: 'Hip Hop & Rap'},
    { data:'soundcloud:genres:house', title: 'House'},
    { data:'soundcloud:genres:indie', title: 'Indie'},
    { data:'soundcloud:genres:jazzblues', title: 'Jazz & Blues'},
    { data:'soundcloud:genres:latin', title: 'Latin'},
    { data:'soundcloud:genres:metal', title: 'Metal'},
    { data:'soundcloud:genres:piano', title: 'Piano'},
    { data:'soundcloud:genres:pop', title: 'Pop'},
    { data:'soundcloud:genres:rbsoul', title: 'R&B & Soul'},
    { data:'soundcloud:genres:reggae', title: 'Reggae'},
    { data:'soundcloud:genres:reggaeton', title: 'Reggaeton'},
    { data:'soundcloud:genres:rock', title: 'Rock'},
    { data:'soundcloud:genres:soundtrack', title: 'Soundtrack'},
    { data:'soundcloud:genres:techno', title: 'Techno'},
    { data:'soundcloud:genres:trance', title: 'Trance'},
    { data:'soundcloud:genres:trap', title: 'Trap'},
    { data:'soundcloud:genres:triphop', title: 'Trip Hop'},
    { data:'soundcloud:genres:world', title: 'World'},
    { data:'soundcloud:genres:audiobooks', title: 'Audiobooks'},
    { data:'soundcloud:genres:business', title: 'Business'},
    { data:'soundcloud:genres:comedy', title: 'Comedy'},
    { data:'soundcloud:genres:entertainment', title: 'Entertainment'},
    { data:'soundcloud:genres:learning', title: 'Learning'},
    { data:'soundcloud:genres:newspolitics', title: 'News & Politics'},
    { data:'soundcloud:genres:religionspirituality', title: 'Religion & Spirituality'},
    { data:'soundcloud:genres:science', title: 'Science'},
    { data:'soundcloud:genres:sports', title: 'Sports'},
    { data:'soundcloud:genres:storytelling', title: 'Storytelling'},
    { data:'soundcloud:genres:technology', title: 'Technology'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

  goToSoundList(item: Genre) {
    this.navCtrl.push(GenreDetailsPage, {
      data: item
    });
  }

}
