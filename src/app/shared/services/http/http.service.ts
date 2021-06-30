import {Injectable} from '@angular/core';
import {StoreService} from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected store: StoreService) {}

  protected getRoute(value: string): string {
    const base = this.store.baseUrl;
    return base + value;
  }
}
