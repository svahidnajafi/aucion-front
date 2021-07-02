import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AuctionService} from '../http/auction.service';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ItemService} from '../http/item.service';
import {StoreService} from '../store.service';

@Injectable({
    providedIn: 'root'
})
export class UpsertAuctionsResolverService implements Resolve<any> {
    constructor(private service: ItemService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        console.log(route.paramMap.get('id'));
        if (route.routeConfig.path.includes('create')) {
            return of(true);
        } else {
            return this.service.getSingle(+route.paramMap.get('id'));
        }
    }
    
}
