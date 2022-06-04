import {FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {trim} from 'jquery';

export function customRequiredValidator(): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        return (trim(value) === '') ? {customRequired: true} : {customRequired: false};
    };
}