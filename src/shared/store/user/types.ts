export type User = {
    user?: {
        // eslint-disable-next-line camelcase
        first_name?: string;
        // eslint-disable-next-line camelcase
        last_name?: string;
        email?: string;
        password?: string;
        role?: string;
    };
    loading?: boolean;
};

export type UserState = Readonly<{
    user: User;
}>;

export type Action = {
    type: string;
    payload?: any;
};
