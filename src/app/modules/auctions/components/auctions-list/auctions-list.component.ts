import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {AuctionModel} from '../../../../shared/models/auction-models';
import {ActivatedRoute, Router} from '@angular/router';
import {AuctionService} from '../../../../shared/services/http/auction.service';
import {StoreService} from '../../../../shared/services/store.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AuctionWinnerDialogComponent } from '../auction-winner-dialog/auction-winner-dialog.component';

@Component({
    selector: 'app-auctions-list',
    templateUrl: './auctions-list.component.html',
    styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent implements OnInit {
    
    data: AuctionModel[];
    status = true;
    
    constructor(private route: ActivatedRoute,
                private service: AuctionService,
                private dialog: MatDialog,
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
        if (status) {
            this.service.getAll().subscribe(res => {
                this.data = res;
            }, err => {
                console.log(err);
                this.data = [];
            });
        } else {
            this.service.getExpired().subscribe(res => {
                this.data = res;
            })
        }
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

    setStatus(value: boolean): void {
        this.reload();
    }

    getWinner(id: number): void {
        // this.dialog.open(AuctionWinnerDialogComponent, {
        //     data: 'سید وحید نجفی'
        // });
        this.service.getWinner(id).subscribe(res => {
            this.dialog.open(AuctionWinnerDialogComponent, {
                data: res
            });
        });
    }
}
