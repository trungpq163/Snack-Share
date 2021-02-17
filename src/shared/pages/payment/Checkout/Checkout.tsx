import * as React from 'react';

import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CheckoutContainer from 'containers/payment/CheckoutContainer/CheckoutContainer';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import { getProfile } from 'store/profile/selectors';
import { getCourses } from 'store/courses/selectors';

const Checkout = () => {
    const location = useLocation();

    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/checkout/').join('');
    const currentUser = useSelector(getProfile);
    const courses = useSelector(getCourses);

    // @ts-ignore
    const courseDetails = courses?.courses?.find((x) => x?._id === idCourse);

    const isAuthor = courseDetails?.instructor?._id === currentUser?.profile?.user?._id;

    return (
        <>
            {!isAuthor ? (
                <>
                    <PageHeader title="Checkout" />
                    <CheckoutContainer
                        idCourse={idCourse}
                        idUser={currentUser?.profile?.user?._id}
                    />
                </>
            ) : (
                <Redirect to="/" />
            )}
        </>
    );
};

export default Checkout;
