import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuctionsComponent} from './auctions.component';
import {AuctionsResolverService} from '../../shared/services/resolvers/auctions-resolver.service';
import {UpsertAuctionComponent} from './components/upsert-auction/upsert-auction.component';
import {UpsertAuctionsResolverService} from '../../shared/services/resolvers/upsert-auction.resolver.service';
import {AuctionParticipateComponent} from './components/auction-participate/auction-participate.component';

const routes: Routes = [
    {
        path: '',
        component: AuctionsComponent,
        resolve: {resolvedData: AuctionsResolverService}
    },
    {
        path: 'create',
        component: UpsertAuctionComponent,
        resolve: {resolvedData: UpsertAuctionsResolverService}
    },
    {
        path: 'edit/:id',
        component: UpsertAuctionComponent,
        resolve: {resolvedData: UpsertAuctionsResolverService}
    },
    {
        path: 'participate/:id',
        component: AuctionParticipateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuctionsRoutingModule {
}
