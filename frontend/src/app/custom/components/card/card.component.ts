import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { CardFootDirective } from '../../directive/card/card-foot.directive';
import { CardHeadDirective } from '../../directive/card/card-head.directive';

@Component({
    selector: 'ras-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
    @Input('isSimpleBanner') isSimpleBanner: boolean = false;

    @ContentChild(CardHeadDirective)
    cardHeadTemplate: CardHeadDirective | any;

    @ContentChild(CardFootDirective)
    cardFootTemplate: CardFootDirective | any;

    constructor() {}

    ngOnInit(): void {}
}
