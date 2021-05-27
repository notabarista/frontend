let numberOfStars:number = 5;

export class ItemBasicData 
{
    constructor(id_:number)
    {
        this.reviewRatingCounts = new Array<number>(numberOfStars);
        this._id = id_;
    }

    protected _id!: number;

    name!: string;
    imageUrl!: string;

    price!: string;

    public get id()
    {
        return this._id;
    }

    ratingAverage!: number;
    reviewRatingCounts!:number[]; 

}

export class ItemData extends ItemBasicData
{
    constructor(id_:number)
    {
        super(id_);
    }

    code! : string;
    labels!: string[];

    vendor!: string[];

    isActive!: boolean;
    mediaListUrl!: string[];

    description! : string;
    listReviews!: ReviewItemData[];
}

class ReviewItemData
{
    username!: string;
    profileImgUrl!: string;

    rating! :number;
    date! :Date;

    title!: string;
    message!: string;

    likes!:number;
}