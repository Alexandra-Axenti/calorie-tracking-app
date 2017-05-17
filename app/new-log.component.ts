import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'new-log',
  template: `
    <br>
    <h4>New Log</h4>
      <table class="add-log logs-list">
        <tr>
          <form #form="ngForm" (ngSubmit)="addClicked(form.value)">
            <div class="col-md-2 form-item"><input class="form-control form-item input-form" name="name" placeholder="Meal" ngModel required></div>
            <div class="col-md-2 form-item"><input class="form-control form-item input-form" type="date" name="date" placeholder="Date" ngModel required></div>
            <div class="col-md-1 form-item"><input class="form-control form-item input-form" type="number" name="calorie" placeholder="Calorie count" ngModel required></div>
            <div class="col-md-3 form-item"><textarea id="new-log-textarea" class="form-control form-item" name="description" placeholder="Description/comments" ngModel required></textarea></div>
            <div class="col-md-2 form-item"><button class="btn btn-primary">Add Log</button></div>
          </form>
        </tr>
      </table>
  `
})

export class NewLogComponent {
  @Output() newLogSender = new EventEmitter();
  addClicked(form: any):void {
    var newLogToAdd: Log = new Log(form.name, new Date(form.date), form.calorie, form.description);
    this.newLogSender.emit(newLogToAdd);
  }
}
