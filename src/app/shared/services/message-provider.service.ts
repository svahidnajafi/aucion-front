import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageProviderService {
    
    private onMessageState = new Subject<string>();
    public onMessageState$ = this.onMessageState.asObservable();
    
    private onScrollTop = new Subject<string>();
    public onScrollTop$ = this.onScrollTop.asObservable();
    
    constructor() {
    }
    
    public propagate(message: string): void {
        this.onMessageState.next(message);
    }
    
    scrollToTop(): void {
        this.onScrollTop.next();
    }
}
