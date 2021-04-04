export type Rating = {
    user: any;
    course: any;
    content: string;
    star: any;
};

export type Ratings = {
    ratings?: Rating[];
    loading?: boolean;
};

export type RatingsState = Readonly<{
    ratings: Ratings;
}>;

export type Action = {
    type: string;
    payload?: any;
};
