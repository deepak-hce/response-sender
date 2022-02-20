import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'ras-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
    // To view only Ui samples used
    showOnlyUiSamples: boolean = false;

    title = 'response-sender-client';
    requests: any = {};
    filteredRequests: any = {};
    responses: any = {};
    socketInstance: any = null;
    searchText = '';
    objectKeys = Object.keys;

    constructor(private authService: AuthService, private router: Router) {}

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

    onSignOutClicked() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
