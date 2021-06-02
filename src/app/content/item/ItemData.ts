let numberOfStars:number = 5;

export class ItemBasicData 
{
    constructor(id_:number)
    {
        this.reviewRatingCounts = new Array<ReviewRatingCount>(numberOfStars);

        this._id = id_;
    }

    name!: string;
    imageUrl!: string;

    price!: string;

    ratingAverage!: number;
    reviewRatingCounts!: ReviewRatingCount[];

    private _id!: number;

    public get id()
    {
        return this._id;
    }
}

export class ItemData extends ItemBasicData
{
    constructor(id_:number,sellerID_:number)
    {
        super(id_);

        this._sellerID = sellerID_;
    }

    private _sellerID!: number;

    createdAt!:Date;
    modifiedAt!:Date;

    version!:number;

    createdBy!: string;
    modifiedBy!: number;

    code! : string;
    labels!: string[];

    status!: string;
    mediaListUrl!: string[];

    description! : string;

    public get sellerID()
    {
        return this._sellerID;
    }
}

class ReviewRatingCount
{
    starRatingLevel!:number;
    reviewCount!:number;
}