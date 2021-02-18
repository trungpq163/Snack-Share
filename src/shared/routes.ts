/* eslint-disable security/detect-object-injection */
const routes = {
    home: '/',
    login: '/login',
    register: '/register/:role',
    profile: '/finaldashboard',
    createprofile: '/create-profile',
    editprofile: '/edit-profile',
    addexperience: '/add-experience',
    addeducation: '/add-education',
    showcategory: '/ShowCategoryList',
    createCategoryAdmin: '/CreateCategoryAdmin',
    editCategoryAdmin: '/ShowCategoryList/edit/:id',
    showAllUsers: '/allusers',
    editUser: '/allusers/edit/:id',
    addCourse: '/addcourse/:id',
    allCourses: '/services',
    addLecture: '/add-lecture/:id',
    manageCourses: '/services/:id',
    courseDetails: '/course-details/:id',
    courseCheckout: '/checkout/:id',
    myCourses: '/servicesforstudent',
    courses: '/courses/:id',
    lesson: '/courses/:id/lessons/:lessons',
    dashboard: '/dashboard',
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
