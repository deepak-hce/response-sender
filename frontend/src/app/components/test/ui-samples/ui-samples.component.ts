import { Component, OnInit } from '@angular/core';
import { EIconSize } from 'src/app/base/enum/icon/e-icon-size';
import { IIcon } from 'src/app/base/interface/icon/i-icon';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { ModalService } from 'src/app/modal/service/modal/modal.service';
import { RasThemeService } from 'src/app/services/ras-theme/ras-theme.service';

@Component({
    selector: 'ras-ui-samples',
    templateUrl: './ui-samples.component.html',
    styleUrls: ['./ui-samples.component.sass'],
})
export class UiSamplesComponent implements OnInit {
    icon: IIcon = {
        icon: RasFaIcons.faKey,
        size: EIconSize._2x,
    };

    userIcon: IIcon = {
        icon: RasFaIcons.faUser,
    };

    keyIcon: IIcon = {
        icon: RasFaIcons.faKey,
    };

    constructor(
        private modalService: ModalService,
        public themeService: RasThemeService
    ) {}

    ngOnInit(): void {}

    openModal() {
        this.modalService.openModal({
            heightVh: 70,
            widthVw: 60,
            renderDetails: [
                {
                    component: this.modalService.components.SAMPLE,
                    data: {
                        name: 'Joker',
                    },
                },
            ],
        });
    }
}
