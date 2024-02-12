import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomTextInputComponent} from './components/custom-text-input/custom-text-input.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GhostLoaderDirective} from './directives/ghost-loader.directive';
import {CustomDatePipe} from './pipes/custom-date.pipe';
import {HighlighterDirective} from './directives/highlighter.directive';

const COMPONENTS = [
  CustomTextInputComponent
];

const DIRECTIVES = [
  GhostLoaderDirective,
  HighlighterDirective
];

const PIPES = [
  CustomDatePipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ]
})
export class SharedModule { }
