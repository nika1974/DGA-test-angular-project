import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PercentageInArrayComponent} from './components/percentage-in-array/percentage-in-array.component';
import {PercentagePresentationComponent} from './components/percentage-presentation/percentage-presentation.component';
import {PercentageInArrayRoutingModule} from './percentage-in-array-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SharedModule} from 'src/app/shared/shared.module';

const COMPONENTS = [
  PercentageInArrayComponent,
  PercentagePresentationComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    PercentageInArrayRoutingModule,
    MatProgressBarModule,
    SharedModule
  ]
})
export class PercentageInArrayModule { }
