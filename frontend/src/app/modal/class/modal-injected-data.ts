import { Injectable } from '@angular/core';

@Injectable()
export class ModalInjectedData {
    modalId: Symbol | null = null;
    data: any;
}
