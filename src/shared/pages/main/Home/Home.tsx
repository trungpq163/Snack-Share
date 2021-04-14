import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import LanguageButton from '../../../components/layout/LanguageButton/LanguageButton';
import MainLoader from '../../../components/loader/MainLoader/MainLoader';
import { getCourses } from '../../../store/courses/selectors';
import { getAllCourses } from '../../../store/courses/effects';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getAllEnrollments } from '../../../store/enrollment/effects';
import CourseOne from '../../../components/common/CourseOne/CourseOne';
import Partners from '../../../components/layout/Partners/Partners';
import Introduction from '../../../components/layout/Introduction/Introduction';

const App: React.FC<any> = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const courses = useSelector(getCourses);
    const enrollments = useSelector(getEnrollments);
    const [loading, setLoading] = useState(true);

    const pathname = location?.pathname;

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getAllEnrollments());
    }, [dispatch]);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    if (loading === false) {
        return (
            <>
                <Introduction />
                <CourseOne
                    courses={courses.courses || {}}
                    loading={courses.loading || enrollments.loading}
                    enrollments={enrollments.enrollments}
                    pathname={pathname}
                />
                <Partners />
                <LanguageButton />
            </>
        );
    }
    return <MainLoader />;
};

export default App;
