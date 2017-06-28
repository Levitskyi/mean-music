import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PlayerComponent } from './player';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerComponentModule {}
