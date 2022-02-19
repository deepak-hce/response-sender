import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { ECardColorType } from 'src/app/base/enum/card/e-card-color-type';
import { CardFootDirective } from '../../directive/card/card-foot.directive';
import { CardHeadDirective } from '../../directive/card/card-head.directive';

@Component({
    selector: 'ras-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
    @Input('isSimpleBanner') isSimpleBanner: boolean = false;
    @Input('raised') raisedIndex: number = 0;

    @ContentChild(CardHeadDirective)
    cardHeadTemplate: CardHeadDirective | any;

    @ContentChild(CardFootDirective)
    cardFootTemplate: CardFootDirective | any;

    cardColorType: ECardColorType = ECardColorType.LIGHT;

    ECardColorType = ECardColorType;

    constructor() {}

    ngOnInit(): void {}
}
