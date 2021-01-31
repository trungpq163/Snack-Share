export type Profile = {
    profile?: any;
    profiles?: any;
    loading?: boolean;
};

export type ProfileState = Readonly<{
    profile: Profile;
}>;

export type Action = {
    type: string;
    payload?: any;
};
