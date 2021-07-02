import {HttpService} from './http.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginAndSignupResponse, UserModel} from '../../models/login-signup-models';
import {HttpClient} from '@angular/common/http';
import {StoreService} from '../store.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpService{
    
    constructor(protected store: StoreService, private http: HttpClient) {
        super(store);
    }
    
    login(model: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(this.getRoute('/user/login'), model);
    }
    
    signup(model: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>(this.getRoute('/user/signUp'), model);
    }
}
