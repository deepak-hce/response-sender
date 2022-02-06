import { NgClass } from '@angular/common';
import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[rasCardFoot]',
})
export class CardFootDirective {
    @Input('extraClass') extraClass: string | null = null;

    constructor(public templateRef: TemplateRef<any>) {}
}
