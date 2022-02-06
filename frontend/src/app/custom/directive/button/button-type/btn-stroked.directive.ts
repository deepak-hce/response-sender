import { Directive } from '@angular/core';
import { EButtonType } from 'src/app/base/enum/button/e-button-type';
import { ButtonComponent } from 'src/app/custom/components/button/button.component';

@Directive({
    selector: '[rasBtnStroked]',
})
export class BtnStrokedDirective {
    constructor(private target: ButtonComponent) {
        target.buttonType = EButtonType.STROKED;
    }
}
