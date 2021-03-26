export type Locale = 'en_US' | 'vi_VN';

export type AppState = Readonly<{
    locale: Locale;
}>;

export type Action = {
    type: string;
    payload: any;
};
