import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

// Common list for declarations and exports
const commonComponents = [ButtonComponent];

// Below List is only declarations and not exports
const onlyDeclarations = [];

@NgModule({
    declarations: [...commonComponents],
    imports: [CommonModule],
    exports: [...commonComponents],
})
export class CustomModule {}
