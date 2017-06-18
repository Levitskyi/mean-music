import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RockPage } from './rock';

@NgModule({
  declarations: [
    RockPage,
  ],
  imports: [
    IonicPageModule.forChild(RockPage),
  ],
  exports: [
    RockPage
  ]
})
export class RockPageModule {}
