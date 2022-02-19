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
import { CardUiSamplesComponent } from './components/test/card-ui-samples/card-ui-samples.component';
import { CustomFormsModule } from './custom-forms/custom-forms.module';
import { SharedModule } from './shared/shared.module';

const components = [UiSamplesComponent, CardUiSamplesComponent];

@NgModule({
    declarations: [AppComponent, ...components],
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
        CustomFormsModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
