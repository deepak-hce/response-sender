import { Component, OnInit } from '@angular/core';
import { IIcon } from 'src/app/base/interface/icon/i-icon';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { RasThemeService } from 'src/app/services/ras-theme/ras-theme.service';

@Component({
    selector: 'ras-input-field-ui-samples',
    templateUrl: './input-field-ui-samples.component.html',
    styleUrls: ['./input-field-ui-samples.component.sass'],
})
export class InputFieldUiSamplesComponent implements OnInit {
    userIcon: IIcon = {
        icon: RasFaIcons.faUser,
    };

    keyIcon: IIcon = {
        icon: RasFaIcons.faKey,
    };

    colorEnumList = [
        this.themeService.ThemeColor.PRIMARY,
        this.themeService.ThemeColor.SECONDARY,
        this.themeService.ThemeColor.ACCENT,
        this.themeService.ThemeColor.SUCCESS,
        this.themeService.ThemeColor.WARNING,
        this.themeService.ThemeColor.ERROR,
        this.themeService.ThemeColor.INFO,
    ];

    constructor(public themeService: RasThemeService) {}

    ngOnInit(): void {}
}
