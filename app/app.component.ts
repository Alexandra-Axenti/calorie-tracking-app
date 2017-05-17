import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template:  `
    <div class="container">
    <h1>Calorie Tracking App</h1>
      <div>
        <logs-list
          [childLogsList] = "masterLogsList"
          (clickSender) = "showDetails($event)"
        ></logs-list>
        <edit-log
          [childSelectedLog] = "selectedLog"
          (doneClickSender) = "finishedEditing()"
        ></edit-log>
      </div>
      <div>
        <new-log
          (newLogSender)="addLog($event)"
        >Add Log</new-log>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterLogsList: Log[] = [
    new Log("Vegetables", new Date('2017,2,24'), 250, "Calcium, Vitamin A, Vitamin B"),
    new Log("Tomatoes", new Date('2017,5,16'), 150, "Iron, Fito-nutrients"),
    new Log("Steamed Fish", new Date('2017,5,15'), 505, "Omega 3 and Omega 6")
  ];

  selectedLog: Log = null;
  showDetails(clickedLog: Log) {
    this.selectedLog = clickedLog;
  }
  finishedEditing() {
    this.selectedLog = null;
  }
  addLog(newLogFromChild: Log) {
  this.masterLogsList.push(newLogFromChild);
  }
}
