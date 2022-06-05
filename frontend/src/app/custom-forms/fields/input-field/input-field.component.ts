import { IIcon } from './../../../base/interface/icon/i-icon';
import {
    Component,
    ContentChild,
    forwardRef,
    HostBinding,
    Input,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputFormFieldComponent } from '../abstract/input-form-field/input-form-field.component';
import { EThemeColor } from 'src/app/base/enum/e-theme-color';
import { RasThemeService } from 'src/app/services/ras-theme/ras-theme.service';

@Component({
    selector: 'ras-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.sass'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputFieldComponent),
            multi: true,
        },
    ],
})
export class InputFieldComponent
    extends InputFormFieldComponent
    implements OnInit
{
    @Input('type') inputType: string = 'text';
    @Input('label') inputLabel: string | null = null;
    @Input('placeholder') inputPlaceHolder: string | null = null;

    @Input('currentFormControl') formControl: AbstractControl | null = null;

    @ContentChild('prefix') prefix: TemplateRef<any> | null = null;
    @ContentChild('suffix') suffix: TemplateRef<any> | null = null;

    @Input('size') inputSize: 'lg' | 'sm' | 'xs' | 'md' = 'md';
    @Input('style') inputStyle: 'no-border' | 'ghost' | null = null;
    @Input('color') inputColor: EThemeColor | null = null;

    @HostBinding('class.ras-py-3') private _classPy4 = true;
    @HostBinding('class.ras-px-4') private _classPx4 = true;
    @HostBinding('class.rasc-focused') private _classFocused = false;

    focused: boolean = false;
    initialColor: EThemeColor | null = null;

    constructor(public themeService: RasThemeService) {
        super();
    }

    ngOnInit(): void {
        this.initialColor = this.inputColor;
    }

    onChange(event: string | number) {
        this.onInputValueChange(event);
        this.handleErrorVisibility();
    }

    onFocus() {
        this.focused = true;
        this._classFocused = true;
    }

    onFocusOut() {
        this.focused = false;
        this._classFocused = false;
        this.onInputTouched();
        this.handleErrorVisibility();
    }

    handleErrorVisibility() {
        if (this.formControl && this.formControl.invalid) {
            this.inputColor = this.themeService.ThemeColor.ERROR;
        }
        if (this.formControl && this.formControl.valid) {
            this.inputColor = this.initialColor;
        }
    }
}
