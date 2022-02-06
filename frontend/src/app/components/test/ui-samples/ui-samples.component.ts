import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/service/modal/modal.service';

@Component({
    selector: 'ras-ui-samples',
    templateUrl: './ui-samples.component.html',
    styleUrls: ['./ui-samples.component.sass'],
})
export class UiSamplesComponent implements OnInit {
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
