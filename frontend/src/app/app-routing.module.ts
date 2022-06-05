import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './screens/landing-page/landing-page.component';
import { DashboardPageComponent } from './screens/dashboard-page/dashboard-page.component';

const routes: Routes = [
    { path: 'samples', component: DashboardPageComponent },
    { path: '', component: LandingPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
