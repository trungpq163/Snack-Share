import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { useTranslation } from 'react-i18next';
import { getUserEff } from '../../../store/user/effects';
import { getUser } from '../../../store/user/selectors';
import EditUserContainer from '../../../containers/manage/EditUserContainer/EditUserContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const EditUser = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/users/edit/').join('');

    React.useEffect(() => {
        dispatch(getUserEff(pathNameHandle));
    }, [dispatch, pathNameHandle]);

    const user = useSelector(getUser);

    return (
        <>
            <PageHeader title={t('breadcrumb.editUser')} />
            <EditUserContainer pathName={pathNameHandle} user={user} />
        </>
    );
};

export default EditUser;
