import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static isValidPrice(control: AbstractControl) {
        const value = control.value;
        if (value > 10000) {
            return { invalid_price: true };
        }
        return null;
    }

    /* static createValidator(service: MyService) {
        return (control: AbstractControl) => {
            return service.checkEmailNotTaken(control.value).map(res => {
                return res ? null : { emailTaken: true };
            });
        };
    } */
}