import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { getUserEff } from '../../../store/user/effects';
import { getUser } from '../../../store/user/selectors';
import EditUserContainer from '../../../containers/manage/EditUserContainer/EditUserContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const EditUser = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/users/edit/').join('');

    React.useEffect(() => {
        dispatch(getUserEff(pathNameHandle));
    }, [dispatch, pathNameHandle]);

    const user = useSelector(getUser);

    return (
        <>
            <PageHeader title="Edit User" />
            <EditUserContainer pathName={pathNameHandle} user={user} />
        </>
    );
};

export default EditUser;
