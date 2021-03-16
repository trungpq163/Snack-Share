import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ShowAllUsersContainer from '../../../containers/manage/ShowAllUsersContainer/ShowAllUsersContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import { getAllUsers } from '../../../store/users/effects';
import { getUsers } from '../../../store/users/selectors';

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
