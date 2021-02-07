import * as React from 'react';
import { useDispatch } from 'react-redux';

import { getAllUsers } from 'store/users/effects';

import PageHeader from 'components/PageHeader/PageHeader';
import CircleLoader from 'components/CircleLoader/CircleLoader';
import ShowAllUsersContainer from 'containers/ShowAllUsersContainer/ShowAllUsersContainer';

const ShowAllUsers = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageHeader title="List Users" />
            {loading ? <CircleLoader /> : <ShowAllUsersContainer />}
        </>
    );
};

export default ShowAllUsers;
