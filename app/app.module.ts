import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewLogComponent }   from './new-log.component';
import { LogsListComponent }   from './logs-list.component';
import { TimingPipe } from './timing.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewLogComponent,
    LogsListComponent,
    TimingPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
