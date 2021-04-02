import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { getAuth } from 'store/auth/selectors';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getAllEnrollments } from '../../../store/enrollment/effects';

import ManageYourStudentContainer from '../../../containers/manage/ManageYourStudentContainer/ManageYourStudentContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const ManageYourStudent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const enrollments = useSelector(getEnrollments);
    const auth = useSelector(getAuth);
    const idCourse = location?.pathname?.split('/manage-your-student/').join('');
    const { t } = useTranslation();

    React.useEffect(() => {
        dispatch(getAllEnrollments());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={`${t('manageYourStudent.manageYourStudent')}`} />
            {enrollments.loading || auth.loading ? (
                <CircleLoader />
            ) : (
                <ManageYourStudentContainer
                    enrollments={enrollments.enrollments}
                    idInstructor={auth.users.id}
                    idCourse={idCourse}
                />
            )}
        </>
    );
};

export default ManageYourStudent;
