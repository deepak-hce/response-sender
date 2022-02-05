import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BtnFilledDirective } from './directive/button/btn-filled/btn-filled.directive';
import { BtnStrokedDirective } from './directive/button/btn-stroked/btn-stroked.directive';

const directives = [BtnFilledDirective, BtnStrokedDirective];

// Common list for declarations and exports
const commonComponents = [ButtonComponent];

// Below List is only declarations and not exports
const onlyDeclarations = [];

@NgModule({
    declarations: [...commonComponents, ...directives],
    imports: [CommonModule],
    exports: [...commonComponents, ...directives],
})
export class CustomModule {}
