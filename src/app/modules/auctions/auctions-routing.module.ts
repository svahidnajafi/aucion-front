import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuctionsComponent} from './auctions.component';
import {AuctionsResolverService} from '../../shared/services/resolvers/auctions-resolver.service';
import {UpsertAuctionComponent} from './components/upsert-auction/upsert-auction.component';
import {UpsertAuctionsResolverService} from '../../shared/services/resolvers/upsert-auction.resolver.service';
import {AuctionParticipateComponent} from './components/auction-participate/auction-participate.component';
import {AuctionsListComponent} from './components/auctions-list/auctions-list.component';
import { ParticipateAuctionResolverService } from 'src/app/shared/services/resolvers/participate-auction.resolver.service';

const routes: Routes = [
    {
        path: '',
        component: AuctionsComponent,
        children: [
            {
                path: '',
                component: AuctionsListComponent,
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
                component: AuctionParticipateComponent,
              resolve: {resolvedData: ParticipateAuctionResolverService}
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuctionsRoutingModule {
}
