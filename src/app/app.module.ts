import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressBarComponent} from './shared/components/progress-bar/progress-bar.component';
import {NgProgressModule} from 'ngx-progressbar';
import { LoginSignupComponent } from './public/login-signup/login-signup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServerCallInterceptor} from './shared/services/interceptors/server-call-interceptor.service';
import {MaterialModule} from './shared/material/material.module';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PricePipe} from './modules/auctions/pipes/price-pipe.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
    declarations: [
        AppComponent,
        ProgressBarComponent,
        LoginSignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgProgressModule,
        MaterialModule,
        MatDatepickerModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerCallInterceptor,
            multi: true
        },
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
