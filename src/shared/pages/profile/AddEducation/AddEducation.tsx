import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import AddEducationContainer from 'containers/profile/AddEducationContainer/AddEducationContainer';

import { getProfile } from 'store/profile/selectors';
import { getCurrentProfile } from 'store/profile/effects';
import { getAuth } from 'store/auth/selectors';
import { dispatchSetCurrentUser } from 'store/auth/effects';

const AddEducation = () => {
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
            <PageHeader title="Add Education" />
            {profile?.loading ? (
                <CircleLoader />
            ) : (
                <AddEducationContainer
                    loading={profile.loading}
                    profile={profile.profile}
                    auth={auth}
                />
            )}
        </>
    );
};

export default AddEducation;
