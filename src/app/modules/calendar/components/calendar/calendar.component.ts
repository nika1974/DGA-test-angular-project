import {Component, OnInit} from '@angular/core';
import {DayType} from '../../calendar.interfaces';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  weekDays = [
    'Sun', 'Mon', 'Tue',
    'Wed', 'Thu', 'Fri', 'Sat',
  ];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  prefixArr: DayType[] = [];
  suffixArr: DayType[] = [];

  currentDate: Date;
  daysInMonth: DayType[];
  currentMonth: number;
  currentYear: number;

  ngOnInit() {
    this.currentDate = new Date();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.generateCalendar();
  }

  generateCalendar() {
    this.daysInMonth = [];

    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    const lastDayOfPreviousMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const daysInMonth = lastDayOfMonth.getDate();
    const firstWeekday = firstDayOfMonth.toLocaleDateString('en-US', {weekday: 'short'});
    const prefixDaysCount = this.weekDays.indexOf(firstWeekday);
    const suffixDaysCount = this.weekDays.length - this.weekDays.indexOf(firstWeekday) - 1;

    for (let i = 0; i < prefixDaysCount; i++) {
      this.prefixArr.unshift({
        day: lastDayOfPreviousMonth - i,
        isHoliday: false
      });
    }

    for (let i = 1; i < suffixDaysCount + 1; i++) {
      this.suffixArr.push({
        day: i,
        isHoliday: false
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const tempDay: DayType = {
        day,
        isHoliday: day % 10 === 0,
        isToday: day === new Date().getDate()
      }
      this.daysInMonth.push(tempDay);
    }
  }
}
