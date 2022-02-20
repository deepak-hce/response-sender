import { ControlValueAccessor } from '@angular/forms';

export class InputFormFieldComponent implements ControlValueAccessor {
    inputValue: any = null;
    disabled: boolean = false;

    onInputValueChange = (value: any) => {};
    onInputTouched = () => {};

    writeValue(value: any): void {
        this.inputValue = value;
    }

    registerOnChange(fn: any): void {
        this.onInputValueChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onInputTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
