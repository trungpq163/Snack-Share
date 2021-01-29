export type Errors = object;

export type ErrorsState = Readonly<{
    errors: Errors;
}>;

export type Action = {
    type: string;
    payload: any;
};
