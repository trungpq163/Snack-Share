import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import EditUserContainer from 'containers/manage/EditUserContainer/EditUserContainer';

import { getUserEff } from 'store/user/effects';

const EditUser = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/allusers/edit/').join('');

    React.useEffect(() => {
        dispatch(getUserEff(pathNameHandle));
    }, [dispatch, pathNameHandle]);

    return (
        <>
            <PageHeader title="Edit User" />
            <EditUserContainer pathName={pathNameHandle} />
        </>
    );
};

export default EditUser;
