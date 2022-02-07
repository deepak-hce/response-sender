import { Directive } from '@angular/core';
import { EButtonColorType } from 'src/app/base/enum/button/e-button-color-type';
import { ButtonComponent } from 'src/app/custom/components/button/button.component';

@Directive({
    selector: '[rasBtnPrimary]',
})
export class BtnPrimaryDirective {
    constructor(private target: ButtonComponent) {
        target.buttonColorType = EButtonColorType.PRIMARY;
    }
}
