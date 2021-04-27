import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getUsers } from '../../../store/users/selectors';
import { getCourses } from '../../../store/courses/selectors';
import { getAllUsers } from '../../../store/users/effects';
import { getAllCourses } from '../../../store/courses/effects';
import CreateEnrollmentContainer from '../../../containers/manage/CreateEnrollmentContainer/CreateEnrollmentContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const CreateEnrollment = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsers);
    const courses = useSelector(getCourses);
    const { t } = useTranslation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllCourses());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.createEnrollment')}`} />
            {users.loading || courses.loading ? (
                <CircleLoader />
            ) : (
                <CreateEnrollmentContainer users={users.users} courses={courses.courses} />
            )}
        </>
    );
};

export default CreateEnrollment;
