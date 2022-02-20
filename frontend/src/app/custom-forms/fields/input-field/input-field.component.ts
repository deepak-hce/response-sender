import { IIcon } from './../../../base/interface/icon/i-icon';
import {
    Component,
    forwardRef,
    HostBinding,
    Input,
    OnInit,
} from '@angular/core';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { EIconSize } from 'src/app/base/enum/icon/e-icon-size';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { InputFormFieldComponent } from '../abstract/input-form-field/input-form-field.component';

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

    @Input('prefixIcon') prefixIcon: IIcon | null = null;
    @Input('suffixIcon') suffixIcon: IIcon | null = null;

    @Input('size') inputSize: 'lg' | 'sm' | null = null;

    @HostBinding('class.ras-py-4') private _classPy4 = true;
    @HostBinding('class.ras-px-4') private _classPx4 = true;
    @HostBinding('class.rasc-focused') private _classFocused = false;

    focused: boolean = false;

    constructor() {
        super();
    }

    ngOnInit(): void {}

    onChange(event: string | number) {
        this.onInputValueChange(event);
    }

    onFocus() {
        this.focused = true;
        this._classFocused = true;
    }

    onFocusOut() {
        this.focused = false;
        this._classFocused = false;
        this.onInputTouched();
    }
}
