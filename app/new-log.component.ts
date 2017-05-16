import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'new-log',
  template: `
  <h3>Add New Meal</h3>
    <table>
      <div>
        <input #newName placeholder="Meal">
      </div>
      <div>
        <input #newDate placeholder="Date">
      </div>
      <div>
        <input #newCalorie placeholder="Calorie count">
      </div>
      <div>
        <input #newDescription placeholder="Description/comments">
      </div>
    </table>
    <button (click)="
      addClicked(newName.value, newDate.value, newCalorie.value, newDescription.value);
      newName.value='';
      newDate.value='';
      newCalorie.value='';
      newDescription.value='';
    ">Add Log</button>
  `
})

export class NewLogComponent {
  @Output() newLogSender = new EventEmitter();
  addClicked(name: string, date: Date, calorie: number, description: string) {
    var newLogToAdd: Log = new Log(name, date, calorie, description);
    this.newLogSender.emit(newLogToAdd);
  }
}
