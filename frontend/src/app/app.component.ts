import { IIcon } from './base/interface/icon/i-icon';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { RasFaIcons } from './constants/fa-library';
import { EIconSize } from './base/enum/icon/e-icon-size';

@Component({
    selector: 'ras-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    icon: IIcon = {
        icon: RasFaIcons.faKey,
        size: EIconSize._10x,
    };
    // To view only Ui samples used
    showOnlyUiSamples: boolean = true;

    title = 'response-sender-client';
    requests: any = {};
    filteredRequests: any = {};
    responses: any = {};
    socketInstance: any = null;
    searchText = '';
    objectKeys = Object.keys;

    constructor() {}

    ngOnInit() {
        this.socketInstance = io(environment.socketPort, {
            reconnectionDelayMax: 10000,
        });

        this.socketInstance.connect();

        this.socketInstance.on('request', (data: any) => {
            this.requests[data.id] = { ...data };
            this.getKeyByValue();
        });

        this.socketInstance.on('delete', (data: any) => {
            delete this.requests[data];
            this.getKeyByValue();
        });

        this.socketInstance.on('pendingRequest', (data: any) => {
            this.requests = data;
            this.getKeyByValue();
        });
    }

    sendResponse(id: any) {
        const responseObj = {
            id,
            response: this.responses[id],
        };
        this.socketInstance.emit('response', responseObj);
    }

    getKeyByValue() {
        if (!this.searchText) {
            this.filteredRequests = this.requests;
            return;
        }

        this.filteredRequests = Object.keys(this.requests).find((key) =>
            this.requests[key].includes(this.searchText)
        );
    }
}
