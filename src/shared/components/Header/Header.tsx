import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/auth/selectors';

import { FilterStyles } from '../../styles/Filter.Styles';
import { HeaderStyles } from './Header.Styles';

const Header = () => {
    const auth = useSelector(getAuth);
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
                    <span className="filter-item active">Home</span>
                    <span className="filter-item">DashBoard</span>
                    <span className="filter-item">Users</span>
                    <span className="filter-item">Courses</span>
                    <span className="filter-item">Categories</span>
                    <span className="filter-item">Enrolled Users</span>
                    <span className="filter-item">Logout</span>
                </FilterStyles>
            ) : auth.users.role === 'instructor' ? (
                <FilterStyles>
                    <span className="filter-item active">Home</span>
                    <span className="filter-item">Courses</span>
                    <span className="filter-item">My Courses</span>
                    <span className="filter-item">Add Courses</span>
                    <span className="filter-item">Add Lecture</span>
                    <span className="filter-item">All Courses</span>
                    <span className="filter-item">Profile</span>
                    <span className="filter-item">All Profiles</span>
                    <span className="filter-item">Logout</span>
                </FilterStyles>
            ) : auth.users.role === 'student' ? (
                <FilterStyles>
                    <span className="filter-item active">Home</span>
                    <span className="filter-item">Courses</span>
                    <span className="filter-item">My Courses</span>
                    <span className="filter-item">Logout</span>
                </FilterStyles>
            ) : (
                <FilterStyles>
                    <Link to="/">
                        <span className="filter-item active">Home</span>
                    </Link>
                    <Link to="/student/login">
                        <span className="filter-item">Login</span>
                    </Link>
                    <span className="filter-item">Teach On SnackDev</span>
                </FilterStyles>
            )}
        </>
    );
};

export default Header;
