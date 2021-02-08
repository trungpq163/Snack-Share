import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import CircleLoader from 'components/CircleLoader/CircleLoader';
import PageHeader from 'components/PageHeader/PageHeader';
import EditUserContainer from 'containers/EditUserContainer/EditUserContainer';

import { getUserEff } from 'store/user/effects';

const EditUser = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(true);

    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/allusers/edit/').join('');

    React.useEffect(() => {
        setLoading(false);
    }, []);

    React.useEffect(() => {
        dispatch(getUserEff(pathNameHandle));
    }, [dispatch, pathNameHandle]);

    return (
        <>
            <PageHeader title="Edit User" />
            {loading ? <CircleLoader /> : <EditUserContainer pathName={pathNameHandle} />}
        </>
    );
};

export default EditUser;
