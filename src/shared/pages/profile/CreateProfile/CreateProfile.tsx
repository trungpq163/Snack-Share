import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import { getAuth } from '../../../store/auth/selectors';
import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import CreateProfileContainer from '../../../containers/profile/CreateProfileContainer/CreateProfileContainer';

const CreateProfile = () => {
    const dispatch = useDispatch();
    const auth = useSelector(getAuth);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    return (
        <div>
            <PageHeader title="Create Profile" />
            <CreateProfileContainer auth={auth} />
        </div>
    );
};

export default CreateProfile;
