import {CommonModule} from '@angular/common';
import {FlexModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material/material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgModule} from '@angular/core';
import {AuctionsRoutingModule} from './auctions-routing.module';
import {AuctionsComponent} from './auctions.component';
import {AuctionsListComponent} from './components/auctions-list/auctions-list.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {UpsertAuctionComponent} from './components/upsert-auction/upsert-auction.component';
import {PricePipe} from './pipes/price-pipe.pipe';
import {UnixToJalaliPipe} from './pipes/unix-to-jalali.pipe';
import { AuctionParticipateComponent } from './components/auction-participate/auction-participate.component';

@NgModule({
    declarations: [AuctionsComponent, AuctionsListComponent, NavBarComponent,
        UpsertAuctionComponent, PricePipe, UnixToJalaliPipe, AuctionParticipateComponent],
    exports: [PricePipe, UnixToJalaliPipe],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        FlexModule,
        MatDatepickerModule,
        AuctionsRoutingModule
    ]
})
export class AuctionsModule {
}
