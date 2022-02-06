import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EButtonColorType } from 'src/app/base/enum/button/e-button-color-type';
import { EButtonType } from 'src/app/base/enum/button/e-button-type';

@Component({
    selector: 'ras-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
    buttonType: EButtonType = EButtonType.STROKED;
    buttonColorType: EButtonColorType = EButtonColorType.DARK;

    EButtonColorType = EButtonColorType;
    EButtonType = EButtonType;

    @Output('onClick') clicked = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}
}
