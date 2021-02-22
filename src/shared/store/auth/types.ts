export type Auth = {
    isAuthenticated?: boolean;
    users?: any;
    loading?: boolean;
};

export type AuthState = Readonly<{
    auth: Auth;
}>;

export type Action = {
    type: string;
    payload?: any;
};
