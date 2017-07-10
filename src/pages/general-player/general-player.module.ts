import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralPlayerPage } from './general-player';

@NgModule({
  declarations: [
    GeneralPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralPlayerPage),
  ],
  exports: [
    GeneralPlayerPage
  ]
})
export class GeneralPlayerPageModule {}
