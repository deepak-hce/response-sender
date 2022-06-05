import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CardHeadDirective } from './directive/card/card-head.directive';
import { CardFootDirective } from './directive/card/card-foot.directive';

const directives = [
    // Card Directives
    CardHeadDirective,
    CardFootDirective,
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
