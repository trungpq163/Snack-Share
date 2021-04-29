import * as React from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import EditCategory from '../../../components/manage/EditCategory/EditCategory';

import { updateCategory } from '../../../store/category/effects';
import setData from '../../../utils/setData';

interface Props {
    loading?: any;
    category?: any;
    pathName?: any;
}

const EditCategoryContainer = ({ loading, category, pathName }: Props) => {
    const dispatch = useDispatch();
    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        categoryName: '',
        no: 1,
    });

    const [loader, setLoader] = React.useState(false);

    React.useEffect(() => {
        setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
    }, []);

    React.useEffect(() => {
        setValues({
            ...values,
            categoryName: category?.categoryName,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoader(true);

        const categoryData = {
            categoryName: values.categoryName,
            no: values.no,
        };

        dispatch(
            updateCategory(
                categoryData,
                pathName,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => {
                    setData(dispatch, decoded);
                    setLoader(false);
                }
            )
        );
    };

    return (
        <>
            {loading ? (
                <CircleLoader />
            ) : (
                <EditCategory
                    handleSubmit={handleSubmit}
                    values={values}
                    loader={loader}
                    handleChange={handleChange}
                />
            )}
        </>
    );
};

export default EditCategoryContainer;
