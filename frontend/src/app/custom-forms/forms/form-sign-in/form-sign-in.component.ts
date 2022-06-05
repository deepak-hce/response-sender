import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IIcon } from 'src/app/base/interface/icon/i-icon';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { CustomValidators } from '../../validators/custom-validators';

@Component({
    selector: 'ras-form-sign-in',
    templateUrl: './form-sign-in.component.html',
    styleUrls: ['./form-sign-in.component.sass'],
})
export class FormSignInComponent implements OnInit {
    @Output('onSubmit') submit: EventEmitter<any> = new EventEmitter<any>();

    signInForm: FormGroup | null = null;

    userIcon: IIcon = {
        icon: RasFaIcons.faUser,
    };

    keyIcon: IIcon = {
        icon: RasFaIcons.faKey,
    };

    readonly EMAIL_FIELD = 'email';
    readonly PASSWORD_FIELD = 'password';

    constructor() {}

    ngOnInit(): void {
        this.signInForm = new FormGroup({
            [this.EMAIL_FIELD]: new FormControl('', [
                CustomValidators.required('Email required'),
                CustomValidators.email(),
            ]),
            [this.PASSWORD_FIELD]: new FormControl('', [
                CustomValidators.required('Password required'),
            ]),
        });
    }

    onSubmit() {
        if (this.signInForm?.valid) {
            this.submit.emit({
                value: this.signInForm.value,
                formGroup: this.signInForm,
            });
        }
    }
}
