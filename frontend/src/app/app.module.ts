import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { ModalModule } from './modal/modal.module';
import { UiSamplesComponent } from './components/test/ui-samples/ui-samples.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDirective } from './directive/icon.directive';

const directives = [IconDirective];

@NgModule({
    declarations: [AppComponent, UiSamplesComponent, ...directives],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

        // Vendor
        NgxJsonViewerModule,
        FontAwesomeModule,

        // Custom
        CustomModule,
        ModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
