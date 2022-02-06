import { Component, Injector, OnInit } from '@angular/core';
import { DomInjectedData } from 'src/app/base/class/dom/dom-injected-data';
import { EModalComponent } from 'src/app/base/enum/modal/e-modal-component';
import { EModalPosition } from 'src/app/base/enum/modal/e-modal-position';
import { IModalInput } from 'src/app/base/interface/modal/i-modal-input';
import { ModalComponentMap } from '../../class/modal-component-map';
import { ModalInjectedData } from '../../class/modal-injected-data';
import { ModalService } from '../../service/modal/modal.service';

@Component({
    selector: 'ras-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.sass'],
})
export class ModalComponent implements OnInit {
    height: string = '0';
    width: string = '0';

    position: EModalPosition = EModalPosition.CENTER;

    resolvedComponents: any[] = [];
    activeResolvedComponentIndex: number = -1;

    constructor(
        private domInjectData: DomInjectedData,
        private modalService: ModalService,
        private injector: Injector
    ) {}

    ngOnInit(): void {
        const modalData = this.domInjectData.data as IModalInput;

        this.height = modalData.heightVh ? `${modalData.heightVh}vh` : 'auto';
        this.width = modalData.widthVw ? `${modalData.widthVw}vw` : 'auto';

        if (modalData.position) {
            this.position = modalData.position;
        }

        if (modalData.renderDetails && modalData.renderDetails.length) {
            this.activeResolvedComponentIndex = 0;
            modalData.renderDetails.forEach((renderDetail) => {
                this.resolveComponent(
                    renderDetail.component,
                    renderDetail.data,
                    this.domInjectData.domId
                );
            });
        }
    }

    resolveComponent(
        modalComponent: EModalComponent,
        data: any,
        modalId?: Symbol | null
    ) {
        const resolvedComponent =
            ModalComponentMap.getComponent(modalComponent);
        if (resolvedComponent) {
            this.resolvedComponents.push({
                component: resolvedComponent,
                injector: this._prepareInjector(data, modalId),
            });
        }
    }

    private _prepareInjector(data: any, modalId?: Symbol | null): Injector {
        return Injector.create({
            providers: [
                {
                    provide: ModalInjectedData,
                    useValue: {
                        modalId,
                        data: data ? data : {},
                    },
                },
            ],
            parent: this.injector,
        });
    }

    closeModal() {
        this.modalService.closeModal(this.domInjectData.domId);
    }
}
