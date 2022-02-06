import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { SampleComponent } from './components/test/sample/sample.component';

// Common list for declarations and exports
const commonComponents = [ModalComponent];

// Below List is only declarations and not exports
const onlyDeclarations = [SampleComponent];

@NgModule({
    declarations: [...commonComponents, ...onlyDeclarations],
    imports: [CommonModule],
    exports: [...commonComponents],
})
export class ModalModule {}
