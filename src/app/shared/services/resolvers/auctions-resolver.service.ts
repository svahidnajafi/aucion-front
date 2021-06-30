import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AuctionService} from '../http/auction.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuctionsResolverService implements Resolve<any> {
    constructor(private service: AuctionService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.service.getAll().pipe(
            tap(res => {
                console.log(res);
            })
        );
    }
    
}
