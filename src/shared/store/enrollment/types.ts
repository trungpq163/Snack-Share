export type Enrollment = {
    no?: number;
    approved: boolean;
    course?: any;
    student: any;
};

export type Enrollments = {
    enrollments?: Enrollment[];
    loading?: boolean;
};

export type EnrollmentsState = Readonly<{
    enrollments: Enrollments;
}>;

export type Action = {
    type: string;
    payload?: any;
};
