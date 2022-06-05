import { Injectable } from '@angular/core';
import { DomManagerService } from 'src/app/services/dom-manager/dom-manager.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { EModalComponent } from '../../enum/e-modal-component';
import { IModalInput } from '../../interface/i-modal-input';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    constructor(private domManagerService: DomManagerService) {}

    get components() {
        return EModalComponent;
    }

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
