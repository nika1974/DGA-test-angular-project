import {AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, forwardRef} from '@angular/core';
import {ControlValueAccessorDirective} from '../control-value-accessor.directive';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {RegexValidator} from '../../validators/website.validator';
import {RegexEnum} from '../../enums';
import {RegexpValidatorInterface} from '../../interfaces/validators.interfaces';

type InputType = 'input' | 'text' | 'website'; // etc.

interface ValidatorByType {
  [x: string]: RegexpValidatorInterface
}

@Component({
  selector: 'app-custom-text-input',
  templateUrl: './custom-text-input.component.html',
  styleUrls: ['./custom-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTextInputComponent<T> extends ControlValueAccessorDirective<T> implements AfterViewInit {
  @Input() type: InputType = 'input';
  validatorsByType: ValidatorByType = {
    website: {
      regexp: new RegExp(RegexEnum.WEBSITE),
      errorName: 'website',
      message: 'The pattern is not a website'
    }
  };

  ngAfterViewInit(): void {
    if (this.validatorsByType[this.type]) {
      this.control.addValidators(RegexValidator(this.validatorsByType[this.type]));
    }
  }
}
