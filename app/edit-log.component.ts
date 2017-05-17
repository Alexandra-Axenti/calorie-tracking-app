import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'edit-log',
  template:`
    <div class="log-edit" *ngIf="childSelectedLog">
      <br>
      <h4>Edit Log</h4>
      <table class="logs-list">
        <tr>
          <form #form="ngForm" (ngSubmit)="addClicked(form.value)">
            <div class="col-md-2 form-item">
              <input class="form-control form-item input-form" name="name" [(ngModel)]="childSelectedLog.name">
            </div>
            <div class="col-md-2 form-item">
              <input class="form-control form-item input-form" type="date" name="date" [(ngModel)]="childSelectedLog.date">
            </div>
            <div class="col-md-1 form-item">
              <input class="form-control form-item input-form" type="number" name="calorie" [(ngModel)]="childSelectedLog.calorie">
            </div>
            <div class="col-md-3 form-item">
              <textarea  id="new-log-textarea" class="form-control form-item" name="description" [(ngModel)]="childSelectedLog.description"></textarea>
            </div>
            <div class="col-md-2 form-item">
              <button class="btn btn-primary">Save Edit</button>
            </div>
          </form>
        </tr>
      </table>
    </div>
  `
})

export class EditLogComponent {
  @Input() childSelectedLog: Log;
  @Output() doneClickedSender = new EventEmitter();
    addClicked(form: any) {
      this.doneClickedSender.emit();
      this.childSelectedLog = null;
    }

}
