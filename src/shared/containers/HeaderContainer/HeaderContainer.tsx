import React, { FormEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from '../../store/auth/selectors';

import { logoutUser } from '../../store/auth/effects';

import Header from '../../components/Header/Header';

const HeaderContainer = () => {
    const auth = useSelector(getAuth);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const checkHomeRoute = location?.pathname === '/';
    const checkLoginRoute = location?.pathname?.includes('login');
    const checkInstructorRoute = location?.pathname === '/register/instructor';
    const checkDashboardRoute = location?.pathname === '/dashboard';
    const checkUsersRoute = location?.pathname === '/allusers';
    const checkCourseRoute = location?.pathname === '/ShowCourseList';
    const checkCategoryRoute =
        location?.pathname?.includes('Category') || location?.pathname?.includes('category');
    const checkEnrollRoute = location?.pathname === '/EnrollmentList';
    const checkMyCoursesRoute =
        location?.pathname?.includes(`/services/${auth.users.id}`) ||
        location?.pathname?.includes('/servicesforstudent/');
    const CheckAddcourseRoute = location?.pathname?.includes('addcourse');
    const checkAddLectureRoute = location?.pathname?.includes('add-lecture');
    const checkAllCoursesRoute = location?.pathname === '/services';
    const checkProfileRoute = location?.pathname === '/finaldashboard';

    const allClass = {
        classNameHome: `filter-item ${checkHomeRoute ? 'active' : ''}`,
        classNameInstructor: `filter-item ${checkInstructorRoute ? 'active' : ''}`,
        classNameLogin: `filter-item ${checkLoginRoute ? 'active' : ''}`,
        classNameDashboard: `filter-item ${checkDashboardRoute ? 'active' : ''}`,
        classNameUsers: `filter-item ${checkUsersRoute ? 'active' : ''}`,
        classNameCourse: `filter-item ${checkCourseRoute ? 'active' : ''}`,
        classNameCategory: `filter-item ${checkCategoryRoute ? 'active' : ''}`,
        classNameEnroll: `filter-item ${checkEnrollRoute ? 'active' : ''}`,
        classMyCourses: `filter-item ${checkMyCoursesRoute ? 'active' : ''}`,
        classAddCourse: `filter-item ${CheckAddcourseRoute ? 'active' : ''}`,
        classAddLecture: `filter-item ${checkAddLectureRoute ? 'active' : ''}`,
        classAllCourses: `filter-item ${checkAllCoursesRoute ? 'active' : ''}`,
        classProfile: `filter-item ${checkProfileRoute ? 'active' : ''}`,
    };

    if (typeof window !== 'undefined') {
        localStorage.setItem('userid', JSON.stringify(auth.users.id));
        localStorage.setItem('userRole', JSON.stringify(auth.users.role));
    }

    const logoutClick = (e: FormEvent) => {
        e.preventDefault();
        dispatch(logoutUser(() => history?.push('/')));
    };

    return <Header logout={logoutClick} auth={auth} {...allClass} />;
};

export default HeaderContainer;
