export type Course = {
    course?: {
        _id: string;
        courseName: string;
        image: string;
        courseDescription: string;
        instructor: string;
        category: string;
        language: string;
        price: number;
        skillLevel: string;
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
