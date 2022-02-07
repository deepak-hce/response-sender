import { Directive } from '@angular/core';
import { EButtonType } from 'src/app/base/enum/button/e-button-type';
import { ButtonComponent } from 'src/app/custom/components/button/button.component';

@Directive({
    selector: '[rasBtnFilled]',
})
export class BtnFilledDirective {
    constructor(private target: ButtonComponent) {
        target.buttonType = EButtonType.FILLED;
    }
}
