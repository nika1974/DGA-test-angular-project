import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {DateValidatorInterface} from '../interfaces/validators.interfaces';

export function DateMaximum(validator: DateValidatorInterface): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const controlDate = new Date(control.value)?.getTime();
        const validationDate = new Date(validator.date)?.getTime();

        const valid = controlDate <= validationDate;

        return valid ? null : {
            [validator.errorName]: {value: validator.message || control.value}
        };
    };
}