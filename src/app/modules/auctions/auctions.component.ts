import {Component, OnInit} from '@angular/core';
import {AuctionModel} from '../../shared/models/auction-models';
import {ActivatedRoute, Router} from '@angular/router';
import {AuctionService} from '../../shared/services/http/auction.service';
import {StoreService} from '../../shared/services/store.service';

@Component({
    selector: 'app-auctions',
    templateUrl: './auctions.component.html',
    styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit {
    
    constructor() {
    }
    
    ngOnInit(): void {}
}
