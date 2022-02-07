import { Directive } from '@angular/core';
import { EButtonColorType } from 'src/app/base/enum/button/e-button-color-type';
import { ButtonComponent } from 'src/app/custom/components/button/button.component';

@Directive({
    selector: '[rasBtnLight]',
})
export class BtnLightDirective {
    constructor(private target: ButtonComponent) {
        target.buttonColorType = EButtonColorType.LIGHT;
    }
}
