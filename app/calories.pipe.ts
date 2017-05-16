import { Pipe, PipeTransform } from '@angular/core';
import { Log } from './log.model';

@Pipe ({
  name: 'calories',
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Log[], calorieVerify) {
    var output = [];
    if (calorieVerify === "low calorie food") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calorie <= 500) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (calorieVerify === "high calorie food") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calorie > 500) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
