export type Lecture = {
    no?: number;
    title?: string;
    videoLink?: string;
    course?: any;
};

export type Lectures = {
    lectures?: Lecture[];
    loading?: boolean;
};

export type LecturesState = Readonly<{
    lectures: Lectures;
}>;

export type Action = {
    type: string;
    payload?: any;
};
