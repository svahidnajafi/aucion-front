import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ItemService } from "../http/item.service";
import { MessageProviderService } from "../message-provider.service";

@Injectable({
  providedIn: 'root'
})
export class ParticipateAuctionResolverService implements Resolve<any> {
  constructor(private service: ItemService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.service.getSingle(+id);
  }

}
