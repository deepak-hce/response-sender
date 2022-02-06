import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[rasCardHead]',
})
export class CardHeadDirective {
    constructor(public templateRef: TemplateRef<any>) {}
}
