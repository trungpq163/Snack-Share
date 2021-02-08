export type Course = {
    course?: {
        courseName: string;
        image: string;
        courseDescription: string;
        instructor: string;
        category: string;
    };
    loading?: boolean;
};

export type CourseState = Readonly<{
    course: Course;
}>;

export type Action = {
    type: string;
    payload?: any;
};
