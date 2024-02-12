import {Component} from '@angular/core';

@Component({
  selector: 'app-for-custom-pipe',
  templateUrl: './for-custom-pipe.component.html',
  styleUrls: ['./for-custom-pipe.component.scss']
})
export class ForCustomPipeComponent {
  date = new Date('2023-08-10T09:42:34.0734574Z');
  dateStringFormat = '2023-08-10T09:42:34.0734574Z';
  notADate = 'not a date';
}
