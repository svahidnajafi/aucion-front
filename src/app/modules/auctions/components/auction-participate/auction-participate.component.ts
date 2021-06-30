import {Component, OnInit} from '@angular/core';
import {ParticipateInAuctionModel} from '../../../../shared/models/auction-models';
import {AuctionService} from '../../../../shared/services/http/auction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {convertJalaliToUnix} from '../../../../shared/functions/date-helpers';
import {StoreService} from '../../../../shared/services/store.service';

@Component({
    selector: 'app-auction-participate',
    templateUrl: './auction-participate.component.html',
    styleUrls: ['./auction-participate.component.scss']
})
export class AuctionParticipateComponent implements OnInit {
    
    request = new ParticipateInAuctionModel();
    selectedDate: any;
    
    constructor(private service: AuctionService,
                private store: StoreService,
                private router: Router,
                private route: ActivatedRoute) {
    }
    
    ngOnInit(): void {
    }
    
    submit(): void {
        this.request.suggestedDate = convertJalaliToUnix(this.selectedDate);
        const userId = this.store.user ? this.store.user.id || 2 : 2;
        const auctionId = +this.route.snapshot.paramMap.get('id');
        this.service.participateInAuction(auctionId, userId, this.request).subscribe(() => {
            this.returnToList();
        });
    }
    
    returnToList(): void {
        this.router.navigate(['auctions']);
    }
}
