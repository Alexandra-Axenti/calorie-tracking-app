import { Component } from '@angular/core';
import { Log } from './log.model';

@Component({
  selector: 'my-app',
  template:  `
    <div class="container">
      <logs-list
        [childLogsList] = "masterLogsList"
        (clickSender) = "showDetails($event)"
      ></logs-list>
      <new-log></new-log>
    </div>
  `
})

export class AppComponent {
  public masterLogsList: Log[] = [
    new Log("Vegetables", new Date('2017-02-24'), 250, "I ate tomatoes and carrots for lunch")
  ]
}
