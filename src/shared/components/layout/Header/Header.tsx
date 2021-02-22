import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilterStyles } from '../../../styles/Filter.Styles';
import { HeaderStyles } from './Header.Styles';

const Header = ({
    logout,
    auth,
    classNameHome,
    classNameDashboard,
    classNameUsers,
    classNameCategory,
    classNameEnroll,
    classMyCourses,
    classAllCourses,
    classProfile,
    classNameLogin,
    classNameInstructor,
    classMyLearning,
}: any) => {
    const { t } = useTranslation();
    console.log('authHeader', auth);
    return (
        <>
            <HeaderStyles>
                <div className="container">
                    <h1 className="heading">
                        Snack<strong>Share</strong>
                    </h1>
                    <p className="slogan">Share all knowledge we have with 😘</p>
                </div>
            </HeaderStyles>
            {auth?.users?.role === 'admin' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>{t('nav.home')}</span>
                    </Link>
                    <Link to="/dashboard">
                        <span className={classNameDashboard}>{t('nav.dashBoard')}</span>
                    </Link>
                    <Link to="/allusers">
                        <span className={classNameUsers}>{t('nav.users')}</span>
                    </Link>
                    <Link to="/ShowCategoryList">
                        <span className={classNameCategory}>{t('nav.categories')}</span>
                    </Link>
                    <Link to="/EnrollmentList">
                        <span className={classNameEnroll}>{t('nav.enrolledUsers')}</span>
                    </Link>
                    <Link to="" onClick={logout}>
                        <span className="filter-item">{t('nav.logout')}</span>
                    </Link>
                </FilterStyles>
            ) : auth.users.role === 'instructor' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>{t('nav.home')}</span>
                    </Link>
                    <Link to={'/my-courses/learning/'}>
                        <span className={classMyLearning}>{t('nav.myLearning')}</span>
                    </Link>
                    <Link to="/my-courses">
                        <span className={classMyCourses}>{t('nav.myCourses')}</span>
                    </Link>
                    <Link to="/courses">
                        <span className={classAllCourses}>{t('nav.allCourses')}</span>
                    </Link>
                    <Link to={`/user/${auth?.users?.id}`}>
                        <span className={classProfile}>{t('nav.profile')}</span>
                    </Link>
                    <Link to="" onClick={logout}>
                        <span className="filter-item">{t('nav.logout')}</span>
                    </Link>
                </FilterStyles>
            ) : auth.users.role === 'student' ? (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>{t('nav.home')}</span>
                    </Link>
                    <Link to={'/my-courses/learning/'}>
                        <span className={classMyLearning}>{t('nav.myLearning')}</span>
                    </Link>
                    <Link to="/courses">
                        <span className={classAllCourses}>{t('nav.allCourses')}</span>
                    </Link>
                    <Link to={`/user/${auth?.users?.id}`}>
                        <span className={classProfile}>{t('nav.profile')}</span>
                    </Link>
                    <Link to="" onClick={logout}>
                        <span className="filter-item">{t('nav.logout')}</span>
                    </Link>
                </FilterStyles>
            ) : (
                <FilterStyles>
                    <Link to="/">
                        <span className={classNameHome}>{t('nav.home')}</span>
                    </Link>
                    <Link to="/login">
                        <span className={classNameLogin}>{t('nav.login')}</span>
                    </Link>
                    <Link to="/register/instructor">
                        <span className={classNameInstructor}>{t('nav.teachOnSnackDev')}</span>
                    </Link>
                </FilterStyles>
            )}
        </>
    );
};

export default Header;
