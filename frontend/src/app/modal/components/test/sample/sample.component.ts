import { ModalInjectedData } from './../../../class/modal-injected-data';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ras-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.sass'],
})
export class SampleComponent implements OnInit {
    constructor(private modalInjectedData: ModalInjectedData) {
        console.log(modalInjectedData);
    }

    ngOnInit(): void {}
}
