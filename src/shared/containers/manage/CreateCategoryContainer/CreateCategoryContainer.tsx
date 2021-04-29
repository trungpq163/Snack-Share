import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../store/category/effects';
import setData from '../../../utils/setData';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';
import CreateCategory from '../../../components/manage/CreateCategory/CreateCategory';

const CreateCategoryContainer = () => {
    const dispatch = useDispatch();
    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        categoryName: '',
        no: 1,
    });

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
    }, []);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const categoryData = {
            no: values.no,
            categoryName: values.categoryName,
        };

        dispatch(
            addCategory(
                categoryData,
                (err: string) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => {
                    setValues({
                        categoryName: '',
                        no: 1,
                    });
                    setLoading(false);
                },
                () => setData(dispatch, decoded)
            )
        );
    };

    return (
        <CreateCategory
            handleSubmit={handleSubmit}
            values={values}
            handleChange={handleChange}
            loading={loading}
        />
    );
};

export default CreateCategoryContainer;
