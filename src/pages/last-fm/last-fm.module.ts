import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastFmPage } from './last-fm';

@NgModule({
  declarations: [
    LastFmPage,
  ],
  imports: [
    IonicPageModule.forChild(LastFmPage),
  ],
  exports: [
    LastFmPage
  ]
})
export class LastFmPageModule {}
