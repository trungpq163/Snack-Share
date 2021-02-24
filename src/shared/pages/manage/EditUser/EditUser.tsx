import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EditUserContainer from 'containers/manage/EditUserContainer/EditUserContainer';

import { getUserEff } from 'store/user/effects';
import { getUser } from 'store/user/selectors';

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
