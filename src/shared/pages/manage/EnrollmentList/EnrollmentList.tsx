import * as React from 'react';
import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EnrollmentListContainer from 'containers/manage/EnrollmentListContainer/EnrollmentListContainer';

import { getEnrollments } from 'store/enrollment/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const EnrollmentList = () => {
    const enrollments = useSelector(getEnrollments);
    return (
        <>
            <PageHeader title="Enrolled User" />
            {enrollments.loading ? (
                <CircleLoader />
            ) : (
                <EnrollmentListContainer enrollments={enrollments.enrollments} />
            )}
        </>
    );
};

export default EnrollmentList;
