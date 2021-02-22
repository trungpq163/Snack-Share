/* eslint-disable security/detect-object-injection */
const routes = {
    home: '/',
    login: '/login',
    register: '/register/:role',
    profile: '/user/:id',
    createprofile: '/create-profile',
    editprofile: '/edit-profile',
    addexperience: '/add-experience',
    addeducation: '/add-education',
    categories: '/categories',
    createCategory: '/create-category',
    editCategory: '/categories/edit/:id',
    showAllUsers: '/users',
    editUser: '/users/edit/:id',
    addCourse: '/addcourse/:id',
    allCourses: '/courses',
    addLecture: '/add-lecture/:id',
    myCourses: '/my-courses',
    courseDetails: '/course-details/:id',
    courseCheckout: '/checkout/:id',
    myLearning: '/my-courses/learning/',
    courses: '/courses/:id',
    lesson: '/courses/:id/lessons/:lessons',
    dashboard: '/dashboard',
    enrollments: '/enrollments',
    createEnrollment: '/create-enrollment',
};

export const getRoute = (
    path: string,
    params?: { [key: string]: string | number },
    routesConfig: any = routes
) =>
    path.split('.').reduce((routeBranch: any, pathItem: string) => {
        if (routeBranch && routeBranch[pathItem]) {
            const route = routeBranch[pathItem];
            if (typeof route === 'string') {
                if (!params || typeof params === 'undefined') {
                    return route;
                }

                return Object.entries(params).reduce((replaced, [key, value]) => {
                    return replaced.replace(`:${key}`, String(value));
                }, route);
            }
            return routeBranch[pathItem];
        }
    }, routesConfig);

export default routes;
