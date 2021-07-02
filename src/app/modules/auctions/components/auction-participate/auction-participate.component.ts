import {Component, OnInit, ViewChild} from '@angular/core';
import {AuctionModel, ParticipateInAuctionModel} from '../../../../shared/models/auction-models';
import {AuctionService} from '../../../../shared/services/http/auction.service';
import {ActivatedRoute, Router} from '@angular/router';
import {convertJalaliToUnix} from '../../../../shared/functions/date-helpers';
import {StoreService} from '../../../../shared/services/store.service';
import {NgForm, NgModel} from '@angular/forms';

@Component({
    selector: 'app-auction-participate',
    templateUrl: './auction-participate.component.html',
    styleUrls: ['./auction-participate.component.scss']
})
export class AuctionParticipateComponent implements OnInit {
    
    request = new ParticipateInAuctionModel();
    selectedDate: any;
    auction: AuctionModel;
    @ViewChild('suggestedPriceInput') suggestedPriceInput: NgModel;
    
    constructor(private service: AuctionService,
                private store: StoreService,
                private router: Router,
                private route: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.auction = JSON.parse(this.route.snapshot.queryParamMap.get('auction'));
        console.log(this.auction);
        console.log(this.store.user);
    }
    
    submit(): void {
        this.request.suggestedDate = convertJalaliToUnix(this.selectedDate);
        console.log(this.store.user);
        const userId = this.store.user.id;
        const auctionId = +this.route.snapshot.paramMap.get('id');
        this.service.participateInAuction(auctionId, userId, this.request).subscribe(() => {
            this.returnToList();
        });
    }
    
    returnToList(): void {
        this.router.navigate(['auctions']);
    }

    validateSuggestedPrice(value: any): void {
        if (value) {
            const {basePrice, increaseUnit} = this.auction;
            if (value < basePrice) {
                this.suggestedPriceInput.control.setErrors({incorrect: true});
            } else {
                const betAmount = value - basePrice;
                const result = this.countDecimals(betAmount / increaseUnit);
                console.log(result);
                if (result !== 0) {
                    this.suggestedPriceInput.control.setErrors({incorrect: true});
                } else {
                    this.suggestedPriceInput.control.setErrors({incorrect: null});
                    this.suggestedPriceInput.control.updateValueAndValidity();
                }
            }
        }
        console.log(this.suggestedPriceInput);
    }

    countDecimals(value: number): number {
        if (Math.floor(value.valueOf()) === value.valueOf()) return 0;
            return value.toString().split(".")[1].length || 0; 
    }
}
