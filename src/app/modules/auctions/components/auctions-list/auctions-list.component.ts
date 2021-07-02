import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {AuctionModel} from '../../../../shared/models/auction-models';
import {ActivatedRoute, Router} from '@angular/router';
import {AuctionService} from '../../../../shared/services/http/auction.service';
import {StoreService} from '../../../../shared/services/store.service';

@Component({
    selector: 'app-auctions-list',
    templateUrl: './auctions-list.component.html',
    styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent implements OnInit {
    
    data: AuctionModel[];
    
    constructor(private route: ActivatedRoute,
                private service: AuctionService,
                private router: Router) {
    }
    
    ngOnInit(): void {
        const resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData) {
            this.data = resolvedData;
            console.log(this.data);
        } else {
            this.data = [];
        }
    }
    
    logIt(id: number): void {
        console.log(id);
    }
    
    participate(model: AuctionModel): void {
        this.router.navigate([`participate/${model.id}`], {
            relativeTo: this.route,
            queryParams: {auction: JSON.stringify(model)}
        });
    }
    
    reload(): void {
        this.service.getAll().subscribe(res => {
            this.data = res;
        }, err => {
            console.log(err);
            this.data = [];
        });
    }
    
    createAuction(): void {
        this.router.navigate(['create'], {relativeTo: this.route});
    }
    
    edit(model: AuctionModel): void {
        console.log(model);
        this.router.navigate([`edit/${model.id}`], {
            relativeTo: this.route,
            queryParams: {auction: JSON.stringify(model)}
        });
    }
    
    delete(id: number): void {
        console.log(id);
    }
}
