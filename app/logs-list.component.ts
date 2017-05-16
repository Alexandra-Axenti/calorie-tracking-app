import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'logs-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="low calorie food">Low Calorie Food</option>
      <option value="high calorie food">High Calorie Food</option>
    </select>
    <div *ngFor="let currentLog of childLogsList | calories: selectedCalories">
      <h3>{{currentLog.name}}</h3>
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
}
