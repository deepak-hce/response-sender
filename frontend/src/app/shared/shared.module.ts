import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective } from './directive/icon.directive';

const directives = [IconDirective];

@NgModule({
    declarations: [...directives],
    imports: [CommonModule],
    exports: [...directives],
})
export class SharedModule {}
