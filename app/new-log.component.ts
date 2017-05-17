import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './log.model';

@Component ({
  selector: 'new-log',
  template: `
    <br>
    <h4>New Log</h4>
    <form #form="ngForm" (ngSubmit)="addClicked(form.value)">
      <table class="add-log logs-list">
        <tr>
          <div class="col-md-2 form-item"><input class="form-control form-item input-form" #newName placeholder="Meal"></div>
          <div class="col-md-2 form-item"><input class="form-control form-item input-form" type="date" #newDate placeholder="Date" required></div>
          <div class="col-md-1 form-item"><input class="form-control form-item input-form" #newCalorie placeholder="Calorie count" required></div>
          <div class="col-md-3 form-item"><textarea id="new-log-textarea" class="form-control form-item" #newDescription placeholder="Description/comments"></textarea></div>
          <div class="col-md-2 form-item"><button class="btn btn-primary">Add Log</button></div>
        </tr>
      </table>
    </form>
  `
})

export class NewLogComponent {
  @Output() newLogSender = new EventEmitter();
  addClicked(name: string, date: string, calorie: number, description: string) {
    var newLogToAdd: Log = new Log(name, new Date(date), calorie, description);
    debugger;
    this.newLogSender.emit(newLogToAdd);
  }
}
