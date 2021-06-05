let numberOfStars:number = 5;

export class ItemBasicData 
{
    constructor(id_:number)
    {
        this.reviewRatingCounts = new Array<ReviewRatingCount>(numberOfStars);

        this.id = id_;
    }

    name!: string;
    imageUrl!: string;

    price!: string;

    ratingAverage!: number;
    reviewRatingCounts!: ReviewRatingCount[];

    readonly id!: number;
}

export class ItemData extends ItemBasicData
{
    constructor(id_:number,sellerID_:number)
    {
        super(id_);

        this.sellerID = sellerID_;
    }

    readonly sellerID!: number;

    createdAt!:Date;
    modifiedAt!:Date;

    version!:number;

    createdBy!: string;
    modifiedBy!: number;

    code! : string;
    labels!: string[];

    status!: string;
    media!: string[];

    description! : string;
}

class ReviewRatingCount
{
    starRatingLevel!:number;
    reviewCount!:number;
}
