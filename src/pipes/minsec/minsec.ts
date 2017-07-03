import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MinsecPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'minsec',
})
export class MinsecPipe implements PipeTransform {
  /**
   * Takes a miliseconds and makes it to mm:ss.
   */
  transform(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = +((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}
