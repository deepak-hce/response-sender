import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CustomModule,
        ModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
