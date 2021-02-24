import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllUsers } from 'store/users/effects';
import { getUsers } from 'store/users/selectors';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import ShowAllUsersContainer from 'containers/manage/ShowAllUsersContainer/ShowAllUsersContainer';

const ShowAllUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsers);

    React.useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <>
            <PageHeader title="List Users" />
            <ShowAllUsersContainer users={users} />
        </>
    );
};

export default ShowAllUsers;
