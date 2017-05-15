import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template:  `
    <div class="container">
    <h1>Calorie Tracking App</h1>
      <logs-list
        [childLogsList] = "masterLogsList"
        (clickSender) = "showDetails($event)"
      ></logs-list>
      <new-log
        (newLogSender)="addLog($event)"
       >Add Log</new-log>
    </div>
  `
})

export class AppComponent {
  public masterLogsList: Log[] = [
    new Log("Vegetables", new Date(2017,2,24), 250, "I ate tomatoes and carrots for lunch")
  ];

  selectedLog: Log = null;
  showDetails(clickedLog: Log) {
    this.selectedLog = clickedLog;
  }
  // finishedEditing() {
  //   this.selectedLog = null;
  // }
  addLog(newLogFromChild: Log) {
  this.masterLogsList.push(newLogFromChild);
  }
}
