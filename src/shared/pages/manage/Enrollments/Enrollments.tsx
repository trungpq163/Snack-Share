import * as React from 'react';
import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EnrollmentsContainer from 'containers/manage/EnrollmentsContainer/EnrollmentsContainer';
import { getEnrollments } from 'store/enrollment/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const Enrollments = () => {
    const enrollments = useSelector(getEnrollments);
    return (
        <>
            <PageHeader title="Enrolled User" />
            {enrollments.loading ? (
                <CircleLoader />
            ) : (
                <EnrollmentsContainer enrollments={enrollments.enrollments} />
            )}
        </>
    );
};

export default Enrollments;
