import * as React from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { getAuth } from '../../../store/auth/selectors';
import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import { getAllCourses } from '../../../store/courses/effects';
import { getCourses } from '../../../store/courses/selectors';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CheckoutContainer from '../../../containers/payment/CheckoutContainer/CheckoutContainer';

const Checkout = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/checkout/').join('');
    const currentUser = useSelector(getAuth);
    const courses = useSelector(getCourses);

    React.useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    // @ts-ignore
    const courseDetails = courses?.courses?.find((x) => x?._id === idCourse);

    const isAuthor = courseDetails?.instructor?._id === currentUser?.users?.id;
    console.log('courseDetails', courseDetails);
    return (
        <>
            {!isAuthor ? (
                <>
                    <PageHeader title="Checkout" />
                    <CheckoutContainer
                        idCourse={idCourse}
                        idUser={currentUser?.users?.id}
                        price={courseDetails?.price || 0}
                    />
                </>
            ) : (
                <Redirect to="/" />
            )}
        </>
    );
};

export default Checkout;
