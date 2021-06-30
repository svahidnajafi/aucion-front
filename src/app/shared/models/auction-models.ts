export class AuctionModel {
    id?: number;
    basePrice: number;
    expireDate: number;
    expired: boolean;
    finalPrice: number;
    increaseUnit: number;
    soldOut: boolean;
}

export class ParticipateInAuctionModel {
    id: number;
    suggestedDate: number;
    suggestedPrice: number;
    winner: boolean;
}
