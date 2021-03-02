export type Course = {
    _id: string;
    courseName?: string;
    image?: string;
    courseDescription?: string;
    instructor?: any;
    category?: any;
    language: string;
    price: number;
    skillLevel: string;
};

export type Courses = {
    courses?: Course[];
    loading?: boolean;
};

export type CoursesState = Readonly<{
    courses: Courses;
}>;

export type Action = {
    type: string;
    payload?: any;
};
