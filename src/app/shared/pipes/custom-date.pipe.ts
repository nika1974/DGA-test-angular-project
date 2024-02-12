import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date | any): any {
    if (isNaN(new Date(value).getTime())) {
      return value
    }

    const datePipe = new DatePipe("en-US");
    return datePipe.transform(value, 'HH:mm:ss MMM dd yyyy');
  }
}
