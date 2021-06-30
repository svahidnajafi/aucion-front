import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemModel} from '../../models/item-mdoels';
import {StoreService} from '../store.service';

@Injectable({
    providedIn: 'root'
})
export class ItemService extends HttpService {
    
    constructor(protected store: StoreService, private http: HttpClient) {
        super(store);
    }
    
    getSingle(id: number): Observable<ItemModel> {
        return this.http.get<ItemModel>(this.getRoute(`/item/get/${id}`));
    }
    
    create(model: ItemModel): Observable<ItemModel> {
        return this.http.post<ItemModel>(this.getRoute('/item/add'), model);
    }
    
    edit(id: number, model: ItemModel): Observable<ItemModel> {
        return this.http.put<ItemModel>(this.getRoute(`/item/edit/${id}`), model);
    }
}
