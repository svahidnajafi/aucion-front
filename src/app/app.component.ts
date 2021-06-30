import {Component, OnInit} from '@angular/core';
import {MessageProviderService} from './shared/services/message-provider.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../environments/environment';
import {StoreService} from './shared/services/store.service';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    constructor(private messageProvider: MessageProviderService,
                private store: StoreService,
                private router: Router,
                private platformLocation: PlatformLocation,
                private snackBar: MatSnackBar) {
    }
    
    ngOnInit() {
        this.messageProvider.onMessageState$.subscribe(message => this.openSnackBar(message));
        if (environment.production) {
            this.store.baseUrl = (this.platformLocation as any).location.origin;
        } else {
            this.store.baseUrl = 'http://localhost:8080';
        }
        
        if (!this.store.user) {
            this.router.navigate(['login']);
        }
    }
    
    openSnackBar(message: string): void {
        this.snackBar.open(message, 'باشه!', {
            duration: 4000,
        });
    }
}
