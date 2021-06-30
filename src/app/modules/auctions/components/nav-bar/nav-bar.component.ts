import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    
    name: string;
    
    constructor(private store: StoreService, private router: Router) {
    }
    
    ngOnInit(): void {
        this.name = this.store.user ? `${this.store.user.name} ${this.store.user.lastName}` : '';
    }
    
    async logout(): Promise<void> {
        await this.store.removeUser();
        await this.router.navigate(['login']);
    }
    
}
