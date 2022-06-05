import { SampleComponent } from '../components/test/sample/sample.component';
import { EModalComponent } from '../enum/e-modal-component';

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
