export class ItemBasicData 
{
    id!: number;

    name!: string ;
    mediaUri!: string;

    price!: number;

    ratingAverage!: number;
    numberOfRatings!: number;

}

export class ItemData extends ItemBasicData
{

    code! : string;
    labels!: string[];

    inStock!: boolean;

    //************TBD*******
    mediaListUri!: string[];
    details! : string;

    specifications!: string;
    //**********TBD**********/

    listReviews!: ReviewItemData[];
}

class ReviewItemData
{
    username!: string;
    profileImgUri!: string;

    rating! :number;
    date! :Date;

    title!: string;
    message!: string;
}