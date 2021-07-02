import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../shared/models/login-signup-models';
import {UserService} from '../../shared/services/http/user.service';
import {StoreService} from '../../shared/services/store.service';
import {Router} from '@angular/router';
import {MessageProviderService} from '../../shared/services/message-provider.service';

@Component({
    selector: 'app-login-signup',
    templateUrl: './login-signup.component.html',
    styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
    
    model = new UserModel();
    isLogin = true;
    
    constructor(private service: UserService,
                private store: StoreService,
                private message: MessageProviderService,
                private router: Router) {
    }
    
    ngOnInit(): void {
    }
    
    login(): void {
        this.service.login(this.model).subscribe(res => {
            if (res) {
                this.store.user = res;
                this.router.navigate(['auctions']);
            } else {
                this.message.propagate('ورود با خطا مواجه شد.');
            }
        }, err => {
            console.warn(err);
        });
    }
    
    signup(): void {
        this.service.signup(this.model).subscribe(res => {
            if (res) {
                this.store.user = res;
                this.message.propagate('ثبت نام موفقیت آمیز بود.');
                this.router.navigate(['auctions']);
            } else {
                this.message.propagate('ثبت نام با خطا مواجه شد.');
            }
        }, err => {
            console.warn(err);
        });
    }
    
    toggleForm(): void {
        this.isLogin = !this.isLogin;
    }
}
