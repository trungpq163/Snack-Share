import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EnrollmentsContainer from 'containers/manage/EnrollmentsContainer/EnrollmentsContainer';
import { getEnrollments } from 'store/enrollment/selectors';
import { getAllEnrollments } from 'store/enrollment/effects';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const Enrollments = () => {
    const dispatch = useDispatch();
    const enrollments = useSelector(getEnrollments);

    React.useEffect(() => {
        dispatch(getAllEnrollments());
    }, [dispatch]);

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
