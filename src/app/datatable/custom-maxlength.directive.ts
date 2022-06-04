import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[customMaxLength]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxLengthDirective, multi: true}]
})
export class CustomMaxLengthDirective implements Validator {
    @Input()
    customMaxLength: number;

    validate(c: FormControl): {[key: string]: any} {
        const v = c.value;
        return (v !== null && v?.length > this.customMaxLength) ? {customMaxLength: true} : null;
    }
}