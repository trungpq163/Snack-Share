import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/auth/selectors';

import { FilterStyles } from '../../styles/Filter.Styles';
import { HeaderStyles } from './Header.Styles';

const Header = () => {
    const auth = useSelector(getAuth);
    if (typeof window !== 'undefined') {
        localStorage.setItem('userid', JSON.stringify(auth.users.id));
        localStorage.setItem('userRole', JSON.stringify(auth.users.role));
    }
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
                        <span className="filter-item active">Home</span>
                    </Link>
                    <Link to="/dashboard">
                        <span className="filter-item">DashBoard</span>
                    </Link>
                    <Link to="/allusers">
                        <span className="filter-item">Users</span>
                    </Link>
                    <Link to="/ShowCourseList">
                        <span className="filter-item">Courses</span>
                    </Link>
                    <Link to="/ShowCategoryList">
                        <span className="filter-item">Categories</span>
                    </Link>
                    <Link to="/EnrollmentList">
                        <span className="filter-item">Enrolled Users</span>
                    </Link>
                    <Link to="">
                        <span className="filter-item">Logout</span>
                    </Link>
                </FilterStyles>
            ) : auth.users.role === 'instructor' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className="filter-item active">Home</span>
                    </Link>
                    <Link to={`/services/${auth.users.id}`}>
                        <span className="filter-item">My Courses</span>
                    </Link>
                    <Link to={`/addcourse/${auth.users.id}`}>
                        <span className="filter-item">Add Courses</span>
                    </Link>
                    <Link to={`/add-lecture/${auth.users.id}`}>
                        <span className="filter-item">Add Lecture</span>
                    </Link>
                    <Link to="/services">
                        <span className="filter-item">All Courses</span>
                    </Link>
                    <Link to="/finaldashboard">
                        <span className="filter-item">Profile</span>
                    </Link>
                    <Link to="/finalprofiles">
                        <span className="filter-item">All Profiles</span>
                    </Link>
                    <span className="filter-item">Logout</span>
                </FilterStyles>
            ) : auth.users.role === 'student' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className="filter-item active">Home</span>
                    </Link>
                    <Link to={`/servicesforstudent/${auth.users.id}`}>
                        <span className="filter-item">My Courses</span>
                    </Link>
                    <Link to="/services">
                        <span className="filter-item">All Courses</span>
                    </Link>
                    <Link to="">
                        <span className="filter-item">Logout</span>
                    </Link>
                </FilterStyles>
            ) : (
                <FilterStyles>
                    <Link to="/">
                        <span className="filter-item active">Home</span>
                    </Link>
                    <Link to="/login/student">
                        <span className="filter-item">Login</span>
                    </Link>
                    <Link to="/login/instructor">
                        <span className="filter-item">Teach On SnackDev</span>
                    </Link>
                </FilterStyles>
            )}
        </>
    );
};

export default Header;
