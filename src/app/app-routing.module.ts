import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginSignupComponent} from './public/login-signup/login-signup.component';


const routes: Routes = [
    {
        path: '',
        component: LoginSignupComponent
    },
    {
        path: 'auctions',
        loadChildren: async () => (await import('./modules/auctions/auctions.module')).AuctionsModule
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
