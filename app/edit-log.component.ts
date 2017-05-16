import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'edit-log',
  template:`
    <div *ngIf="childSelectedLog">
      <h1>Edit Log</h1>
      <div>
        <label>Enter Meal:</label>
        <input [(ngModel)]="childSelectedLog.name">
      </div>
      <div>
        <label>Enter Date:</label>
        <input [(ngModel)]="childSelectedLog.date">
      </div>
      <div>
        <label>Enter Total Calories:</label>
        <input [(ngModel)]="childSelectedLog.calorie">
      </div>
      <div>
        <label>Enter Description:</label>
        <input [(ngModel)]="childSelectedLog.description">
      </div>
      <button (click)="doneClicked()">Done</button>
    </div>
  `
})

export class EditLogComponent {
  @Input() childSelectedLog: Log;
  @Output() doneClickedSender = new EventEmitter();
    doneClicked() {
      this.doneClickedSender.emit();
    }
}
