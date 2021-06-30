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
    
    data: AuctionModel[];
    
    constructor(private route: ActivatedRoute,
                private service: AuctionService,
                private store: StoreService,
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
    
    createAuction(): void {
        this.router.navigate(['create'], {relativeTo: this.route});
    }
    
    deleteAuction(id: number): void {
    
    }
    
    editAuction(model: AuctionModel): void {
        this.store.auction = model;
        this.router.navigate([`edit/${model.id}`], {relativeTo: this.route});
    }
    
    reload(): void {
        this.service.getAll().subscribe(res => {
            this.data = res;
        }, err => {
            console.log(err);
            this.data = [];
        });
    }
    
    participateInAuction(id: number): void {
        this.router.navigate([`participate/${id}`], {relativeTo: this.route});
    }
}
