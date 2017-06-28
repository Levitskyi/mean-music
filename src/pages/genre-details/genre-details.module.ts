import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenreDetailsPage } from './genre-details';

@NgModule({
  declarations: [
    GenreDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GenreDetailsPage),
  ],
  exports: [
    GenreDetailsPage
  ]
})
export class GenreDetailsPageModule {}
