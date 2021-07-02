import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../../../shared/services/http/item.service';
import {AuctionService} from '../../../../shared/services/http/auction.service';
import {AuctionModel} from '../../../../shared/models/auction-models';
import {convertJalaliToUnix, convertUnixToJalaliDate} from '../../../../shared/functions/date-helpers';
import {ItemModel} from '../../../../shared/models/item-mdoels';
import {StoreService} from '../../../../shared/services/store.service';

@Component({
    selector: 'app-upsert-auction',
    templateUrl: './upsert-auction.component.html',
    styleUrls: ['./upsert-auction.component.scss']
})
export class UpsertAuctionComponent implements OnInit {
    isEdit: boolean;
    model: AuctionModel;
    selectedDate: any;
    description: string;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private auctionService: AuctionService,
                private itemService: ItemService) {
    }
    
    ngOnInit(): void {
        const resolvedData = this.route.snapshot.data.resolvedData;
        if (typeof resolvedData === 'object') {
            this.isEdit = true;
            this.description = resolvedData.description;
            this.model = JSON.parse(this.route.snapshot.queryParamMap.get('auction'));
            console.log(this.model);
            this.selectedDate = convertUnixToJalaliDate(this.model.expireDate);
        } else {
            this.model = new AuctionModel();
        }
    }
    
    submit(): void {
        this.model.expireDate = convertJalaliToUnix(this.selectedDate);
        console.log(this.model);
        const itemRequest: ItemModel = {
            description: this.description
        };
        
        if (this.isEdit) {
            itemRequest.id = this.model.id;
            console.log(itemRequest);
            this.itemService.edit(itemRequest.id, itemRequest).subscribe(res => {
                this.auctionService.edit(itemRequest.id, this.model).subscribe(() => {
                    this.returnToList();
                });
            });
        } else {
            this.itemService.create(itemRequest).subscribe(res => {
                this.auctionService.add(res.id, this.model).subscribe(() => {
                    this.returnToList();
                });
            });
        }
    }
    
    returnToList(): void {
        this.router.navigate(['auctions']);
    }
}
