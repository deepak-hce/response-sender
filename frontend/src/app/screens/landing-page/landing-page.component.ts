import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';

@Component({
    selector: 'ras-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.sass'],
})
export class LandingPageComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        if (this.authService.isUserLoggedIn()) {
            this.router.navigate(['/samples']);
        }
    }

    onSignInClicked(formData: any) {
        this.authService.login(formData.value).subscribe((res) => {
            if (res) {
                this.router.navigate(['/samples']);
            }
        });
    }
}
