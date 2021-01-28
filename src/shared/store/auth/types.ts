export type Auth = {
    isAuthenticated: boolean;
    users: any;
};

export type AuthState = Readonly<{
    auth: Auth;
}>;

export type Action = {
    type: string;
    payload: any;
};
