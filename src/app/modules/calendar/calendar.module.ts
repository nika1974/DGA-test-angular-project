import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarRoutingModule} from './calendar-routing.module';

const COMPONENT = [
  CalendarComponent
];

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
