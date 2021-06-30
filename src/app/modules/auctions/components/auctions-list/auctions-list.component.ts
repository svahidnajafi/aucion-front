import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {AuctionModel} from '../../../../shared/models/auction-models';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-auctions-list',
    templateUrl: './auctions-list.component.html',
    styleUrls: ['./auctions-list.component.scss']
})
export class AuctionsListComponent implements OnInit {
    @Input() model: AuctionModel[];
    @Output() createAuctionEvent = new EventEmitter<void>();
    @Output() reloadEvent = new EventEmitter<void>();
    @Output() editAuctionEvent = new EventEmitter<AuctionModel>();
    @Output() deleteAuctionEvent = new EventEmitter<number>();
    @Output() participationEvent = new EventEmitter<number>();
    constructor(private dialog: MatDialog) {
    }
    
    ngOnInit(): void {
    }
    
    logIt(id: number): void {
        console.log(id);
    }
    
    participate(id: number): void {
        this.participationEvent.emit(id);
    }
    
    reload(): void {
        this.reloadEvent.emit();
    }
    
    createAuction(): void {
        this.createAuctionEvent.emit();
    }
    
    edit(model: AuctionModel): void {
        this.editAuctionEvent.emit(model);
    }
    
    delete(id: number): void {
        console.log(id);
    }
}
