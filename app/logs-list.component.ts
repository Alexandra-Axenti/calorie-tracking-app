import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'logs-list',
  template: `
    <br><br>
    <select class="form-control select-form" (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="low calorie food">Low Calorie Food</option>
      <option value="high calorie food">High Calorie Food</option>
    </select>
    <br><br><br>
    <div *ngFor="let currentLog of childLogsList | calories: selectedCalories">
      <table class="logs-list">
        <div class="col-md-2">{{currentLog.name}}</div>
        <div class="col-md-2">{{currentLog.date}}</div>
        <div class="col-md-1">{{currentLog.calorie}}</div>
        <div class="col-md-3">{{currentLog.description}}</div>
        <div class="col-md-2"><button class="btn btn-primary" id='edit' (click)="editButtonHasBeenClicked(currentLog)">Edit</button></div>
      </table>
    </div>
  `
})

export class LogsListComponent {
  @Input() childLogsList: Log[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }

  editButtonHasBeenClicked(logToEdit: Log) {
  this.clickSender.emit(logToEdit);
  }
}
