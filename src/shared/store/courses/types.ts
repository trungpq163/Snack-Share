export type Course = {
    courseName?: string;
    image?: string;
    courseDescription?: string;
    instructor?: any;
    category?: any;
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
