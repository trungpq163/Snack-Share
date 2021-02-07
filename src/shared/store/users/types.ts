export type User = {
    // eslint-disable-next-line camelcase
    first_name?: string;
    // eslint-disable-next-line camelcase
    last_name?: string;
    email?: string;
    password?: string;
    role?: string;
};

export type Users = {
    users?: User[];
    loading?: boolean;
};

export type UsersState = Readonly<{
    users: Users;
}>;

export type Action = {
    type: string;
    payload?: any;
};
