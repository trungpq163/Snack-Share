import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import { getAuth } from 'store/auth/selectors';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EditProfileContainer from 'containers/profile/EditProfileContainer/EditProfileContainer';

import { getProfile } from 'store/profile/selectors';
import { getCurrentProfile } from 'store/profile/effects';
import { dispatchSetCurrentUser } from 'store/auth/effects';

const EditProfile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(getProfile);
    const auth = useSelector(getAuth);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    React.useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    return (
        <>
            <PageHeader title="Edit Profile" />
            {profile?.loading ? (
                <CircleLoader />
            ) : (
                <EditProfileContainer
                    loading={profile.loading}
                    profile={profile.profile}
                    auth={auth}
                />
            )}
        </>
    );
};

export default EditProfile;
