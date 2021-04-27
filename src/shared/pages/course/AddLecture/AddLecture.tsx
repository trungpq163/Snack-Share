import * as React from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useTranslation } from 'react-i18next';
import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import { getAuth } from '../../../store/auth/selectors';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getCurrentProfile } from '../../../store/profile/effects';
import { getAllCourses } from '../../../store/courses/effects';
import { getProfile } from '../../../store/profile/selectors';
import { getCourses } from '../../../store/courses/selectors';
import AddLectureContainer from '../../../containers/course/AddLectureContainer/AddLectureContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const AddLecture = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/add-lecture/').join('');

    const data = useSelector(getCourses);
    // @ts-ignore
    const course = data?.courses?.find((x) => x?._id === idCourse);

    const currentUser = useSelector(getProfile);
    const auth = useSelector(getAuth);
    const isAuthor = course?.instructor?._id === auth?.users?.id;

    React.useEffect(() => {
        dispatch(getAllCourses());
        if (localStorage.jwtToken) {
            dispatch(getCurrentProfile());
        }
    }, [dispatch]);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    return (
        <>
            {!isAuthor ? (
                <Redirect to="/" />
            ) : (
                <>
                    <PageHeader title={t('nav.addLecture')} />
                    {data.loading || currentUser.loading ? (
                        <CircleLoader />
                    ) : (
                        <AddLectureContainer
                            isAuthor={isAuthor}
                            currentUser={currentUser.profile}
                            course={course}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default AddLecture;
