import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { ModalService } from './modal/service/modal/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    title = 'response-sender-client';
    requests: any = {};
    filteredRequests: any = {};
    responses: any = {};
    socketInstance: any = null;
    searchText = '';
    objectKeys = Object.keys;

    constructor(private modalService: ModalService) {}

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

    openModal() {
        this.modalService.openModal({});
    }
}
