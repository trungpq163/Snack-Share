import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import CreateCategory from 'components/manage/CreateCategory/CreateCategory';

import { addCategory } from 'store/category/effects';
import setData from 'utils/setData';

const CreateCategoryContainer = () => {
    const dispatch = useDispatch();
    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        categoryName: '',
        no: 1,
    });

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

        const categoryData = {
            no: values.no,
            categoryName: values.categoryName,
        };

        dispatch(
            addCategory(
                categoryData,
                (err: string) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        categoryName: '',
                        no: 1,
                    }),
                () => setData(dispatch, decoded)
            )
        );
    };

    return (
        <CreateCategory handleSubmit={handleSubmit} values={values} handleChange={handleChange} />
    );
};

export default CreateCategoryContainer;
