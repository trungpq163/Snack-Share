import React from 'react';
import { Link } from 'react-router-dom';
import { FilterStyles } from '../../../styles/Filter.Styles';
import { HeaderStyles } from './Header.Styles';

const Header = ({
    logout,
    auth,
    classNameHome,
    classNameDashboard,
    classNameUsers,
    classNameCourse,
    classNameCategory,
    classNameEnroll,
    classMyCourses,
    classAddCourse,
    classAddLecture,
    classAllCourses,
    classProfile,
    classNameLogin,
    classNameInstructor,
}: any) => {
    return (
        <>
            <HeaderStyles>
                <div className="container">
                    <h1 className="heading">
                        Snack<strong>Dev</strong>
                    </h1>
                    <p className="slogan">Share all knowledge we have with 😘</p>
                </div>
            </HeaderStyles>
            {auth?.users?.role === 'admin' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>Home</span>
                    </Link>
                    <Link to="/dashboard">
                        <span className={classNameDashboard}>DashBoard</span>
                    </Link>
                    <Link to="/allusers">
                        <span className={classNameUsers}>Users</span>
                    </Link>
                    <Link to="/ShowCourseList">
                        <span className={classNameCourse}>Courses</span>
                    </Link>
                    <Link to="/ShowCategoryList">
                        <span className={classNameCategory}>Categories</span>
                    </Link>
                    <Link to="/EnrollmentList">
                        <span className={classNameEnroll}>Enrolled Users</span>
                    </Link>
                    <Link to="" onClick={logout}>
                        <span className="filter-item">Logout</span>
                    </Link>
                </FilterStyles>
            ) : auth.users.role === 'instructor' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>Home</span>
                    </Link>
                    <Link to={`/services/${auth.users.id}`}>
                        <span className={classMyCourses}>My Courses</span>
                    </Link>
                    <Link to={`/addcourse/${auth.users.id}`}>
                        <span className={classAddCourse}>Add Courses</span>
                    </Link>
                    <Link to={`/add-lecture/${auth.users.id}`}>
                        <span className={classAddLecture}>Add Lecture</span>
                    </Link>
                    <Link to="/services">
                        <span className={classAllCourses}>All Courses</span>
                    </Link>
                    <Link to="/finaldashboard">
                        <span className={classProfile}>Profile</span>
                    </Link>
                    <Link to="" onClick={logout}>
                        <span className="filter-item">Logout</span>
                    </Link>
                </FilterStyles>
            ) : auth.users.role === 'student' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>Home</span>
                    </Link>
                    <Link to={`/servicesforstudent/${auth.users.id}`}>
                        <span className={classMyCourses}>My Courses</span>
                    </Link>
                    <Link to="/services">
                        <span className={classAllCourses}>All Courses</span>
                    </Link>
                    <Link to="" onClick={logout}>
                        <span className="filter-item">Logout</span>
                    </Link>
                </FilterStyles>
            ) : (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>Home</span>
                    </Link>
                    <Link to="/login/student">
                        <span className={classNameLogin}>Login</span>
                    </Link>
                    <Link to="/register/instructor">
                        <span className={classNameInstructor}>Teach On SnackDev</span>
                    </Link>
                </FilterStyles>
            )}
        </>
    );
};

export default Header;
