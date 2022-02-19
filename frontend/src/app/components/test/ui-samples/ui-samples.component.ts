import { Component, OnInit } from '@angular/core';
import { EIconSize } from 'src/app/base/enum/icon/e-icon-size';
import { IIcon } from 'src/app/base/interface/icon/i-icon';
import { RasFaIcons } from 'src/app/constants/fa-library';
import { ModalService } from 'src/app/modal/service/modal/modal.service';

@Component({
    selector: 'ras-ui-samples',
    templateUrl: './ui-samples.component.html',
    styleUrls: ['./ui-samples.component.sass'],
})
export class UiSamplesComponent implements OnInit {
    icon: IIcon = {
        icon: RasFaIcons.faKey,
        size: EIconSize._4x,
    };
    constructor(private modalService: ModalService) {}

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
