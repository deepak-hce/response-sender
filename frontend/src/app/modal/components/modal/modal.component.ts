import { Component, OnInit } from '@angular/core';
import { DomInjectedData } from 'src/app/base/class/dom/dom-injected-data';
import { ModalService } from '../../service/modal/modal.service';

@Component({
    selector: 'ras-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.sass'],
})
export class ModalComponent implements OnInit {
    constructor(
        private domInjectData: DomInjectedData,
        private modalService: ModalService
    ) {
        console.log(domInjectData);
    }

    ngOnInit(): void {}

    closeMe() {
        this.modalService.closeModal(this.domInjectData.domId);
    }

    addMore() {
        this.modalService.openModal({});
    }
}
