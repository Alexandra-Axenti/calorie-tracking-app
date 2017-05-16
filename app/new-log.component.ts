import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'new-log',
  template: `
    <br>
    <h4>New Log</h4>
    <table class="add-log logs-list">
      <div class="col-md-2 form-item"><input class="form-control form-item input-form" #newName placeholder="Meal"></div>
      <div class="col-md-2 form-item"><input class="form-control form-item input-form" type="date" #newDate placeholder="Date"></div>
      <div class="col-md-1 form-item"><input class="form-control form-item input-form" #newCalorie placeholder="Calorie count"></div>
      <div class="col-md-3 form-item"><textarea id="new-log-textarea" class="form-control form-item" #newDescription placeholder="Description/comments"></textarea></div>
      <div class="col-md-2 form-item"><button class="btn btn-primary" (click)="
        addClicked(newName.value, newDate.value, newCalorie.value, newDescription.value);
        newName.value='';
        newDate.value = '';
        newCalorie.value='';
        newDescription.value='';
      ">Add Log</button></div>
    </table>
  `
})

export class NewLogComponent {
  @Output() newLogSender = new EventEmitter();
  addClicked(name: string, date: string, calorie: string, description: string) {
    var newLogToAdd: Log = new Log(name, new Date(date), parseFloat(calorie), description);
    this.newLogSender.emit(newLogToAdd);
  }
}
