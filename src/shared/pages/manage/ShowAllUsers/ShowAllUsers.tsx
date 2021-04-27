import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import ShowAllUsersContainer from '../../../containers/manage/ShowAllUsersContainer/ShowAllUsersContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import { getAllUsers } from '../../../store/users/effects';
import { getUsers } from '../../../store/users/selectors';

const ShowAllUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsers);
    const { t } = useTranslation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.userManagement')}`} />
            <ShowAllUsersContainer users={users} />
        </>
    );
};

export default ShowAllUsers;
