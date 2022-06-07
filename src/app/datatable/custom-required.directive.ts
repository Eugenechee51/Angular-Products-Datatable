import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl, ValidatorFn} from '@angular/forms';
import {trim} from 'jquery';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[customRequired]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomRequiredDirective, multi: true}]
})
export class CustomRequiredDirective implements Validator {

    validate(c: AbstractControl): {[key: string]: any} | null {
        return customRequiredValidator()(c);
    }
}

export function customRequiredValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        return (trim(value) === '') ? {customRequired: true} : null;
    };
}
