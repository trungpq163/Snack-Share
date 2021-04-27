import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import EnrollmentsContainer from '../../../containers/manage/EnrollmentsContainer/EnrollmentsContainer';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getAllEnrollments } from '../../../store/enrollment/effects';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const Enrollments = () => {
    const dispatch = useDispatch();
    const enrollments = useSelector(getEnrollments);
    const { t } = useTranslation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getAllEnrollments());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.enrollStudent')}`} />
            {enrollments.loading ? (
                <CircleLoader />
            ) : (
                <EnrollmentsContainer enrollments={enrollments.enrollments} />
            )}
        </>
    );
};

export default Enrollments;
