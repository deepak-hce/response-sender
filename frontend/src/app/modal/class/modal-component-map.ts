import { EModalComponent } from 'src/app/base/enum/modal/e-modal-component';
import { SampleComponent } from '../components/test/sample/sample.component';

export class ModalComponentMap {
    static getComponent(component: EModalComponent) {
        switch (component) {
            case EModalComponent.SAMPLE:
                return SampleComponent;
            default:
                return null;
        }
    }
}
