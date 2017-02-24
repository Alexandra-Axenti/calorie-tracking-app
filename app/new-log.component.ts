import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'new-log',
  template: `
  <h3>Add New Meal</h3>
    <table>
      <tbody>
        <tr colspan=2>
          <input #newNamet>
        </tr>
        <tr>
          <td id="time">
            <input #newDate>
          </td>
          <td id="calorie">
            <input #newCalorie>
          </td>
        </tr>
        <tr rowspan=2>
          <input #newDescription>
        </tr>
      </tbody>
    </table>
    <button (click)="
      addClicked(newName.value, newDate.value, newCalorie.value, newDescription.value);
      newName.value='';
      newDate.value='';
      newCalorie.value='';
      newDescription='';
    ">Add Log</button>
  `
})

export class NewLogComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name: string, date: Date, calorie: number, description: string) {
    var newLogToAdd: Log = new Log(name, date, calorie, description);
    this.newTaskSender.emit(newLogToAdd);
  }
}
