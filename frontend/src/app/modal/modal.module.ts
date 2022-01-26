import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';

// Common list for declarations and exports
const commonComponents = [ModalComponent];

// Below List is only declarations and not exports
const onlyDeclarations = [];

@NgModule({
    declarations: [...commonComponents],
    imports: [CommonModule],
    exports: [...commonComponents],
})
export class ModalModule {}
