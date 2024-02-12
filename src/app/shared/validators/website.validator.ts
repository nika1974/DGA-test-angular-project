import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {RegexpValidatorInterface} from '../interfaces/validators.interfaces';

export function RegexValidator(validator: RegexpValidatorInterface): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valid = validator.regexp.test(control.value);
        return valid ? null : {
            [validator.errorName]: {value: validator.message || control.value}
        };
    };
}