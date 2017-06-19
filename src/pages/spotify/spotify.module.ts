import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpotifyPage } from './spotify';

@NgModule({
  declarations: [
    SpotifyPage,
  ],
  imports: [
    IonicPageModule.forChild(SpotifyPage),
  ],
  exports: [
    SpotifyPage
  ]
})
export class SpotifyPageModule {}
