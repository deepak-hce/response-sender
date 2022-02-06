import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { ModalModule } from './modal/modal.module';
import { UiSamplesComponent } from './components/test/ui-samples/ui-samples.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
    declarations: [AppComponent, UiSamplesComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

        // Vendor
        NgxJsonViewerModule,

        // Custom
        CustomModule,
        ModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
