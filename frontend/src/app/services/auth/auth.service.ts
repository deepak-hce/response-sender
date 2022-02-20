import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    login(loginData: { email: string; password: string }): Observable<boolean> {
        let isUserLoggedIn = false;
        if (loginData && loginData.email && loginData.password) {
            isUserLoggedIn =
                loginData.email == 'admin@qzoz.in' &&
                loginData.password == '123';
            localStorage.setItem(
                'isUserLoggedIn',
                isUserLoggedIn ? 'true' : 'false'
            );
        }
        return of(isUserLoggedIn).pipe(delay(3000));
    }

    isUserLoggedIn(): boolean {
        return localStorage.getItem('isUserLoggedIn') === 'true' ? true : false;
    }

    logout(): void {
        localStorage.removeItem('isUserLoggedIn');
    }
}
