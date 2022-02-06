import { Directive } from '@angular/core';
import { ECardColorType } from 'src/app/base/enum/card/e-card-color-type';
import { CardComponent } from 'src/app/custom/components/card/card.component';

@Directive({
    selector: '[rasCardInfo]',
})
export class CardInfoDirective {
    constructor(private card: CardComponent) {
        card.cardColorType = ECardColorType.INFO;
    }
}
