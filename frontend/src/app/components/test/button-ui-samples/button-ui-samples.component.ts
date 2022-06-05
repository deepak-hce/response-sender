import { Component, OnInit } from '@angular/core';
import { EIconSize } from 'src/app/base/enum/icon/e-icon-size';
import { IIcon } from 'src/app/base/interface/icon/i-icon';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { RasThemeService } from 'src/app/services/ras-theme/ras-theme.service';

@Component({
    selector: 'ras-button-ui-samples',
    templateUrl: './button-ui-samples.component.html',
    styleUrls: ['./button-ui-samples.component.sass'],
})
export class ButtonUiSamplesComponent implements OnInit {
    icon: IIcon = {
        icon: RasFaIcons.faKey,
        size: EIconSize._2x,
    };

    constructor(public themeService: RasThemeService) {}

    ngOnInit(): void {}
}
