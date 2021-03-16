/* eslint-disable camelcase */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router';
import jwtDecode from 'jwt-decode';
import { getProfile } from '../../../store/profile/selectors';
import { getAuth } from '../../../store/auth/selectors';
import { getCourses } from '../../../store/courses/selectors';

import { getAllEnrollments } from '../../../store/enrollment/effects';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import { getCurrentProfile } from '../../../store/profile/effects';
import { getAllCourses } from '../../../store/courses/effects';
import NotFound from '../../../pages/common/NotFound/NotFound';
import OtherProfileDetails from '../../../components/profile/OtherProfileDetails/OtherProfileDetails';
import ProfileDetails from '../../../components/profile/ProfileDetails/ProfileDetails';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const Profile = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const auth = useSelector(getAuth);
    const enrollments = useSelector(getEnrollments);
    const profile = useSelector(getProfile);
    const courses = useSelector(getCourses);
    const idUser = location?.pathname?.split('/user/').join('');
    const otherProfile = profile?.profiles?.find((x: any) => x.user?._id === idUser);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    React.useEffect(() => {
        dispatch(getAllEnrollments());
        dispatch(getCurrentProfile());
        dispatch(getAllCourses());
    }, [dispatch]);

    const isOwner = auth?.users?.id === idUser;

    const firstLetterUppercase = (str: string = ''): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            {!isOwner && otherProfile ? (
                <>
                    {courses?.loading || enrollments?.loading || profile.loading || auth.loading ? (
                        <>
                            <PageHeader title="Loading..............." />
                            <CircleLoader />
                        </>
                    ) : (
                        <>
                            <PageHeader title={otherProfile?.handle} />
                            <OtherProfileDetails
                                auth={auth}
                                enrollments={enrollments.enrollments}
                                idUser={idUser}
                                profile={otherProfile}
                                courses={courses?.courses}
                                name={
                                    `${firstLetterUppercase(
                                        // eslint-disable-next-line camelcase
                                        auth?.users.first_name
                                        // eslint-disable-next-line camelcase
                                    )} ${firstLetterUppercase(auth?.users.last_name)}` ||
                                    'nothing here'
                                }
                            />
                        </>
                    )}
                </>
            ) : !isOwner && !otherProfile ? (
                <>{profile.loading || auth.loading ? <CircleLoader /> : <NotFound />}</>
            ) : (
                <>
                    {profile.loading || auth.loading ? (
                        <>
                            <PageHeader title="Loading................." />
                            <CircleLoader />
                        </>
                    ) : (
                        <>
                            <PageHeader
                                title={
                                    profile?.profile?.handle ||
                                    `${auth?.users?.first_name} ${auth?.users?.last_name}`
                                }
                            />
                            <ProfileDetails
                                auth={auth}
                                profile={profile.profile}
                                name={
                                    `${firstLetterUppercase(
                                        // eslint-disable-next-line camelcase
                                        auth?.users.first_name
                                        // eslint-disable-next-line camelcase
                                    )} ${firstLetterUppercase(auth?.users.last_name)}` ||
                                    'nothing here'
                                }
                            />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Profile;
