import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuctionModel, ParticipateInAuctionModel} from '../../models/auction-models';
import {StoreService} from '../store.service';

@Injectable({
    providedIn: 'root'
})
export class AuctionService extends HttpService {
    
    constructor(protected store: StoreService, private http: HttpClient) {
        super(store);
    }
    
    add(itemId: number, model: AuctionModel): Observable<any> {
        return this.http.post(this.getRoute(`/auction/add/${itemId}`), model);
    }
    
    edit(auctionId: number, model: AuctionModel): Observable<any> {
        return this.http.put(this.getRoute(`/auction/edit/${auctionId}`), model);
    }
    
    getAll(): Observable<AuctionModel[]> {
        return this.http.get<AuctionModel[]>(this.getRoute('/auction/getAll'));
    }
    
    getWinner(auctionId: number): Observable<any> {
        return this.http.get(this.getRoute(`/auction/getExpiredAuctionWinner/${auctionId}`));
    }
    
    participateInAuction(auctionId: number, userId: number, model: ParticipateInAuctionModel): Observable<any> {
        return this.http.post(this.getRoute(`/auction/participateAuction/${auctionId}/${userId}`), model);
    }
}
