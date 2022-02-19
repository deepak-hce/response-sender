import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './fields/input-field/input-field.component';
import { FormSignInComponent } from './forms/form-sign-in/form-sign-in.component';
import { SharedModule } from '../shared/shared.module';

const inputFields = [InputFieldComponent];

const readyMadeForms = [FormSignInComponent];

@NgModule({
    declarations: [...inputFields, ...readyMadeForms],
    imports: [CommonModule, SharedModule],
    exports: [...inputFields],
})
export class CustomFormsModule {}
