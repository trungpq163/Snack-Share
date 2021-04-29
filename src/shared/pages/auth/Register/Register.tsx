import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';
import { User } from '../../../types';

import { CenterComponent } from '../../../styles/CenterComponent';
import RegisterDumb from '../../../components/auth/Register/Register';
import { registerUser } from '../../../store/auth/effects';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';

const Register = ({ match }: any) => {
    const dispatch = useDispatch();
    const roleParams = match.params.role;
    const history = useHistory();

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
    });

    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const clickSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const user: User = {
            first_name: values.first_name || '',
            last_name: values.last_name || '',
            email: values.email || '',
            password: values.password || '',
            password2: values.password2 || '',
            role: roleParams || '',
        };

        dispatch(
            registerUser(
                JSON.stringify(user),
                (message: string) => toastSuccessNotify(message),
                (err: any) => toastErrorNotify(err),
                () => {
                    setValues({
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        password2: '',
                    });
                    setLoading(false);
                },
                () => history.push('/login')
            )
        );
    };

    return (
        <CenterComponent>
            <RegisterDumb
                roleParams={roleParams}
                capitalizeFirstLetter={capitalizeFirstLetter}
                loading={loading}
                clickSubmit={clickSubmit}
                handleChange={handleChange}
                values={values}
            />
        </CenterComponent>
    );
};

export default Register;
