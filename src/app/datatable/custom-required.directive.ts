import {Directive, Input} from '@angular/core';
import {NG_VALIDATORS, Validator, FormControl, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {trim} from 'jquery';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[customRequired]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomRequiredDirective, multi: true}]
})
export class CustomRequiredDirective implements Validator {

    validate(c: FormControl): {[key: string]: any} {
        const v = c.value;
        return (trim(v) === '' ) ? {customRequired: true} : null;
    }
}
