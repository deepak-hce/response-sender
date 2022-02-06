import { Directive } from '@angular/core';
import { EButtonColorType } from 'src/app/base/enum/button/e-button-color-type';
import { ButtonComponent } from 'src/app/custom/components/button/button.component';

@Directive({
    selector: '[rasBtnSuccess]',
})
export class BtnSuccessDirective {
    constructor(private target: ButtonComponent) {
        target.buttonColorType = EButtonColorType.SUCCESS;
    }
}
