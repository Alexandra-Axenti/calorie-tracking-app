import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'logs-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="today">Today</option>
      <option value="future">Future</option>
    </select>
    <div *ngFor="let currentLog of childLogsList | timing: selectedTiming">
      <h3>{{currentLog.name}}</h3>
    </div>
  `
})

export class LogsListComponent {
  @Input() childLogsList: Log[];
  @Output() clickSender = new EventEmitter();
  public selectedTiming: string = "all";
  onChange(optionFromMenu) {
    this.selectedTiming = optionFromMenu;
    console.log(this.selectedTiming);
  }
}
