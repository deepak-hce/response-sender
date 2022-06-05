import { EModalPosition } from 'src/app/modal/enum/e-modal-position';
import { IModalRenderDetail } from './i-modal-render-detail';

export interface IModalInput {
    modalId?: Symbol;
    heightVh?: number;
    widthVw?: number;
    position?: EModalPosition;
    renderDetails?: IModalRenderDetail[];
}
