import { Injectable } from '@angular/core';
import { IModalInput } from 'src/app/base/interface/modal/i-modal-input';
import { DomManagerService } from 'src/app/services/dom-manager/dom-manager.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(private domManagerService: DomManagerService) {}

    openModal(modalInput: IModalInput) {
        const modalId =
            modalInput && modalInput.modalId ? modalInput.modalId : null;
        return this.domManagerService.addComponentToBody(
            ModalComponent,
            modalInput,
            modalId
        );
    }

    closeModal(modalId: Symbol | null) {
        if (modalId !== null) {
            this.domManagerService.removeComponent(modalId);
        }
    }
}
