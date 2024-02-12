import {Component} from '@angular/core';

@Component({
  selector: 'app-percentage-presentation',
  templateUrl: './percentage-presentation.component.html',
  styleUrls: ['./percentage-presentation.component.scss']
})
export class PercentagePresentationComponent {
  value1 = 'ქონება';
  value2 = ['ქონება', 'ქონების პრივატიზება', 'ქონების გასხვისება', 'საქონლის გასხვისება', 'საქონლის უქონლობა'];
}
