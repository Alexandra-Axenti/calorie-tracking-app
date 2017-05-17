import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'edit-log',
  template:`
    <div class="log-edit" *ngIf="childSelectedLog" (clickOutside)="close()" >
      <br>
      <h4>Edit Log</h4>
      <table class="logs-list">
        <div class="col-md-2 form-item"><input class="form-control form-item input-form" [(ngModel)]="childSelectedLog.name"></div>
        <div class="col-md-2 form-item"><input class="form-control form-item input-form" type="date" [(ngModel)]="childSelectedLog.date"></div>
        <div class="col-md-1 form-item"><input class="form-control form-item input-form" [(ngModel)]="childSelectedLog.calorie"></div>
        <div class="col-md-3 form-item"><textarea  id="new-log-textarea" class="form-control form-item" [(ngModel)]="childSelectedLog.description"></textarea></div>
        <div class="col-md-2 form-item"><button class="btn btn-primary" (click)="doneClicked()">Save Edit</button></div>
      </table>
    </div>
  `
})

export class EditLogComponent {
  @Input() childSelectedLog: Log;
  @Output() doneClickedSender = new EventEmitter();
    doneClicked() {
      this.doneClickedSender.emit();
      this.childSelectedLog = null;
    }
}
