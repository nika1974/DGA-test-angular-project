import {Component, Input, OnInit} from '@angular/core';
import {MatchInterface} from '../../percentage-in-array.interface';

@Component({
  selector: 'app-percentage-in-array',
  templateUrl: './percentage-in-array.component.html',
  styleUrls: ['./percentage-in-array.component.scss']
})
export class PercentageInArrayComponent implements OnInit {
  @Input() value1: string = '';
  @Input() value2: string[] = [];

  percentage: number = 0;
  matchesArray: MatchInterface[] = [];

  ngOnInit(): void {
    this.handlePercentageCalculation(this.value1, this.value2);
  }

  private queryMatch = (value: string, query: string): string => {
    if (!query.length) {
      return '';
    }

    if (value.includes(query)) {
      return query;
    }

    return this.queryMatch(value, query.slice(0, -1));
  }

  private handlePercentageCalculation(query: string, array: string[]): void {
    array.forEach((value: string) => {
      const match = this.queryMatch(value, query);
      const matchLength = match.length;
      const valueLenght = value.length;

      this.matchesArray.push({
        value,
        matchingPercentage: Math.ceil(matchLength / valueLenght * 100),
        matchedQuery: match
      });
    });
  }
}
