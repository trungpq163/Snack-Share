import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CreateCategoryContainer from '../../../containers/manage/CreateCategoryContainer/CreateCategoryContainer';

const CreateCategory = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.createCategory')}`} />
            <CreateCategoryContainer />
        </>
    );
};

export default CreateCategory;
