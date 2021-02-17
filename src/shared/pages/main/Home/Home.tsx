import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LanguageButton from 'components/layout/LanguageButton/LanguageButton';
import { getCourses } from 'store/courses/selectors';
import { getAllCourses } from 'store/courses/effects';
import MainLoader from 'components/loader/MainLoader/MainLoader';
import CourseOne from '../../../components/common/CourseOne/CourseOne';
import Partners from '../../../components/layout/Partners/Partners';
import Introduction from '../../../components/layout/Introduction/Introduction';

const App: React.FC<any> = () => {
    const dispatch = useDispatch();
    const courses = useSelector(getCourses);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    if (loading === false) {
        return (
            <>
                <Introduction />
                <CourseOne courses={courses.courses || {}} loading={courses.loading} />
                <Partners />
                <LanguageButton />
            </>
        );
    }
    return <MainLoader />;
};

export default App;
