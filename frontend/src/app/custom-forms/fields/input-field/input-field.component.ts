import { IIcon } from './../../../base/interface/icon/i-icon';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { EIconSize } from 'src/app/base/enum/icon/e-icon-size';

@Component({
    selector: 'ras-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.sass'],
})
export class InputFieldComponent implements OnInit {
    @Input('type') inputType: string = 'text';
    @Input('label') inputLabel: string | null = null;

    @Input('prefixIcon') prefixIcon: IIcon | null = {
        icon: RasFaIcons.faUser,
    };

    @HostBinding('class.ras-py-4') private _classPy4 = true;
    @HostBinding('class.ras-px-4') private _classPx4 = true;
    @HostBinding('class.ras-flex') private _classFlex = true;
    @HostBinding('class.ras-flex-col') private _classFlexCol = false;

    constructor() {}

    ngOnInit(): void {}

    onInputFieldChanged(event: Event) {
        console.log(event);
    }
}
