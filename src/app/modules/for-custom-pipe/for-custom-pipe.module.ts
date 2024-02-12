import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForCustomPipeComponent} from './components/for-custom-pipe/for-custom-pipe.component';
import {ForCustomPipeRoutingModule} from './for-custom-pipe-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';

const COMPONENTS = [
  ForCustomPipeComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ForCustomPipeRoutingModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ForCustomPipeModule { }
