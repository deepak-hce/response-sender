import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EThemeColor } from 'src/app/base/enum/e-theme-color';
import { RasThemeService } from 'src/app/services/ras-theme/ras-theme.service';

@Component({
    selector: 'ras-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
    @Input('color')
    buttonColorType: EThemeColor | null = null;

    @Input('type')
    buttonType: 'outline' | 'link' | 'glass' | 'ghost' | null = null;

    @Input('size')
    buttonSize: 'lg' | 'sm' | 'xs' | 'md' = 'md';

    @Input('shape')
    buttonShape: 'square' | 'circle' | 'block' | 'wide' | null = null;

    @Input('loader')
    isLoading: boolean = false;

    @Input('noAnimation')
    noAnimation: boolean = false;

    @Input('disabled')
    disabled: boolean = false;

    @Input('active')
    active: boolean = false;

    @Output('onClick') clicked = new EventEmitter<any>();

    constructor(public themeService: RasThemeService) {}

    ngOnInit(): void {}
}
