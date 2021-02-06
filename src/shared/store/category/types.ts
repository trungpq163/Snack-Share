export type Category = {
    category?: any;
    loading?: boolean;
};

export type CategoryState = Readonly<{
    category: Category;
}>;

export type Action = {
    type: string;
    payload?: any;
};
