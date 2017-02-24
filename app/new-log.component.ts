import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'new-log',
  template: `
  <h3>Add New Meal</h3>
  <div>
    <tr>
      <input #newName>Name</input>
    </tr>
    <tr>
      <tc>
        <tr id="time">
          <input #newDate>Date</input>
        </tr>
        <tr id="calorie">
          <input #newCalorie>Calories</input>
        </tr>
      </tc>
      <tc>
        <input #newDescription>Description</input>
      </tc>
    </tr>
    <button (click)="
      addClicked(newName.value, newDate.value, newCalorie.value, newDescription.value);
      newName.value='';
      newDate.value='';
      newCalorie.value='';
      newDescription='';
    ">Submit</button>
  <div>
  `
})

export class NewLogComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(name: string, date: number, calorie: number, description: string) {
    var newLogToAdd: Log = new Log(name, date, calorie, description);
    this.newTaskSender.emit(newLogToAdd);
  }
}
