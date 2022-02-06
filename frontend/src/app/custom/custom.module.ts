import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BtnFilledDirective } from './directive/button/button-type/btn-filled.directive';
import { BtnStrokedDirective } from './directive/button/button-type/btn-stroked.directive';
import { BtnPrimaryDirective } from './directive/button/button-color/btn-primary.directive';
import { BtnSecondaryDirective } from './directive/button/button-color/btn-secondary.directive';
import { BtnSuccessDirective } from './directive/button/button-color/btn-success.directive';
import { BtnWarningDirective } from './directive/button/button-color/btn-warning.directive';
import { BtnDangerDirective } from './directive/button/button-color/btn-danger.directive';
import { BtnInfoDirective } from './directive/button/button-color/btn-info.directive';
import { BtnLightDirective } from './directive/button/button-color/btn-light.directive';
import { BtnDarkDirective } from './directive/button/button-color/btn-dark.directive';
import { CardComponent } from './components/card/card.component';
import { CardHeadDirective } from './directive/card/card-head.directive';
import { CardFootDirective } from './directive/card/card-foot.directive';
import { CardPrimaryDirective } from './directive/card/card-color-type/card-primary.directive';
import { CardSecondaryDirective } from './directive/card/card-color-type/card-secondary.directive';
import { CardSuccessDirective } from './directive/card/card-color-type/card-success.directive';
import { CardWarningDirective } from './directive/card/card-color-type/card-warning.directive';
import { CardInfoDirective } from './directive/card/card-color-type/card-info.directive';
import { CardDarkDirective } from './directive/card/card-color-type/card-dark.directive';
import { CardDangerDirective } from './directive/card/card-color-type/card-danger.directive';

const directives = [
    // Button Directives
    BtnFilledDirective,
    BtnStrokedDirective,
    BtnPrimaryDirective,
    BtnSecondaryDirective,
    BtnSuccessDirective,
    BtnWarningDirective,
    BtnDangerDirective,
    BtnInfoDirective,
    BtnLightDirective,
    BtnDarkDirective,

    // Card Directives
    CardHeadDirective,
    CardFootDirective,
    CardPrimaryDirective,
    CardSecondaryDirective,
    CardSuccessDirective,
    CardWarningDirective,
    CardDangerDirective,
    CardInfoDirective,
    CardDarkDirective,
];

// Common list for declarations and exports
const commonComponents = [ButtonComponent, CardComponent];

// Below List is only declarations and not exports
const onlyDeclarations = [];

@NgModule({
    declarations: [...commonComponents, ...directives],
    imports: [CommonModule],
    exports: [...commonComponents, ...directives],
})
export class CustomModule {}
