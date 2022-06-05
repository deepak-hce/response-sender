import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';

export class CustomValidators {
    static required(message?: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (Validators.required(control)) {
                return {
                    message: message ? message : 'Field is required',
                };
            }
            return null;
        };
    }

    static email(message?: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (Validators.email(control)) {
                return {
                    message: message ? message : 'Invalid email',
                };
            }
            return null;
        };
    }
}
