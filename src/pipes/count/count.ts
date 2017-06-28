import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CountPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'count',
})
export class CountPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    // if (shortValue % 1 != 0) {
    //   var shortNum = shortValue.toFixed(1);
    // }
    return shortValue+suffixes[suffixNum];
  }
}
