import { Pipe, PipeTransform } from '@angular/core';
import { Log } from './log.model';

@Pipe ({
  name: 'timing',
  pure: false
})

export class TimingPipe implements PipeTransform {
  transform(input: Log[], calorieVerify) {
    var output = [];
    if (calorieVerify === "today") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].date = Date.now('2017-02-24')) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (calorieVerify === "future") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].date > Date.now('2017-02-24')) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
