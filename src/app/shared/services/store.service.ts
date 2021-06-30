import {Injectable} from '@angular/core';
import {UserModel} from '../models/login-signup-models';
import {AuctionModel} from '../models/auction-models';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    
    storageKey = 'auction_5469yuibsjna8ya657cfbaj';
    constructor() {}
    
    // tslint:disable-next-line:variable-name
    private _baseUrl: string;
    
    get baseUrl(): string {
        return this._baseUrl;
    }
    
    set baseUrl(value: string) {
        this._baseUrl = value;
    }
    
    get user(): UserModel {
        const encodedSession = sessionStorage.getItem(this.storageKey);
        if (encodedSession !== null)
        {
            const normalized = decodeURIComponent(escape(atob(encodedSession)));
            return JSON.parse(normalized);
        } else {
            return null;
        }
    }
    
    set user(model: UserModel) {
        const normalized = unescape(encodeURIComponent(JSON.stringify(model)));
        console.log(normalized);
        const sessionDataAsString = btoa(normalized);
        sessionStorage.setItem(this.storageKey, sessionDataAsString);
    }
    
    public async removeUser(): Promise<void> {
        await sessionStorage.removeItem(this.storageKey);
    }
    
    // tslint:disable-next-line:variable-name
    private _auction: AuctionModel;
    
    get auction(): AuctionModel {
        return this._auction;
    }
    
    set  auction(model: AuctionModel) {
        this._auction = model;
    }
    
}
